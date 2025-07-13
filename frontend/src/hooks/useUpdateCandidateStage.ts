// Custom hook for updating candidate stage with real API

import { useState } from 'react';
import { updateCandidateStage } from '../services/apiService';

interface UseUpdateCandidateStageResult {
  updateStage: (candidateId: number, applicationId: number, currentInterviewStep: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useUpdateCandidateStage = (): UseUpdateCandidateStageResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateStage = async (
    candidateId: number,
    applicationId: number,
    currentInterviewStep: number
  ): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await updateCandidateStage(candidateId, applicationId, currentInterviewStep);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      throw err; // Re-throw to allow components to handle it
    } finally {
      setLoading(false);
    }
  };

  return { updateStage, loading, error };
};
