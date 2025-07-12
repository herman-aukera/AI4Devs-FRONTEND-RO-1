// Custom hook for fetching position flow data

import { useEffect, useState } from 'react';
import { fetchInterviewFlow } from '../services/mockPositionService';
import { PositionApiResponse } from '../types/kanban';

interface UsePositionFlowResult {
  data: PositionApiResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const usePositionFlow = (positionId: number): UsePositionFlowResult => {
  const [data, setData] = useState<PositionApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const flowData = await fetchInterviewFlow(positionId);
      setData(flowData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setData(null);
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
