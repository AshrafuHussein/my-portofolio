'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Github,
  Layers,
  MapPin,
  MessageSquare,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { gooeyToast } from 'goey-toast';
import { getSylvaHeroHtml } from './sylvaTemplate';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const html = useMemo(() => getSylvaHeroHtml(), []);

  useEffect(() => {
    setMounted(true);
    
    // Check if viewport is desktop (>= 768px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });

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
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('message', handleMessage);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    gooeyToast.success('Opening GitHub Portfolio & CV', {
      description: 'Redirecting to Ashrafu Hussein’s profile...',
      preset: 'bouncy',
    });
    window.open('https://github.com/AshrafuHussein', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Hero Introduction"
      className="relative w-full overflow-hidden bg-[#080f0b]"
    >
      {/* Semantic H1 for Search Engine & AI Agent indexing */}
      <h1 className="sr-only">
        Ashrafu Hussein — Flutter &amp; Supabase Software Engineer Portfolio
      </h1>

      {/* ========================================================================= */}
      {/* 1. MOBILE HERO (Rendered on < 768px / Mobile screens with zero WebGL lag) */}
      {/* ========================================================================= */}
      <div className="md:hidden relative min-h-screen flex flex-col justify-between pt-10 pb-16 px-4 sm:px-6 bg-[#080f0b]">
        {/* Ambient Emerald Glow Layers */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-10 right-4 w-60 h-60 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 space-y-6 pt-4">
          {/* Top Row: Profile Avatar & Availability Badge */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-glow flex-none">
                <Image
                  src="/img/ashrafu hussein.png"
                  alt="Ashrafu Hussein"
                  fill
                  priority
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-bold text-slate-100 text-sm tracking-tight block">
                  Ashrafu Hussein
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  <span>Tanzania (GMT+3)</span>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Status Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1611] border border-emerald-500/25 text-xs font-mono text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-none" />
            <span className="truncate">Incoming Mobile Dev Intern @ eGA (Oct &apos;26)</span>
          </div>

          {/* Hero Main Copy */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building robust mobile systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-green-400">
                Flutter &amp; Supabase
              </span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Software engineer crafting production cross-platform apps with reactive BLoC state,
              spatial PostGIS discovery, offline sync, and clean domain architectures.
            </p>
          </div>

          {/* Mobile Action Buttons (Thumb-friendly touch targets min 44px) */}
          <div className="flex flex-col gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => handleScrollTo('projects')}
              className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-bold text-sm shadow-glow transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>Explore Projects (5 Production Apps)</span>
              <ArrowDown className="w-4 h-4 ml-1 animate-bounce" />
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0e1611] hover:bg-emerald-950/40 active:scale-[0.98] text-slate-200 border border-emerald-500/20 text-xs font-semibold transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get in touch</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0e1611] hover:bg-emerald-950/40 active:scale-[0.98] text-emerald-300 border border-emerald-500/20 text-xs font-semibold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub / CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Capability Matrix Cards (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="p-3 rounded-xl bg-[#0b100d] border border-emerald-500/15 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <Smartphone className="w-3.5 h-3.5" />
                <span className="font-semibold">Flutter / Dart</span>
              </div>
              <span className="text-[11px] text-slate-400">BLoC / Cubit Architecture</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0b100d] border border-emerald-500/15 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <Database className="w-3.5 h-3.5" />
                <span className="font-semibold">Supabase Cloud</span>
              </div>
              <span className="text-[11px] text-slate-400">PostGIS, RLS &amp; Realtime</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0b100d] border border-emerald-500/15 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span className="font-semibold">Clean Arch</span>
              </div>
              <span className="text-[11px] text-slate-400">Offline-First &amp; Hive</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0b100d] border border-emerald-500/15 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <Zap className="w-3.5 h-3.5" />
                <span className="font-semibold">eGA Intern</span>
              </div>
              <span className="text-[11px] text-slate-400">Oct 2026 Innovation</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400/70">
          <span>Scroll down for case studies</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP HERO (3D Sylva Interactive WebGL Canvas for screen >= md)      */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full h-screen min-h-[700px]">
        {mounted && isDesktop ? (
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
      </div>
    </section>
  );
}

export default HeroSection;
