// Custom hook for fetching position candidates

import { useEffect, useState } from 'react';
import { fetchCandidates } from '../services/mockPositionService';
import { CandidateApiResponse } from '../types/kanban';

interface UsePositionCandidatesResult {
  data: CandidateApiResponse[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const usePositionCandidates = (positionId: number): UsePositionCandidatesResult => {
  const [data, setData] = useState<CandidateApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const candidatesData = await fetchCandidates(positionId);
      setData(candidatesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (positionId) {
      fetchData();
    }
  }, [positionId]); // fetchData is stable but eslint doesn't know that

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};
