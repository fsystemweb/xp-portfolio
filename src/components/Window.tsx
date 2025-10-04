import { X, Minus, Square } from 'lucide-react';
import { useDraggable } from '../hooks/useDraggable';
import { useIsDesktop } from '../hooks/useIsDesktop';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClose: () => void;
  onMinimize?: () => void;
  initialPosition?: { x: number; y: number };
  width?: string;
  height?: string;
}

export const Window: React.FC<WindowProps> = ({
  title,
  children,
  icon,
  onClose,
  onMinimize,
  initialPosition = { x: 100, y: 100 },
  width = 'w-[600px]',
  height = 'h-[500px]',
}) => {
  const isDesktop = useIsDesktop(1024);

  // ✅ ALWAYS call useDraggable — even on mobile
  const { position, dragRef, handleMouseDown } = useDraggable(initialPosition);

  // While detecting, avoid rendering (optional)
  if (isDesktop === null) {
    return null;
  }

  if (!isDesktop) {
    // Mobile: full-screen modal (non-draggable)
    return (
      <div className="fixed inset-0 z-50 bg-white border-2 border-[#0831D9] flex flex-col">
        <div className="bg-gradient-to-t from-[#0058E6] to-[#3A8CFF] px-2 py-2 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            {icon && <div className="w-4 h-4">{icon}</div>}
            <span className="text-white text-sm font-bold">{title}</span>
          </div>
          <div className="flex gap-1">
            <button
              onClick={onClose}
              className="w-6 h-5 bg-[#E81123] hover:bg-[#FF2D3F] flex items-center justify-center border border-[#B00000] rounded-sm"
              aria-label="Close"
            >
              <X size={12} className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-[#ECE9D8] p-4">
          {children}
        </div>
      </div>
    );
  }

  // Desktop: draggable window
  return (
    <div
      ref={dragRef}
      className={`absolute ${width} ${height} min-h-[500px] max-w-full max-h-full bg-white border-2 border-[#0831D9] rounded-lg shadow-2xl overflow-hidden flex flex-col`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        className="bg-gradient-to-t from-[#0058E6] to-[#3A8CFF] px-2 py-2 flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          {icon && <div className="w-4 h-4">{icon}</div>}
          <span className="text-white text-sm font-bold">{title}</span>
        </div>
        <div className="flex gap-1">
          {onMinimize && (
            <button
              onClick={onMinimize}
              className="w-6 h-5 bg-[#2B6FDB] hover:bg-[#4A8EFF] flex items-center justify-center border border-[#0831D9] rounded-sm"
              aria-label="Minimize"
            >
              <Minus size={12} className="text-white" />
            </button>
          )}
          <button
            className="w-6 h-5 bg-[#2B6FDB] hover:bg-[#4A8EFF] flex items-center justify-center border border-[#0831D9] rounded-sm"
            aria-label="Maximize"
            disabled
          >
            <Square size={10} className="text-white" />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-5 bg-[#E81123] hover:bg-[#FF2D3F] flex items-center justify-center border border-[#B00000] rounded-sm"
            aria-label="Close"
          >
            <X size={12} className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-[#ECE9D8] p-4 xp-window-content">
        {children}
      </div>
    </div>
  );
};