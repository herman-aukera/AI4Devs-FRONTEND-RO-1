// Tests for CandidateCard component

import { DndContext } from '@dnd-kit/core';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CandidateCard } from '../components/kanban/CandidateCard';
import { Candidate } from '../types/kanban';

const mockCandidate: Candidate = {
  id: 1,
  fullName: 'John Doe',
  currentInterviewStep: 'Technical Interview',
  averageScore: 4.5,
  applicationId: 1,
};

// Wrapper component to provide DnD context
const DndWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <DndContext onDragEnd={() => { }}>
    {children}
  </DndContext>
);

describe('CandidateCard', () => {
  test('renders candidate name correctly', () => {
    render(
      <DndWrapper>
        <CandidateCard candidate={mockCandidate} />
      </DndWrapper>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('renders with correct test id', () => {
    render(
      <DndWrapper>
        <CandidateCard candidate={mockCandidate} />
      </DndWrapper>
    );

    expect(screen.getByTestId('candidate-card-1')).toBeInTheDocument();
  });

  test('displays score badge', () => {
    render(
      <DndWrapper>
        <CandidateCard candidate={mockCandidate} />
      </DndWrapper>
    );

    expect(screen.getByTestId('score-badge')).toBeInTheDocument();
  });
});
