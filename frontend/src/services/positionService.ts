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

    return data;
  } catch (error) {
    console.error(`Error updating candidate ${candidateId} stage:`, error);
    throw error;
  }
};
