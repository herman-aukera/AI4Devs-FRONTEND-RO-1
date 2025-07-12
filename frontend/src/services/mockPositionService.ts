// Mock Position API service for testing the Kanban interface

import { CandidateApiResponse, PositionApiResponse } from '../types/kanban';

// Mock data for testing - matching exact requirements from the task
const mockInterviewFlow: PositionApiResponse = {
  positionName: "Senior Backend Engineer",
  interviewFlow: {
    id: 1,
    description: "Standard development interview process",
    interviewSteps: [
      { id: 1, interviewFlowId: 1, interviewTypeId: 1, name: "Llamada telefónica", orderIndex: 1 },
      { id: 2, interviewFlowId: 1, interviewTypeId: 2, name: "Entrevista técnica", orderIndex: 2 },
      { id: 3, interviewFlowId: 1, interviewTypeId: 3, name: "Entrevista cultural", orderIndex: 3 },
      { id: 4, interviewFlowId: 1, interviewTypeId: 4, name: "Entrevista manager", orderIndex: 4 }
    ]
  }
};

const mockCandidates: CandidateApiResponse[] = [
  {
    id: 1,
    fullName: "John Doe",
    currentInterviewStep: "Entrevista técnica",
    applicationId: 101,
    averageScore: 4.2
  },
  {
    id: 2,
    fullName: "Jane Smith",
    currentInterviewStep: "Llamada telefónica",
    applicationId: 102,
    averageScore: 3.8
  },
  {
    id: 3,
    fullName: "Bob Brown",
    currentInterviewStep: "Entrevista cultural",
    applicationId: 103,
    averageScore: 4.5
  },
  {
    id: 4,
    fullName: "Eva White",
    currentInterviewStep: "Entrevista manager",
    applicationId: 104,
    averageScore: 4.8
  },
  {
    id: 5,
    fullName: "Alice Johnson",
    currentInterviewStep: "Llamada telefónica",
    applicationId: 105,
    averageScore: 3.5
  }
];

// Fetch interview flow information for a position (mock)
export const fetchInterviewFlow = async (positionId: number): Promise<PositionApiResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  console.log(`Mock: Fetching interview flow for position ${positionId}`);
  return mockInterviewFlow;
};

// Fetch candidates for a position (mock)
export const fetchCandidates = async (positionId: number): Promise<CandidateApiResponse[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  console.log(`Mock: Fetching candidates for position ${positionId}`);
  return mockCandidates;
};

// Update candidate stage (mock)
export const updateCandidateStage = async (
  candidateId: number,
  applicationId: number,
  currentInterviewStep: number
): Promise<any> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  console.log(`Mock: Updating candidate ${candidateId} to step ${currentInterviewStep}`);

  // Find and update the candidate in our mock data
  const candidateIndex = mockCandidates.findIndex(c => c.id === candidateId);
  if (candidateIndex !== -1) {
    mockCandidates[candidateIndex].currentInterviewStep = currentInterviewStep.toString();
  }

  return {
    success: true,
    message: `Candidate ${candidateId} moved to step ${currentInterviewStep}`
  };
};
