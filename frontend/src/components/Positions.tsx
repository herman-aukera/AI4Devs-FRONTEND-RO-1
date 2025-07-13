import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from './common/PageHeader';

type Position = {
    id: number;
    title: string;
    description: string;
    status: string;
    location: string;
    employmentType: string;
    applicationDeadline: string;
};

const Positions: React.FC = () => {
    const navigate = useNavigate();
    const [positions, setPositions] = useState<Position[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3010/positions');
                if (!response.ok) {
                    throw new Error('Failed to fetch positions');
                }
                const data = await response.json();
                setPositions(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPositions();
    }, []);

    const getStatusBadgeClass = (status: string): string => {
        switch (status) {
            case 'Open':
                return 'bg-success';
            case 'Closed':
                return 'bg-danger';
            case 'Draft':
                return 'bg-secondary';
            default:
                return 'bg-warning';
        }
    };

    const handleViewProcess = (positionId: number) => {
        navigate(`/positions/${positionId}`);
    };

    if (loading) {
        return (
            <Container className="mt-5">
                <PageHeader
                    title="Posiciones"
                    onBackClick={() => navigate('/recruiter-dashboard')}
                />
                <div className="text-center py-4">
                    <Spinner animation="border" />
                    <p className="mt-2">Cargando posiciones...</p>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <PageHeader
                    title="Posiciones"
                    onBackClick={() => navigate('/recruiter-dashboard')}
                />
                <Alert variant="danger">
                    Error al cargar posiciones: {error}
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <PageHeader
                title="Posiciones"
                onBackClick={() => navigate('/recruiter-dashboard')}
            />
            <Row className="mb-4">
                <Col md={3}>
                    <Form.Control type="text" placeholder="Buscar por título" />
                </Col>
                <Col md={3}>
                    <Form.Control type="date" placeholder="Buscar por fecha" />
                </Col>
                <Col md={3}>
                    <Form.Control as="select">
                        <option value="">Estado</option>
                        <option value="open">Abierto</option>
                        <option value="filled">Contratado</option>
                        <option value="closed">Cerrado</option>
                        <option value="draft">Borrador</option>
                    </Form.Control>
                </Col>
                <Col md={3}>
                    <Form.Control as="select">
                        <option value="">Manager</option>
                        <option value="john_doe">John Doe</option>
                        <option value="jane_smith">Jane Smith</option>
                        <option value="alex_jones">Alex Jones</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                {positions.map((position) => (
                    <Col md={6} lg={4} key={position.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <Card.Title className="text-primary mb-0">{position.title}</Card.Title>
                                    <span className={`badge ${getStatusBadgeClass(position.status)} ms-2`}>
                                        {position.status}
                                    </span>
                                </div>
                                <Card.Text className="text-muted mb-2 flex-grow-1">
                                    {position.description}
                                </Card.Text>
                                <div className="mb-3">
                                    <small className="text-muted">
                                        📍 {position.location} • {position.employmentType}
                                    </small>
                                    <br />
                                    <small className="text-muted">
                                        📅 Cierre: {new Date(position.applicationDeadline).toLocaleDateString()}
                                    </small>
                                </div>
                                <div className="mt-auto">
                                    <Button
                                        variant="primary"
                                        onClick={() => handleViewProcess(position.id)}
                                        className="w-100"
                                    >
                                        Ver Candidatos en Kanban
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Positions;
