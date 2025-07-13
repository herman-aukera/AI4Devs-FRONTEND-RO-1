// Candidate card component for Kanban

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getCandidateById } from '../../services/candidateService.js';
import { Candidate } from '../../types/kanban';
import { ScoreBadge } from '../common/ScoreBadge';
import { CandidateDetailModal } from './CandidateDetailModal';

interface CandidateCardProps {
  candidate: Candidate;
  className?: string;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  className = ''
}) => {
  const [showModal, setShowModal] = useState(false);
  const [detailedCandidate, setDetailedCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(false);

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

  const handleCardClick = async (e: React.MouseEvent) => {
    // Evitar que el click interfiera con el drag & drop
    e.stopPropagation();

    setLoading(true);
    try {
      const fullCandidate = await getCandidateById(candidate.id);
      setDetailedCandidate(fullCandidate);
      setShowModal(true);
    } catch (error) {
      console.error('Error loading candidate details:', error);
      // En caso de error, mostrar al menos la información básica que tenemos
      setDetailedCandidate(candidate);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card
        ref={setNodeRef}
        style={style}
        className={`mb-3 border-0 shadow-sm ${className} ${isDragging ? 'dragging' : ''} candidate-card`}
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
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  {candidate.email && candidate.email.length > 20
                    ? `${candidate.email.substring(0, 20)}...`
                    : candidate.email || 'Sin email'}
                </small>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={handleCardClick}
                  disabled={loading}
                  className="ms-2"
                  style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                >
                  {loading ? '...' : '👁️'}
                </Button>
              </div>
            </div>
            <ScoreBadge score={candidate.averageScore} />
          </div>
        </Card.Body>
      </Card>

      <CandidateDetailModal
        candidate={detailedCandidate}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
};
