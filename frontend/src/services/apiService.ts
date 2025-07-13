// Real Position API service - integrates with actual backend
import { CandidateApiResponse, PositionApiResponse } from '../types/kanban';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3010';

// Real API: Fetch interview flow information for a position
export const fetchInterviewFlow = async (positionId: number): Promise<PositionApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/position/${positionId}/interviewflow`);

    if (!response.ok) {
      throw new Error(`Failed to fetch interview flow: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`API: Fetched interview flow for position ${positionId}:`, data);

    return data;
  } catch (error) {
    console.error(`Error fetching interview flow for position ${positionId}:`, error);
    throw error;
  }
};

// Real API: Fetch candidates for a position
export const fetchCandidates = async (positionId: number): Promise<CandidateApiResponse[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/position/${positionId}/candidates`);

    if (!response.ok) {
      throw new Error(`Failed to fetch candidates: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`API: Fetched candidates for position ${positionId}:`, data);

    return data;
  } catch (error) {
    console.error(`Error fetching candidates for position ${positionId}:`, error);
    throw error;
  }
};

// Real API: Update candidate stage
export const updateCandidateStage = async (
  candidateId: number,
  applicationId: number,
  currentInterviewStep: number
): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates/${candidateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        applicationId,
        currentInterviewStep
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Failed to update candidate stage: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log(`API: Updated candidate ${candidateId} to step ${currentInterviewStep}:`, data);

    return data;
  } catch (error) {
    console.error(`Error updating candidate ${candidateId} stage:`, error);
    throw error;
  }
};

// Real API: Create new candidate
export const createCandidate = async (candidateData: any): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidateData)
    });

    if (!response.ok) {
      throw new Error(`Failed to create candidate: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API: Created new candidate:', data);

    return data;
  } catch (error) {
    console.error('Error creating candidate:', error);
    throw error;
  }
};

// Real API: Get all positions
export const fetchPositions = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/positions`);

    if (!response.ok) {
      throw new Error(`Failed to fetch positions: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API: Fetched all positions:', data);

    return data;
  } catch (error) {
    console.error('Error fetching positions:', error);
    throw error;
  }
};

// Real API: Get dashboard statistics (aggregated data)
export const fetchDashboardStats = async (): Promise<any> => {
  try {
    // Since there's no general positions endpoint, we'll work with known position IDs
    const knownPositionIds = [1, 2, 3];
    const positionTitles: { [key: number]: string } = {
      1: 'Senior Full-Stack Engineer',
      2: 'Junior Android Engineer',
      3: 'Product Manager'
    };

    // For each position, get candidate count and interview flow
    const positionStats = await Promise.all(
      knownPositionIds.map(async (positionId) => {
        try {
          const [candidates, flowData] = await Promise.all([
            fetchCandidates(positionId),
            fetchInterviewFlow(positionId)
          ]);

          return {
            id: positionId,
            title: positionTitles[positionId] || `Position ${positionId}`,
            status: 'Open', // Default to Open since we don't have status info
            candidateCount: candidates.length,
            candidates: candidates,
            interviewFlow: flowData
          };
        } catch (error) {
          console.warn(`Failed to fetch data for position ${positionId}:`, error);
          return {
            id: positionId,
            title: positionTitles[positionId] || `Position ${positionId}`,
            status: 'Open',
            candidateCount: 0,
            candidates: [],
            interviewFlow: null
          };
        }
      })
    );

    // Calculate summary statistics
    const totalPositions = positionStats.length;
    const totalCandidates = positionStats.reduce((sum, pos) => sum + pos.candidateCount, 0);
    const openPositions = positionStats.filter(pos => pos.status === 'Open').length;

    return {
      totalPositions,
      totalCandidates,
      openPositions,
      positions: positionStats
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};

// Create application for a candidate to a specific position
export const createApplication = async (applicationData: any): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create application: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API: Created application:', data);

    return data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error;
  }
};
