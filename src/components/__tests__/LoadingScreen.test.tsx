import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LoadingScreen from '../LoadingScreen';

// Mock the JSON import
vi.mock('../../data/portfolio.json', () => ({
  default: {
    loadingScreen: {
      name: 'James',
      lastname: 'Lewis',
    },
  },
}));

describe('LoadingScreen', () => {
  it('renders logo, names, and loading bar', () => {
    render(<LoadingScreen />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('James')).toBeInTheDocument();
    expect(screen.getByText('Lewis')).toBeInTheDocument();
    expect(screen.getByAltText('bar-loading')).toBeInTheDocument();
  });
});
