// Mock Position API service for testing the Kanban interface

import { CandidateApiResponse, PositionApiResponse } from '../types/kanban';

// Mock data for testing
const mockInterviewFlow: PositionApiResponse = {
  positionName: "Full Stack Developer",
  interviewFlow: {
    id: 1,
    description: "Technical Interview Process",
    interviewSteps: [
      { id: 1, interviewFlowId: 1, interviewTypeId: 1, name: "Initial Review", orderIndex: 1 },
      { id: 2, interviewFlowId: 1, interviewTypeId: 2, name: "Technical Screen", orderIndex: 2 },
      { id: 3, interviewFlowId: 1, interviewTypeId: 3, name: "On-site Interview", orderIndex: 3 },
      { id: 4, interviewFlowId: 1, interviewTypeId: 4, name: "Final Interview", orderIndex: 4 },
      { id: 5, interviewFlowId: 1, interviewTypeId: 5, name: "Offer", orderIndex: 5 }
    ]
  }
};

const mockCandidates: CandidateApiResponse[] = [
  {
    id: 1,
    fullName: "John Doe",
    currentInterviewStep: "1",
    applicationId: 101,
    averageScore: 85
  },
  {
    id: 2,
    fullName: "Jane Smith",
    currentInterviewStep: "2",
    applicationId: 102,
    averageScore: 92
  },
  {
    id: 3,
    fullName: "Mike Johnson",
    currentInterviewStep: "1",
    applicationId: 103,
    averageScore: 78
  },
  {
    id: 4,
    fullName: "Sarah Wilson",
    currentInterviewStep: "3",
    applicationId: 104,
    averageScore: 88
  },
  {
    id: 5,
    fullName: "David Brown",
    currentInterviewStep: "4",
    applicationId: 105,
    averageScore: 95
  },
  {
    id: 6,
    fullName: "Emily Davis",
    currentInterviewStep: "2",
    applicationId: 106,
    averageScore: 87
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
