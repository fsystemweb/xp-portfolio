import { useState } from 'react';
import { Window } from './components/Window';
import { Taskbar } from './components/Taskbar';
import { DesktopIcon } from './components/DesktopIcon';
import { AboutWindow } from './components/windows/AboutWindow';
import { ProjectsWindow } from './components/windows/ProjectsWindow';
import { SkillsWindow } from './components/windows/SkillsWindow';
import { ContactWindow } from './components/windows/ContactWindow';
import portfolioData from './data/portfolio.json';

interface OpenWindow {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  position?: { x: number; y: number };
}

function App() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openWindow = (id: string) => {
    if (openWindows.find((w) => w.id === id)) {
      setActiveWindow(id);
      return;
    }

    const windowConfigs: Record<string, Omit<OpenWindow, 'id'>> = {
      about: {
        title: 'About Me',
        icon: <img
          src="/images/mypc.ico"
          alt="About Me"
          className="w-4 h-4"
        />,
        component: <AboutWindow data={portfolioData} />,
        position: { x: 100, y: 80 },
      },
      projects: {
        title: 'My Projects',
        icon: <img
          src="/images/folder.ico"
          alt="My Projects"
          className="w-4 h-4"
        />,
        component: <ProjectsWindow projects={portfolioData.projects} />,
        position: { x: 150, y: 100 },
      },
      skills: {
        title: 'Experience',
        icon: <img
          src="/images/world.ico"
          alt="Experience"
          className="w-4 h-4"
        />,
        component: (
          <SkillsWindow
            skills={portfolioData.skills}
            experience={portfolioData.experience}
            education={portfolioData.education}
          />
        ),
        position: { x: 200, y: 120 },
      },
      contact: {
        title: 'Contact',
        icon: <img
          src="/images/phone.ico"
          alt="Contact"
          className="w-4 h-4"
        />,
        component: <ContactWindow data={portfolioData.personal} />,
        position: { x: 250, y: 140 },
      },
    };

    const config = windowConfigs[id];
    if (config) {
      setOpenWindows([...openWindows, { id, ...config }]);
      setActiveWindow(id);
    }
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter((w) => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2].id : null);
    }
  };

  const handleWindowClick = (id: string) => {
    setActiveWindow(id);
  };

  return (
    <div className="min-h-screen xp-desktop relative overflow-hidden">
      <div className="absolute inset-0 pb-10">
        <img
          src="images/wallpaper.jpg"
          alt="Desktop Background"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(1.1) contrast(1.1) saturate(1.3)',
          }}
        />
      </div>

      <div className="relative z-10 p-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        <DesktopIcon
          icon={
            <img
              src="/images/mypc.ico"
              alt="About Me"
              className="w-13 h-13"
            />
          }
          label="About Me"
          onClick={() => openWindow('about')}
        />
        <DesktopIcon
          icon={
            <img
              src="/images/folder.ico"
              alt="My Projects"
              className="w-13 h-13"
            />
          }
          label="My Projects"
          onClick={() => openWindow('projects')}
        />
        <DesktopIcon
          icon={
            <img
              src="/images/world.ico"
              alt="Skills"
              className="w-13 h-13"
            />
          }
          label="Skills"
          onClick={() => openWindow('skills')}
        />
        <DesktopIcon
          icon={
            <img
              src="/images/phone.ico"
              alt="Contact"
              className="w-13 h-13"
            />
          }
          label="Contact"
          onClick={() => openWindow('contact')}
        />
      </div>

      <div className="relative z-20">
        {openWindows.map((window) => (
          <div
            key={window.id}
            onClick={() => handleWindowClick(window.id)}
            style={{ zIndex: activeWindow === window.id ? 30 : 20 }}
          >
            <Window
              title={window.title}
              icon={window.icon}
              onClose={() => closeWindow(window.id)}
              initialPosition={window.position}
              width="w-full md:w-[700px] lg:w-[800px]"
              height="h-[calc(100vh-150px)] md:h-[600px]"
            >
              {window.component}
            </Window>
          </div>
        ))}
      </div>

      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={handleWindowClick}
        onStartMenuClick={openWindow}
      />
    </div>
  );
}

export default App;