// Real API service for position and candidate management

const API_BASE_URL = 'http://localhost:3010';

interface UpdateStageRequest {
  applicationId: number;
  currentInterviewStep: number;
}

export const updateCandidateStage = async (
  candidateId: number,
  applicationId: number,
  currentInterviewStep: number
): Promise<void> => {
  try {
    const requestBody: UpdateStageRequest = {
      applicationId,
      currentInterviewStep
    };

    const response = await fetch(`${API_BASE_URL}/candidates/${candidateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to update candidate stage: ${errorData.message || response.statusText}`);
    }

    console.log(`Successfully updated candidate ${candidateId} to stage ${currentInterviewStep}`);
  } catch (error) {
    console.error('Error updating candidate stage:', error);
    throw error;
  }
};

export const fetchInterviewFlow = async (positionId: number): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/position/${positionId}/interviewflow`);
    if (!response.ok) {
      throw new Error(`Failed to fetch interview flow: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching interview flow:', error);
    throw error;
  }
};

export const fetchCandidates = async (positionId: number): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/position/${positionId}/candidates`);
    if (!response.ok) {
      throw new Error(`Failed to fetch candidates: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching candidates:', error);
    throw error;
  }
};
