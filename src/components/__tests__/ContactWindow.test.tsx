import React from 'react';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactWindow } from '../windows/ContactWindow';

// Mock the imported icons
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual('lucide-react');
  return {
    ...(actual as Record<string, any>),
    Mail: ({ size = 20 }: { size?: number }) => (
      <span data-testid="mail-icon" style={{ width: size, height: size }}>
        mock-mail
      </span>
    ),
    MapPin: ({ size = 20 }: { size?: number }) => (
      <span data-testid="map-pin-icon" style={{ width: size, height: size }}>
        mock-map-pin
      </span>
    ),
  };
});

describe('ContactWindow', () => {
  const mockData = {
    email: 'contact@example.com',
    location: 'New York, NY',
  };

  it('renders the main heading and description correctly', () => {
    render(<ContactWindow data={mockData} />);

    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(
      screen.getByText('Feel free to reach out for collaborations or inquiries')
    ).toBeInTheDocument();
  });

  it('renders contact information correctly', () => {
    render(<ContactWindow data={mockData} />);

    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText(mockData.email)).toBeInTheDocument();
    expect(screen.getByText(mockData.location)).toBeInTheDocument();
  });

  it('renders the email link with correct href attribute', () => {
    render(<ContactWindow data={mockData} />);

    const emailLink = screen.getByRole('link', { name: mockData.email });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', `mailto:${mockData.email}`);
  });

  it('renders the correct icons', () => {
    render(<ContactWindow data={mockData} />);

    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    expect(screen.getByTestId('map-pin-icon')).toBeInTheDocument();
  });
});
