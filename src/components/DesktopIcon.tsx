import React from 'react';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 flex flex-col items-center gap-1 p-2 rounded hover:bg-blue-600/30 group transition-colors"
    >
      <div className="w-12 h-12 flex items-center justify-center text-white drop-shadow-lg">
        {icon}
      </div>
      <span className="text-white text-xs font-semibold text-center drop-shadow-md break-words leading-tight">
        {label}
      </span>
    </button>
  );
};
