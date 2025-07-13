import { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Star, StarFill, Trash } from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { createApplication, fetchPositions } from '../services/apiService';
import FileUploader from './FileUploader';
import { PageHeader } from './common/PageHeader';

const AddCandidateForm = () => {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    educations: [],
    workExperiences: [],
    cv: null,
    positionId: '', // Selected position
    rating: 0 // Star rating (0-5)
  });
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Load available positions
  useEffect(() => {
    const loadPositions = async () => {
      try {
        const positionsData = await fetchPositions();
        setPositions(positionsData);
      } catch (error) {
        console.error('Error loading positions:', error);
        setError('Failed to load available positions');
      }
    };
    loadPositions();
  }, []);

  // Star rating component
  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="d-flex align-items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="btn btn-link p-0 text-warning"
            onClick={() => onRatingChange(star)}
            style={{ border: 'none', background: 'none', fontSize: '1.2rem' }}
          >
            {star <= rating ? <StarFill /> : <Star />}
          </button>
        ))}
        <span className="ms-2 text-muted">({rating}/5)</span>
      </div>
    );
  };

  const handleInputChange = (e, index, section) => {
    const updatedSection = [...candidate[section]];
    if (updatedSection[index]) {
      updatedSection[index][e.target.name] = e.target.value;
      setCandidate({ ...candidate, [section]: updatedSection });
    }
  };

  const handleDateChange = (date, index, section, field) => {
    const updatedSection = [...candidate[section]];
    if (updatedSection[index]) {
      updatedSection[index][field] = date;
      setCandidate({ ...candidate, [section]: updatedSection });
    }
  };

  const handleAddSection = (section) => {
    const newSection = section === 'educations' ? { institution: '', title: '', startDate: '', endDate: '' } : { company: '', position: '', description: '', startDate: '', endDate: '' };
    setCandidate({ ...candidate, [section]: [...candidate[section], newSection] });
  };

  const handleRemoveSection = (index, section) => {
    const updatedSection = [...candidate[section]];
    updatedSection.splice(index, 1);
    setCandidate({ ...candidate, [section]: updatedSection });
  };

  const handleCVUpload = (fileData) => {
    setCandidate({ ...candidate, cv: fileData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate position selection
    if (!candidate.positionId) {
      setError('Por favor selecciona una posición para el candidato');
      return;
    }

    try {
      const candidateData = {
        ...candidate,
        cv: candidate.cv ? {
          filePath: candidate.cv.filePath,
          fileType: candidate.cv.fileType
        } : null
      };

      // Format date fields to ISO-8601 DateTime format for Prisma
      candidateData.educations = candidateData.educations.map(education => ({
        ...education,
        startDate: education.startDate ? new Date(education.startDate).toISOString() : null,
        endDate: education.endDate ? new Date(education.endDate).toISOString() : null
      }));
      candidateData.workExperiences = candidateData.workExperiences.map(experience => ({
        ...experience,
        startDate: experience.startDate ? new Date(experience.startDate).toISOString() : null,
        endDate: experience.endDate ? new Date(experience.endDate).toISOString() : null
      }));

      // Create candidate first
      const candidateResponse = await fetch('http://localhost:3010/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(candidateData)
      });

      if (candidateResponse.status === 201) {
        const candidateResult = await candidateResponse.json();

        // Handle both response structures: { data: candidate } or just candidate
        const candidateId = candidateResult.data?.id || candidateResult.id;

        if (!candidateId) {
          throw new Error('No se pudo obtener el ID del candidato creado');
        }

        // Create application for the selected position
        const applicationData = {
          positionId: parseInt(candidate.positionId),
          candidateId: candidateId,
          currentInterviewStep: 1, // Start at first interview step
          rating: candidate.rating
        };

        await createApplication(applicationData);

        setSuccessMessage(`¡Éxito! Candidato ${candidateData.firstName} ${candidateData.lastName} añadido a la posición y aplicación creada. Será redirigido al Kanban en 3 segundos...`);
        setError('');

        // Reset form after showing success message
        setTimeout(() => {
          setCandidate({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            educations: [],
            workExperiences: [],
            cv: null,
            positionId: '',
            rating: 0
          });

          // Navigate to the position's Kanban after successful creation
          navigate(`/positions/${candidate.positionId}`);
        }, 3000);
      } else if (candidateResponse.status === 400) {
        const errorData = await candidateResponse.json();
        throw new Error('Datos inválidos: ' + errorData.message);
      } else if (candidateResponse.status === 500) {
        throw new Error('Error interno del servidor');
      } else {
        throw new Error('Error al enviar datos del candidato');
      }
    } catch (error) {
      setError('Error al añadir candidato: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <Container className="mt-5">
      <PageHeader
        title="Agregar Candidato"
        onBackClick={() => navigate('/')}
      />
      <Card className="shadow p-4">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  required
                  onChange={(e) => setCandidate({ ...candidate, firstName: e.target.value })}
                  className="form-control shadow-sm"
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  required
                  onChange={(e) => setCandidate({ ...candidate, lastName: e.target.value })}
                  className="form-control shadow-sm"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                  className="form-control shadow-sm"
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  onChange={(e) => setCandidate({ ...candidate, phone: e.target.value })}
                  className="form-control shadow-sm"
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  onChange={(e) => setCandidate({ ...candidate, address: e.target.value })}
                  className="form-control shadow-sm"
                />
              </Form.Group>

              <Form.Group controlId="positionId" className="mt-3">
                <Form.Label>Posición a la que aplica <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  as="select"
                  name="positionId"
                  required
                  value={candidate.positionId}
                  onChange={(e) => setCandidate({ ...candidate, positionId: e.target.value })}
                  className="form-control shadow-sm"
                >
                  <option value="">Selecciona una posición...</option>
                  {positions.map((position) => (
                    <option key={position.id} value={position.id}>
                      {position.title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="rating" className="mt-3">
                <Form.Label>Evaluación inicial</Form.Label>
                <div className="mt-2">
                  <StarRating
                    rating={candidate.rating}
                    onRatingChange={(rating) => setCandidate({ ...candidate, rating })}
                  />
                </div>
                <Form.Text className="text-muted">
                  Evalúa al candidato del 1 al 5 según tu primera impresión
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="cv">
                <Form.Label>CV (Curriculum Vitae)</Form.Label>
                <FileUploader
                  onChange={handleCVUpload}
                  onUpload={handleCVUpload}
                  className="shadow-sm"
                />
                <Form.Text className="text-muted">
                  📎 Sube el CV del candidato en formato PDF o Word. Este archivo se guardará en el sistema para consultas futuras.
                </Form.Text>
              </Form.Group>
              <Row className="mt-4">
                <Button onClick={() => handleAddSection('educations')} className="btn btn-primary btn-sm mr-2">Añadir Educación</Button>
              </Row>
              {candidate.educations.map((education, index) => (
                <div key={`education-${index}`} className="mb-3">
                  <Row className="mt-4">
                    <Col md={6}>
                      <FormControl
                        placeholder="Institución"
                        name="institution"
                        value={education.institution}
                        onChange={(e) => handleInputChange(e, index, 'educations')}
                        className="form-control shadow-sm"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md={6}>
                      <FormControl
                        placeholder="Título"
                        name="title"
                        value={education.title}
                        onChange={(e) => handleInputChange(e, index, 'educations')}
                        className="form-control shadow-sm"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md={6}>
                      <DatePicker
                        selected={education.startDate}
                        onChange={(date) => handleDateChange(date, index, 'educations', 'startDate')}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Fecha de Inicio"
                        className="form-control shadow-sm"
                      />
                    </Col>
                    <Col md={6}>
                      <DatePicker
                        selected={education.endDate}
                        onChange={(date) => handleDateChange(date, index, 'educations', 'endDate')}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Fecha de Fin"
                        className="form-control shadow-sm"
                      />
                    </Col>
                  </Row>
                  <Button variant="danger" onClick={() => handleRemoveSection(index, 'educations')} className="mt-2">
                    <Trash /> Eliminar
                  </Button>
                </div>
              ))}
              <Row className="mt-4">
                <Button onClick={() => handleAddSection('workExperiences')} className="btn btn-primary btn-sm mr-2">Añadir Experiencia Laboral</Button>
              </Row>
              {candidate.workExperiences.map((experience, index) => (
                <div key={`experience-${index}`} className="mb-3">
                  <Row className="mt-4">
                    <Col md={6}>
                      <FormControl
                        placeholder="Empresa"
                        name="company"
                        value={experience.company}
                        onChange={(e) => handleInputChange(e, index, 'workExperiences')}
                        className="form-control shadow-sm"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md={6}>
                      <FormControl
                        placeholder="Puesto"
                        name="position"
                        value={experience.position}
                        onChange={(e) => handleInputChange(e, index, 'workExperiences')}
                        className="form-control shadow-sm"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md={6}>
                      <DatePicker
                        selected={experience.startDate}
                        onChange={(date) => handleDateChange(date, index, 'workExperiences', 'startDate')}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Fecha de Inicio"
                        className="form-control shadow-sm"
                      />
                    </Col>
                    <Col md={6}>
                      <DatePicker
                        selected={experience.endDate}
                        onChange={(date) => handleDateChange(date, index, 'workExperiences', 'endDate')}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Fecha de Fin"
                        className="form-control shadow-sm"
                      />
                    </Col>
                  </Row>
                  <Button variant="danger" onClick={() => handleRemoveSection(index, 'workExperiences')} className="mt-2">
                    <Trash /> Eliminar
                  </Button>
                </div>
              ))}
            </Col>
          </Row>
          <Button type="submit" className="btn btn-primary btn-block shadow-sm mt-5">Enviar</Button>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
        </Form>
      </Card>
    </Container>
  );
};

export default AddCandidateForm;
