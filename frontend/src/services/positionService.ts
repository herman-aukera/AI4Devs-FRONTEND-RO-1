// Position API service functions

import { CandidateApiResponse, PositionApiResponse } from '../types/kanban';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3010';

// Fetch interview flow information for a position
export const fetchInterviewFlow = async (positionId: number): Promise<PositionApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/position/${positionId}/interviewflow`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the full response which contains interviewFlow
  } catch (error) {
    console.error('Error fetching interview flow:', error);
    throw new Error('Failed to fetch interview flow');
  }
};

// Fetch candidates for a position
export const fetchCandidates = async (positionId: number): Promise<CandidateApiResponse[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/position/${positionId}/candidates`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching candidates:', error);
    throw new Error('Failed to fetch candidates');
  }
};

// Update candidate stage
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
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating candidate stage:', error);
    throw new Error('Failed to update candidate stage');
  }
};
