// Tests for ScoreBadge component

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ScoreBadge } from '../components/common/ScoreBadge';

describe('ScoreBadge', () => {
  test('renders score correctly', () => {
    render(<ScoreBadge score={4.5} />);
    expect(screen.getByTestId('score-badge')).toHaveTextContent('⭐ 4.5');
  });

  test('shows N/A for zero score', () => {
    render(<ScoreBadge score={0} />);
    expect(screen.getByTestId('score-badge')).toHaveTextContent('⭐ N/A');
  });

  test('applies correct variant for high score', () => {
    render(<ScoreBadge score={4.5} />);
    const badge = screen.getByTestId('score-badge');
    expect(badge).toHaveClass('bg-success');
  });

  test('applies correct variant for medium score', () => {
    render(<ScoreBadge score={3.5} />);
    const badge = screen.getByTestId('score-badge');
    expect(badge).toHaveClass('bg-warning');
  });

  test('applies correct variant for low score', () => {
    render(<ScoreBadge score={2.5} />);
    const badge = screen.getByTestId('score-badge');
    expect(badge).toHaveClass('bg-secondary');
  });

  test('applies correct variant for very low score', () => {
    render(<ScoreBadge score={1.5} />);
    const badge = screen.getByTestId('score-badge');
    expect(badge).toHaveClass('bg-danger');
  });
});
