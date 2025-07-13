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

export interface Education {
  id: number;
  institution: string;
  title: string;
  startDate: string;
  endDate?: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  description?: string;
  startDate: string;
  endDate?: string;
}

export interface Resume {
  id: number;
  filePath: string;
  fileType: string;
}

export interface Interview {
  interviewDate: string;
  interviewStep: {
    name: string;
  };
  notes?: string;
  score?: number;
}

export interface Application {
  id: number;
  positionId: number;
  position: {
    id: number;
    title: string;
  };
  currentInterviewStep: number;
  notes?: string;
  interviews: Interview[];
}

export interface Candidate {
  id: number;
  fullName: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  currentInterviewStep: string;
  averageScore: number | null | undefined;
  applicationId?: number;
  educations?: Education[];
  workExperiences?: WorkExperience[];
  resumes?: Resume[];
  applications?: Application[];
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
  interviewFlow: {
    positionName: string;
    interviewFlow: {
      id: number;
      description: string;
      interviewSteps: InterviewStep[];
    };
  };
}

export interface CandidateApiResponse {
  fullName: string;
  currentInterviewStep: string;
  averageScore: number | null | undefined;
  id: number;
  applicationId: number;
}
