import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { KanbanBoard } from '../components/kanban/KanbanBoard';

// Mock the hooks
jest.mock('../hooks/usePositionFlow');
jest.mock('../hooks/usePositionCandidates');
jest.mock('../hooks/useUpdateCandidateStage');

import { usePositionCandidates } from '../hooks/usePositionCandidates';
import { usePositionFlow } from '../hooks/usePositionFlow';
import { useUpdateCandidateStage } from '../hooks/useUpdateCandidateStage';

const mockUsePositionFlow = usePositionFlow as jest.MockedFunction<typeof usePositionFlow>;
const mockUsePositionCandidates = usePositionCandidates as jest.MockedFunction<typeof usePositionCandidates>;
const mockUseUpdateCandidateStage = useUpdateCandidateStage as jest.MockedFunction<typeof useUpdateCandidateStage>;

beforeEach(() => {
  // Reset mocks before each test
  mockUsePositionFlow.mockReturnValue({
    data: {
      positionName: "Full Stack Developer",
      interviewFlow: {
        id: 1,
        description: "Technical Interview Process",
        interviewSteps: [
          { id: 1, interviewFlowId: 1, interviewTypeId: 1, name: "Initial Review", orderIndex: 1 },
          { id: 2, interviewFlowId: 1, interviewTypeId: 2, name: "Technical Screen", orderIndex: 2 }
        ]
      }
    },
    loading: false,
    error: null,
    refetch: jest.fn()
  });

  mockUsePositionCandidates.mockReturnValue({
    data: [
      {
        id: 1,
        fullName: "John Doe",
        currentInterviewStep: "Initial Review",
        applicationId: 101,
        averageScore: 85
      }
    ],
    loading: false,
    error: null,
    refetch: jest.fn()
  });

  mockUseUpdateCandidateStage.mockReturnValue({
    updateStage: jest.fn(),
    loading: false,
    error: null
  });
});

describe('KanbanBoard Component', () => {
  test('renders kanban board with columns', async () => {
    render(<KanbanBoard positionId={1} />);

    await waitFor(() => {
      expect(screen.getByText('Initial Review')).toBeInTheDocument();
      expect(screen.getByText('Technical Screen')).toBeInTheDocument();
    });
  });

  test('renders candidates in correct columns', async () => {
    render(<KanbanBoard positionId={1} />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  test('displays loading state', () => {
    // Override the mock for this specific test
    mockUsePositionFlow.mockReturnValueOnce({
      data: null,
      loading: true,
      error: null,
      refetch: jest.fn()
    });

    mockUsePositionCandidates.mockReturnValueOnce({
      data: [],
      loading: true,
      error: null,
      refetch: jest.fn()
    });

    render(<KanbanBoard positionId={1} />);
    expect(screen.getByText('Cargando tablero Kanban...')).toBeInTheDocument();
  });
});
