import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutWindow } from '../windows/AboutWindow';

// Mock the imported icons
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual('lucide-react');
  return {
    ...(actual as Record<string, any>),
    Github: ({ size = 20 }: { size?: number }) => <span data-testid="github-icon" style={{ width: size, height: size }}>mock-github</span>,
    Linkedin: ({ size = 20 }: { size?: number }) => <span data-testid="linkedin-icon" style={{ width: size, height: size }}>mock-linkedin</span>,
  };
});

describe('AboutWindow', () => {
  const mockData = {
    personal: {
      fullname: 'John Doe',
      title: 'Senior Developer',
      bio: 'A passionate developer with 5 years of experience.',
      avatar: 'john-doe.jpg',
      location: 'San Francisco, CA',
      email: 'john.doe@example.com',
    },
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  };

  it('renders personal information correctly', () => {
    render(<AboutWindow data={mockData} />);

    expect(screen.getByText(mockData.personal.fullname)).toBeInTheDocument();
    expect(screen.getByText(mockData.personal.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.personal.bio)).toBeInTheDocument();
    expect(screen.getByAltText(mockData.personal.fullname)).toBeInTheDocument();
    expect(screen.getByAltText(mockData.personal.fullname)).toHaveAttribute('src', 'images/' + mockData.personal.avatar);
  });

  it('renders contact information correctly', () => {
    render(<AboutWindow data={mockData} />);

    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByText(mockData.personal.location)).toBeInTheDocument();

    expect(screen.getByText('Email:')).toBeInTheDocument();
    const emailLink = screen.getByRole('link', { name: mockData.personal.email });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', `mailto:${mockData.personal.email}`);
  });

  it('renders social links correctly', () => {
    render(<AboutWindow data={mockData} />);

    const githubLink = screen.getByRole('link', { name: /GitHub/ });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockData.social.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', mockData.social.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
  });
});