'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import { gooeyToast } from 'goey-toast';
import { getSylvaHeroHtml } from './sylvaTemplate';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const html = useMemo(() => getSylvaHeroHtml(), []);

  useEffect(() => {
    setMounted(true);

    const handleMessage = (e: MessageEvent) => {
      if (!e.data) return;

      if (e.data.type === 'navigate' && typeof e.data.hash === 'string') {
        const hash = e.data.hash;
        if (hash === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (e.data.type === 'download-cv') {
        gooeyToast.success('Resume download ready', {
          description: 'Opening Ashrafu Hussein’s GitHub and CV repository...',
          action: {
            label: 'Open',
            onClick: () => window.open('https://github.com/AshrafuHussein', '_blank'),
          },
          preset: 'bouncy',
          showProgress: true,
        });
        window.open('https://github.com/AshrafuHussein', '_blank');
      }
    };

    window.addEventListener('message', handleMessage);

    // Pause WebGL rendering inside hero iframe when user scrolls past hero section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              { type: 'set-visibility', visible: entry.isIntersecting },
              '*'
            );
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#080f0b]"
    >
      {mounted ? (
        <iframe
          ref={iframeRef}
          title="Ashrafu Hussein — Sylva Hero"
          srcDoc={html}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
          className="w-full h-full border-0 block"
          style={{ width: '100%', height: '100%', border: 0, background: '#080f0b' }}
        />
      ) : (
        <div className="w-full h-full bg-[#080f0b] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin" />
        </div>
      )}
    </section>
  );
}

export default HeroSection;
