import React, { useState, useEffect } from 'react';

interface TaskbarDataProps {
  fullname: string;
}

interface TaskbarProps {
  data: TaskbarDataProps;
  openWindows: Array<{ id: string; title: string; icon: React.ReactNode }>;
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
  onStartMenuClick: (app: string) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  data,
  openWindows,
  activeWindow,
  onWindowClick,
  onStartMenuClick,
}) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const menuItems = [
    {
      id: 'about',
      label: 'About Me',
      icon: <img src="/images/mypc.ico" alt="About Me" className="w-8 h-8" />,
    },
    {
      id: 'experience',
      label: 'Experience & Education',
      icon: <img src="/images/world.ico" alt="Experience & Education" className="w-8 h-8" />,
    },
    {
      id: 'projects',
      label: 'My Projects',
      icon: <img src="/images/folder.ico" alt="My Projects" className="w-8 h-8" />,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <img src="/images/phone.ico" alt="Contact" className="w-8 h-8" />,
    },
  ];

  const handleMenuItemClick = (id: string) => {
    onStartMenuClick(id);
    setShowStartMenu(false);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-[#2D5CCC] to-[#1F3F8A] border-t-2 border-[#3A6FDB] flex items-center px-1 z-50 shadow-lg">
        <button
          onClick={() => setShowStartMenu(!showStartMenu)}
          className="h-8 px-3 bg-gradient-to-b from-[#3CAF3C] to-[#2D8B2D] hover:from-[#4DBF4D] hover:to-[#3E9C3E] rounded border border-[#1F6F1F] flex items-center gap-2 mr-2 shadow-md"
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z'/%3E%3C/svg%3E"
            alt="Start"
            className="w-5 h-5"
          />
          <span className="text-white font-bold text-sm">start</span>
        </button>

        <div className="flex-1 flex gap-1 overflow-x-auto">
          {openWindows.map((window) => (
            <button
              key={window.id}
              onClick={() => onWindowClick(window.id)}
              className={`h-8 px-3 rounded flex items-center gap-2 text-sm border transition-colors ${
                activeWindow === window.id
                  ? 'bg-[#3A6FDB] border-[#5A8FFF] text-white'
                  : 'bg-[#2D5CCC] border-[#4A7FEB] text-white hover:bg-[#3A6FDB]'
              }`}
            >
              <div className="w-4 h-4">{window.icon}</div>
              <span className="truncate max-w-[150px]">{window.title}</span>
            </button>
          ))}
        </div>

        <div className="h-8 px-3 bg-[#12B0E8] hover:bg-[#1AC8FF] border border-[#0A98C8] rounded flex items-center justify-center ml-2">
          <span className="text-white text-xs font-semibold">{formatTime(currentTime)}</span>
        </div>
      </div>

      {showStartMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowStartMenu(false)} />
          <div className="fixed bottom-10 left-0 w-80 bg-gradient-to-b from-[#4A7FEB] to-[#2D5CCC] border-2 border-[#3A6FDB] rounded-tr-lg shadow-2xl z-50">
            <div className="flex flex-col">
              <div className="bg-gradient-to-t from-[#3A6FDB] to-[#1F3F8A] py-6 px-4">
                <span className="text-white font-bold text-sm">{data.fullname}</span>
              </div>

              <div className="bg-white">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#759AE5] hover:text-white transition-colors text-left border-b border-gray-200"
                  >
                    <div className="text-[#4A7FEB] hover:text-white">{item.icon}</div>
                    <span className="font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
