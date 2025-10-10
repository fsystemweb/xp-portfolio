import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
  it('renders logo, names, and loading bar', () => {
    render(<LoadingScreen />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('James')).toBeInTheDocument();
    expect(screen.getByText('lewis')).toBeInTheDocument();
    expect(screen.getByAltText('bar-loading')).toBeInTheDocument();
  });
});
