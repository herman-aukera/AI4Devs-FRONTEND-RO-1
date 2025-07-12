// Main Kanban board component

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import React, { useMemo } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { usePositionCandidates } from '../../hooks/usePositionCandidates';
import { usePositionFlow } from '../../hooks/usePositionFlow';
import { useUpdateCandidateStage } from '../../hooks/useUpdateCandidateStage';
import { Candidate, KanbanColumn as ColumnType } from '../../types/kanban';
import { CandidateCard } from './CandidateCard';
import { KanbanColumn } from './KanbanColumn';

interface KanbanBoardProps {
  positionId: number;
  className?: string;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  positionId,
  className = ''
}) => {
  const { data: flowData, loading: flowLoading, error: flowError } = usePositionFlow(positionId);
  const { data: candidatesData, loading: candidatesLoading, error: candidatesError, refetch: refetchCandidates } = usePositionCandidates(positionId);
  const { updateStage, loading: updateLoading } = useUpdateCandidateStage();

  const [activeCandidate, setActiveCandidate] = React.useState<Candidate | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Create columns from interview steps and organize candidates
  const columns: ColumnType[] = useMemo(() => {
    if (!flowData || !candidatesData) return [];

    const sortedSteps = [...flowData.interviewFlow.interviewSteps].sort(
      (a: any, b: any) => a.orderIndex - b.orderIndex
    );

    return sortedSteps.map((step: any) => ({
      id: step.id,
      name: step.name,
      candidates: candidatesData.filter(candidate =>
        candidate.currentInterviewStep === step.name
      ),
    }));
  }, [flowData, candidatesData]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const candidate = active.data.current?.candidate;
    if (candidate) {
      setActiveCandidate(candidate);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCandidate(null);

    if (!over) return;

    const activeCandidate = active.data.current?.candidate as Candidate;
    const overColumn = over.data.current?.column as ColumnType;

    if (!activeCandidate || !overColumn) return;

    // Find the current step name
    const currentStepName = activeCandidate.currentInterviewStep;
    const newStepName = overColumn.name;

    // If dropped in the same column, no action needed
    if (currentStepName === newStepName) return;

    try {
      // Update the candidate's stage
      await updateStage(
        activeCandidate.id,
        activeCandidate.applicationId || 0,
        overColumn.id
      );

      // Refetch candidates to get updated data
      refetchCandidates();
    } catch (error) {
      console.error('Failed to update candidate stage:', error);
      // You might want to show a toast notification here
    }
  };

  const loading = flowLoading || candidatesLoading;
  const error = flowError || candidatesError;

  if (loading) {
    return (
      <Container className={`py-4 ${className}`}>
        <div className="text-center">
          <Spinner animation="border">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
          <p className="mt-2 text-muted">Cargando tablero Kanban...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className={`py-4 ${className}`}>
        <Alert variant="danger">
          <Alert.Heading>Error al cargar datos</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid className={`kanban-board py-4 ${className}`}>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Row className="g-3">
          {columns.map((column) => (
            <Col
              key={column.id}
              xs={12}
              md={6}
              lg={4}
              xl={Math.max(2, Math.floor(12 / columns.length))}
              className="kanban-column-wrapper"
              data-testid={`column-wrapper-${column.id}`}
            >
              <KanbanColumn column={column} />
            </Col>
          ))}
        </Row>

        <DragOverlay>
          {activeCandidate ? (
            <CandidateCard
              candidate={activeCandidate}
              className="shadow-lg"
            />
          ) : null}
        </DragOverlay>

        {updateLoading && (
          <div className="position-fixed top-50 start-50 translate-middle">
            <div className="bg-white p-3 rounded shadow">
              <Spinner animation="border" size="sm" className="me-2" />
              <span>Actualizando...</span>
            </div>
          </div>
        )}
      </DndContext>
    </Container>
  );
};
