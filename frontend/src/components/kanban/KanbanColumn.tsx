// Kanban column component

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Candidate, KanbanColumn as ColumnType } from '../../types/kanban';
import { CandidateCard } from './CandidateCard';

interface KanbanColumnProps {
  column: ColumnType;
  className?: string;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  className = ''
}) => {
  const {
    isOver,
    setNodeRef,
  } = useDroppable({
    id: `column-${column.id}`,
    data: {
      column,
    },
  });

  const candidateIds = column.candidates.map(candidate => `candidate-${candidate.id}`);

  return (
    <Card
      className={`kanban-column h-100 ${className} ${isOver ? 'column-over' : ''}`}
      data-testid={`column-${column.name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <Card.Header className="bg-light border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0 text-dark fw-bold">
            {column.name}
          </h6>
          <Badge
            bg="secondary"
            className="fs-6"
            data-testid={`column-count-${column.id}`}
          >
            {column.candidates.length}
          </Badge>
        </div>
      </Card.Header>
      <Card.Body
        ref={setNodeRef}
        className="kanban-column-body p-3"
        style={{
          minHeight: '400px',
          backgroundColor: isOver ? '#f8f9fa' : 'transparent',
          transition: 'background-color 0.2s ease'
        }}
      >
        <SortableContext
          items={candidateIds}
          strategy={verticalListSortingStrategy}
        >
          {column.candidates.length === 0 ? (
            <div
              className="text-center text-muted py-4"
              data-testid={`empty-column-${column.id}`}
            >
              <p className="mb-0">No hay candidatos en esta etapa</p>
            </div>
          ) : (
            column.candidates.map((candidate: Candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
              />
            ))
          )}
        </SortableContext>
      </Card.Body>
    </Card>
  );
};
