// Custom hook for fetching dashboard data

import { useCallback, useEffect, useState } from 'react';
import { fetchDashboardStats } from '../services/apiService';

interface DashboardStats {
  totalPositions: number;
  totalCandidates: number;
  openPositions: number;
  positions: Array<{
    id: number;
    title: string;
    status: string;
    candidateCount: number;
    candidates: any[];
  }>;
}

interface UseDashboardResult {
  data: DashboardStats | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useDashboard = (): UseDashboardResult => {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const dashboardData = await fetchDashboardStats();
      setData(dashboardData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return {
    data,
    loading,
    error,
    refetch
  };
};
