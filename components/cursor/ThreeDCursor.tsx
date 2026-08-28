'use client';

import { useState, useEffect } from 'react';
import { useMouse } from '@/hooks/use-mouse';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

export const ThreeDCursor = () => {
  const [mouseState, ref] = useMouse();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Detect touch-only / coarse pointer devices
    const checkTouch = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const isHoverNone = window.matchMedia('(hover: none)').matches;
      setIsTouchDevice(isCoarse || isHoverNone || 'ontouchstart' in window);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    if (mouseState.x !== null && mouseState.y !== null && !prefersReducedMotion) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateX = ((mouseState.y - centerY) / centerY) * 30;
      const rotateY = ((mouseState.x - centerX) / centerX) * 30;

      setRotation({ x: rotateX, y: rotateY });
    }
  }, [mouseState.x, mouseState.y, prefersReducedMotion]);

  useEffect(() => {
    // Listen for hover on interactive elements across the document
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[data-cursor-hover]'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (isTouchDevice || mouseState.x === null || mouseState.y === null) {
    return null;
  }

  const transformStyle = prefersReducedMotion
    ? 'translate(-50%, -50%)'
    : `translate(-50%, -50%) perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${
        isHovering ? 1.4 : 1
      })`;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block"
      ref={ref}
      aria-hidden="true"
    >
      <div
        className="fixed pointer-events-none transition-transform duration-75 will-change-transform"
        style={{
          left: mouseState.x,
          top: mouseState.y,
          transform: transformStyle,
        }}
      >
        {/* 3D Cursor Structure (Re-themed to Ash's Signature Blue) */}
        <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-200">
          {/* Front face */}
          <div
            className="absolute inset-0 bg-blue-500/90 rounded-md mix-blend-screen backdrop-blur-sm"
            style={{
              transform: 'translateZ(5px)',
              boxShadow: '0 0 24px rgba(59, 130, 246, 0.65), inset 0 0 8px rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* Back face */}
          <div
            className="absolute inset-0 bg-blue-700/80 rounded-md mix-blend-screen"
            style={{
              transform: 'translateZ(-5px)',
            }}
          />

          {/* Side faces */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-blue-600/80 mix-blend-screen"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(5px)`,
                width: '10px',
                left: index % 2 === 0 ? 0 : 'auto',
                right: index % 2 === 1 ? 0 : 'auto',
              }}
            />
          ))}

          {/* Dynamic Inner Light Center */}
          <div
            className="absolute inset-2 bg-cyan-300/80 rounded-sm mix-blend-overlay blur-[1px]"
            style={{
              transform: 'translateZ(6px)',
            }}
          />

          {/* Floor Shadow */}
          <div
            className="absolute rounded-full bg-blue-950/60 blur-md pointer-events-none"
            style={{
              width: '36px',
              height: '8px',
              top: '115%',
              left: '50%',
              transform: 'translate(-50%, -4px) rotateX(90deg)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeDCursor;
