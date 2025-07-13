import { Alert, Badge, Button, Card, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/lti-logo.png';
import { useDashboard } from '../hooks/useDashboard';

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useDashboard();

  const getStatusBadgeVariant = (status) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return 'success';
      case 'closed':
        return 'danger';
      case 'draft':
        return 'secondary';
      default:
        return 'warning';
    }
  };

  const handleViewKanban = (positionId) => {
    navigate(`/positions/${positionId}`);
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <img src={logo} alt="LTI Logo" style={{ width: '150px' }} />
          <h1 className="mb-4 text-center">Dashboard del Reclutador</h1>
          <Spinner animation="border" className="mt-4">
            <span className="visually-hidden">Cargando dashboard...</span>
          </Spinner>
          <p className="mt-2 text-muted">Cargando estadísticas...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <img src={logo} alt="LTI Logo" style={{ width: '150px' }} />
          <h1 className="mb-4 text-center">Dashboard del Reclutador</h1>
          <Alert variant="danger" className="mt-4">
            <Alert.Heading>Error al cargar el dashboard</Alert.Heading>
            <p>{error}</p>
            <Button variant="outline-danger" onClick={refetch}>
              Reintentar
            </Button>
          </Alert>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <div className="text-center mb-4">
        <img src={logo} alt="LTI Logo" style={{ width: '150px' }} />
      </div>
      <h1 className="mb-4 text-center">Dashboard del Reclutador</h1>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center">
              <h3 className="text-primary">{data?.totalPositions || 0}</h3>
              <p className="text-muted mb-0">Posiciones Totales</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center">
              <h3 className="text-success">{data?.openPositions || 0}</h3>
              <p className="text-muted mb-0">Posiciones Abiertas</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center">
              <h3 className="text-info">{data?.totalCandidates || 0}</h3>
              <p className="text-muted mb-0">Candidatos Totales</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <h5 className="mb-3">Añadir Candidato</h5>
              <p className="text-muted mb-3">Registra un nuevo candidato en el sistema</p>
              <div className="mt-auto">
                <Link to="/add-candidate">
                  <Button variant="primary" className="w-100">
                    Añadir Nuevo Candidato
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <h5 className="mb-3">Ver Todas las Posiciones</h5>
              <p className="text-muted mb-3">Gestiona todas las posiciones disponibles</p>
              <div className="mt-auto">
                <Link to="/positions">
                  <Button variant="outline-primary" className="w-100">
                    Ir a Posiciones
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Positions Overview */}
      {data?.positions && data.positions.length > 0 && (
        <Card className="shadow-sm">
          <Card.Header>
            <h5 className="mb-0">Resumen de Posiciones</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Posición</th>
                  <th>Estado</th>
                  <th>Candidatos</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.positions.map((position) => (
                  <tr key={position.id}>
                    <td>
                      <strong>{position.title}</strong>
                    </td>
                    <td>
                      <Badge bg={getStatusBadgeVariant(position.status)}>
                        {position.status}
                      </Badge>
                    </td>
                    <td>
                      <span className="fw-bold">{position.candidateCount}</span> candidatos
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleViewKanban(position.id)}
                      >
                        Ver Kanban
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {/* Empty State */}
      {data?.positions && data.positions.length === 0 && (
        <Card className="shadow-sm">
          <Card.Body className="text-center py-5">
            <h5 className="text-muted">No hay posiciones disponibles</h5>
            <p className="text-muted">Comienza creando tu primera posición</p>
            <Button variant="primary">Crear Nueva Posición</Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default RecruiterDashboard;
