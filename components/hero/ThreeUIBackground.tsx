'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';
import dynamic from 'next/dynamic';

// Dynamically import ThreeUI FlowField from the official @designcodeio/threeui package subpath
const FlowField = dynamic(
  () =>
    import('@designcodeio/threeui/components/FlowField').then((mod) => ({
      default: mod.FlowField,
    })),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#070b14]" />,
  }
);

export function ThreeUIBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-[#070b14] pointer-events-none z-0" aria-hidden="true" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-45 mix-blend-screen transition-opacity duration-1000"
      aria-hidden="true"
    >
      {isInView && (
        <FlowField
          mode="dark"
          speed={0.7}
          density={1.2}
          opacity={0.8}
          className="w-full h-full object-cover pointer-events-none"
        />
      )}
    </div>
  );
}

export default ThreeUIBackground;
