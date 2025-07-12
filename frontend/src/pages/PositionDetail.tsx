// Position detail page with Kanban board

import React from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { KanbanBoard } from '../components/kanban/KanbanBoard';
import { usePositionFlow } from '../hooks/usePositionFlow';

export const PositionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const positionId = id ? parseInt(id, 10) : 0;

  const { data: flowData, error } = usePositionFlow(positionId);

  if (!id || isNaN(positionId)) {
    return (
      <div>
        <PageHeader title="Error" />
        <Alert variant="danger" className="mx-3">
          ID de posición inválido
        </Alert>
      </div>
    );
  }

  const positionTitle = flowData?.positionName || 'Cargando...';

  return (
    <div className="position-detail-page">
      <PageHeader title={positionTitle} />

      {error ? (
        <Alert variant="danger" className="mx-3">
          Error al cargar la información de la posición: {error}
        </Alert>
      ) : (
        <KanbanBoard positionId={positionId} />
      )}
    </div>
  );
};
