// Score badge component for displaying candidate scores

import React from 'react';
import { Badge } from 'react-bootstrap';

interface ScoreBadgeProps {
  score: number | null | undefined;
  className?: string;
}

export const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score, className = '' }) => {
  const getVariant = (score: number | null | undefined): string => {
    if (score === null || score === undefined || isNaN(score)) return 'secondary';
    if (score >= 4) return 'success';
    if (score >= 3) return 'warning';
    if (score >= 2) return 'secondary';
    return 'danger';
  };

  const formatScore = (score: number | null | undefined): string => {
    if (score === null || score === undefined || isNaN(score)) return 'N/A';
    return score === 0 ? '0.0' : score.toFixed(1);
  };

  return (
    <Badge
      bg={getVariant(score)}
      className={`fs-6 ${className}`}
      data-testid="score-badge"
    >
      ⭐ {formatScore(score)}
    </Badge>
  );
};
