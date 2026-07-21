import { useState, useEffect } from 'react';

export interface CursorState {
  x: number;
  y: number;
  isHovered: boolean;
  hoverText?: string;
  isClicking: boolean;
}

export function useCustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    isHovered: false,
    hoverText: '',
    isClicking: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));

      // Check for interactive elements with hover state
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('[data-cursor], button, a, input, select');
        if (interactiveEl) {
          const customText = interactiveEl.getAttribute('data-cursor');
          setCursor((prev) => ({
            ...prev,
            isHovered: true,
            hoverText: customText || '',
          }));
        } else {
          setCursor((prev) => ({
            ...prev,
            isHovered: false,
            hoverText: '',
          }));
        }
      }
    };

    const handleMouseDown = () => {
      setCursor((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor((prev) => ({ ...prev, isClicking: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return cursor;
}
