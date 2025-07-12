// Types and interfaces for Kanban functionality

export interface InterviewStep {
  id: number;
  interviewFlowId: number;
  interviewTypeId: number;
  name: string;
  orderIndex: number;
}

export interface InterviewFlow {
  id: number;
  description: string;
  interviewSteps: InterviewStep[];
}

export interface Position {
  id: number;
  title: string;
  positionName: string;
  interviewFlow: InterviewFlow;
}

export interface Candidate {
  id: number;
  fullName: string;
  currentInterviewStep: string;
  averageScore: number;
  applicationId?: number;
}

export interface KanbanColumn {
  id: number;
  name: string;
  candidates: Candidate[];
}

export interface DragEndResult {
  destination: {
    droppableId: string;
    index: number;
  } | null;
  source: {
    droppableId: string;
    index: number;
  };
  draggableId: string;
}

export interface KanbanContextType {
  columns: KanbanColumn[];
  candidates: Candidate[];
  loading: boolean;
  error: string | null;
  updateCandidateStage: (candidateId: number, newStageId: number, applicationId: number) => Promise<void>;
}

export interface PositionApiResponse {
  positionName: string;
  interviewFlow: {
    id: number;
    description: string;
    interviewSteps: InterviewStep[];
  };
}

export interface CandidateApiResponse {
  fullName: string;
  currentInterviewStep: string;
  averageScore: number;
  id: number;
  applicationId: number;
}
