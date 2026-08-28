'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import SylvaLivingWorldScene from subpath for seamless SSR handling
const SylvaLivingWorldScene = dynamic(
  () =>
    import('@designcodeio/threeui/components/SylvaLivingWorldScene').then((mod) => ({
      default: mod.SylvaLivingWorldScene,
    })),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#080f0b]" />,
  }
);

export function ThreeUIBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-auto select-none" aria-hidden="true">
      {/* Sylva Living World 3D procedural living green canvas with full clarity and visibility */}
      <div className="absolute inset-0 w-full h-full opacity-90 transition-opacity duration-700">
        <SylvaLivingWorldScene
          variant="living-green"
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        />
      </div>

      {/* Subtle soft gradient only at the very bottom edge to softly bridge into the rest of the page */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
    </div>
  );
}

export default ThreeUIBackground;
