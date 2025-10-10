import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { DesktopIcon } from '../DesktopIcon';

describe('DesktopIcon', () => {
  it('renders the label and calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<DesktopIcon icon={<span>ICON</span>} label="My Label" onClick={handleClick} />);

    expect(screen.getByText('My Label')).toBeInTheDocument();

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
