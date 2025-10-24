import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProjectsWindow } from '../windows/ProjectsWindow';

// Mock the imported icons
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual('lucide-react');
  return {
    ...(actual as Record<string, any>),
    ExternalLink: ({ size = 16 }: { size?: number }) => (
      <span data-testid="external-link-icon" style={{ width: size, height: size }}>
        mock-external-link
      </span>
    ),
  };
});

describe('ProjectsWindow', () => {
  const mockProjects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A revolutionary web application.',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      image: 'project-alpha.jpg',
      link: 'https://github.com/user/project-alpha',
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'An innovative mobile app.',
      technologies: ['React Native', 'Node.js'],
      image: 'project-beta.png',
      link: 'https://example.com/project-beta',
    },
  ];

  it('renders the main heading and description correctly', () => {
    render(<ProjectsWindow projects={mockProjects} />);

    expect(screen.getByText('My Projects')).toBeInTheDocument();
    expect(screen.getByText('A showcase of my recent work and achievements')).toBeInTheDocument();
  });

  it('renders project items correctly', () => {
    render(<ProjectsWindow projects={mockProjects} />);

    // Check for first project
    expect(screen.getByText(mockProjects[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockProjects[0].description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProjects[0].title)).toBeInTheDocument();
    expect(screen.getByAltText(mockProjects[0].title)).toHaveAttribute(
      'src',
      'images/' + mockProjects[0].image
    );

    // Check for second project
    expect(screen.getByText(mockProjects[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockProjects[1].description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProjects[1].title)).toBeInTheDocument();
    expect(screen.getByAltText(mockProjects[1].title)).toHaveAttribute(
      'src',
      'images/' + mockProjects[1].image
    );
  });

  it('renders project technologies correctly', () => {
    render(<ProjectsWindow projects={mockProjects} />);

    // Check technologies for first project
    mockProjects[0].technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });

    // Check technologies for second project
    mockProjects[1].technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders project links with correct attributes', () => {
    render(<ProjectsWindow projects={mockProjects} />);

    // Get all links with "View Project" text
    const projectLinks = screen.getAllByRole('link', { name: /View Project/ });

    // Verify that we have the expected number of links
    expect(projectLinks).toHaveLength(mockProjects.length);

    // Check attributes for each link against the corresponding project
    mockProjects.forEach((project, index) => {
      expect(projectLinks[index]).toBeInTheDocument();
      expect(projectLinks[index]).toHaveAttribute('href', project.link);
      expect(projectLinks[index]).toHaveAttribute('target', '_blank');
      expect(projectLinks[index]).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders the external link icon', () => {
    render(<ProjectsWindow projects={mockProjects} />);

    const iconElements = screen.getAllByTestId('external-link-icon');
    // Should have one icon per project link
    expect(iconElements).toHaveLength(mockProjects.length);
  });
});
