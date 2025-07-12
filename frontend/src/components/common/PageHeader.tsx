// Page header component with title and back arrow

import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  onBackClick?: () => void;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onBackClick,
  className = ''
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate('/positions');
    }
  };

  return (
    <Container className={`py-3 ${className}`}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Button
            variant="link"
            className="p-0 text-decoration-none"
            onClick={handleBackClick}
            data-testid="back-button"
          >
            <ArrowLeft size={24} className="text-primary" />
          </Button>
        </Col>
        <Col>
          <h1 className="mb-0 h3" data-testid="page-title">
            {title}
          </h1>
        </Col>
      </Row>
    </Container>
  );
};
