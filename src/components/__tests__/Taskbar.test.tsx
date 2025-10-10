import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Taskbar } from '../Taskbar';

describe('Taskbar', () => {
  it('renders open windows and time, toggles start menu and handles clicks', async () => {
    const user = userEvent.setup();

    const onWindowClick = vi.fn();
    const onStartMenuClick = vi.fn();

    const openWindows = [
      { id: 'w1', title: 'My Window', icon: <span>ICON</span> },
    ];

    render(
      <Taskbar
        openWindows={openWindows}
        activeWindow={'w1'}
        onWindowClick={onWindowClick}
        onStartMenuClick={onStartMenuClick}
      />
    );

    // time is shown (HH:MM)
    expect(screen.getByText(/\d{1,2}:\d{2}/)).toBeInTheDocument();

    // open window button renders and can be clicked
    expect(screen.getByText('My Window')).toBeInTheDocument();
    await user.click(screen.getByText('My Window'));
    expect(onWindowClick).toHaveBeenCalledWith('w1');

    // open start menu
    await user.click(screen.getByRole('button', { name: /start/i }));
    expect(screen.getByText('Windows XP')).toBeInTheDocument();

    // click About Me menu item
    await user.click(screen.getByText('About Me'));
    expect(onStartMenuClick).toHaveBeenCalledWith('about');

    // start menu should close after click
    expect(screen.queryByText('Windows XP')).not.toBeInTheDocument();
  });
});
