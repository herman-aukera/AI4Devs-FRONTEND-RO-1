// Candidate card component for Kanban

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Candidate } from '../../types/kanban';
import { ScoreBadge } from '../common/ScoreBadge';

interface CandidateCardProps {
  candidate: Candidate;
  className?: string;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  className = ''
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: `candidate-${candidate.id}`,
    data: {
      candidate,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`mb-3 border-0 shadow-sm ${className} ${isDragging ? 'dragging' : ''}`}
      data-testid={`candidate-card-${candidate.id}`}
      {...listeners}
      {...attributes}
    >
      <Card.Body className="p-3">
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <Card.Title className="h6 mb-2 text-dark">
              {candidate.fullName}
            </Card.Title>
          </div>
          <ScoreBadge score={candidate.averageScore} />
        </div>
      </Card.Body>
    </Card>
  );
};
