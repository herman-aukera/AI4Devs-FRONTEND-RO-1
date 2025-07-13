// Modal para mostrar detalles completos del candidato

import React from 'react';
import { Badge, Button, Card, Col, Modal, Row, Table } from 'react-bootstrap';
import { Candidate } from '../../types/kanban';
import { ScoreBadge } from '../common/ScoreBadge';

interface CandidateDetailModalProps {
  candidate: Candidate | null;
  show: boolean;
  onHide: () => void;
}

export const CandidateDetailModal: React.FC<CandidateDetailModalProps> = ({
  candidate,
  show,
  onHide
}) => {
  if (!candidate) return null;

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Presente';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center">
          <span className="me-3">{candidate.fullName}</span>
          <ScoreBadge score={candidate.averageScore} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Información Básica */}
        <Card className="mb-3">
          <Card.Header>
            <h6 className="mb-0">📋 Información Personal</h6>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <p><strong>Email:</strong> {candidate.email || 'No especificado'}</p>
                <p><strong>Teléfono:</strong> {candidate.phone || 'No especificado'}</p>
              </Col>
              <Col md={6}>
                <p><strong>Dirección:</strong> {candidate.address || 'No especificada'}</p>
                <p><strong>Etapa Actual:</strong>
                  <Badge bg="primary" className="ms-2">{candidate.currentInterviewStep}</Badge>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Educación */}
        {candidate.educations && candidate.educations.length > 0 && (
          <Card className="mb-3">
            <Card.Header>
              <h6 className="mb-0">🎓 Educación</h6>
            </Card.Header>
            <Card.Body>
              {candidate.educations.map((education, index) => (
                <div key={education.id || index} className="mb-3 pb-3 border-bottom">
                  <h6 className="text-primary">{education.title}</h6>
                  <p className="mb-1"><strong>{education.institution}</strong></p>
                  <small className="text-muted">
                    {formatDate(education.startDate)} - {formatDate(education.endDate || '')}
                  </small>
                </div>
              ))}
            </Card.Body>
          </Card>
        )}

        {/* Experiencia Laboral */}
        {candidate.workExperiences && candidate.workExperiences.length > 0 && (
          <Card className="mb-3">
            <Card.Header>
              <h6 className="mb-0">💼 Experiencia Laboral</h6>
            </Card.Header>
            <Card.Body>
              {candidate.workExperiences.map((experience, index) => (
                <div key={experience.id || index} className="mb-3 pb-3 border-bottom">
                  <h6 className="text-primary">{experience.position}</h6>
                  <p className="mb-1"><strong>{experience.company}</strong></p>
                  {experience.description && (
                    <p className="mb-2 text-muted">{experience.description}</p>
                  )}
                  <small className="text-muted">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate || '')}
                  </small>
                </div>
              ))}
            </Card.Body>
          </Card>
        )}

        {/* Aplicaciones y Entrevistas */}
        {candidate.applications && candidate.applications.length > 0 && (
          <Card className="mb-3">
            <Card.Header>
              <h6 className="mb-0">📝 Aplicaciones</h6>
            </Card.Header>
            <Card.Body>
              {candidate.applications.map((application, index) => (
                <div key={application.id || index} className="mb-3">
                  <h6 className="text-primary">{application.position.title}</h6>
                  <p className="mb-2">
                    <strong>Etapa:</strong> Paso {application.currentInterviewStep}
                  </p>

                  {application.interviews && application.interviews.length > 0 && (
                    <div className="mt-3">
                      <strong>Entrevistas realizadas:</strong>
                      <Table size="sm" className="mt-2">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Etapa</th>
                            <th>Puntuación</th>
                            <th>Notas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {application.interviews.map((interview, iIndex) => (
                            <tr key={iIndex}>
                              <td>{formatDate(interview.interviewDate)}</td>
                              <td>{interview.interviewStep.name}</td>
                              <td>
                                {interview.score ? (
                                  <ScoreBadge score={interview.score} />
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                              <td>{interview.notes || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </div>
              ))}
            </Card.Body>
          </Card>
        )}

        {/* CVs */}
        {candidate.resumes && candidate.resumes.length > 0 && (
          <Card className="mb-3">
            <Card.Header>
              <h6 className="mb-0">📄 Currículums</h6>
            </Card.Header>
            <Card.Body>
              {candidate.resumes.map((resume, index) => (
                <div key={resume.id || index} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{resume.filePath}</span>
                  <Badge bg="secondary">{resume.fileType}</Badge>
                </div>
              ))}
            </Card.Body>
          </Card>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
