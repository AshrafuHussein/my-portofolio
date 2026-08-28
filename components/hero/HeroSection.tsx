'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Instagram, Mail, Sparkles } from 'lucide-react';
import { gooeyToast } from 'goey-toast';

// Lazy-load ThreeUI WebGL component to avoid blocking initial paint and maintain 100 Lighthouse performance
const ThreeUIBackground = dynamic(
  () => import('./ThreeUIBackground').then((mod) => mod.ThreeUIBackground),
  { ssr: false }
);

export function HeroSection() {
  const handleDownloadCV = () => {
    gooeyToast.success('Resume download ready!', {
      description: 'Opening Ashrafu Hussein’s CV...',
    });
    // Link or sample CV action
    window.open('https://github.com/AshrafuHussein', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ThreeUI Ambient WebGL Canvas */}
      <ThreeUIBackground />

      {/* Subtle Radial Glow in Background */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow / Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 border border-brand-500/30 text-xs font-mono text-brand-300 shadow-glow mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          <span>Flutter & Supabase Engineer · Arusha / Dar es Salaam</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 max-w-4xl leading-[1.08]"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300">
            Ashrafu Hussein
          </span>
        </motion.h1>

        {/* Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          Freelance Software Engineer building robust mobile systems in Flutter &amp; Supabase —
          incoming Mobile Development Intern at eGA (Oct 2026).
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-glow transition-all duration-200 active:scale-[0.98]"
          >
            <span>Explore Featured Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-surface-elevated/80 hover:bg-surface-elevated text-slate-200 border border-surface-border hover:border-brand-500/40 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Resume / CV</span>
          </button>
        </motion.div>

        {/* Social Proof & Quick Tech Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 pt-8 border-t border-surface-border/50 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-400" />
            <span>Flutter &amp; Dart Specialist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Supabase / PostGIS Architect</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>BLoC &amp; Clean Architecture</span>
          </div>

          <div className="flex items-center gap-3 pl-2 sm:border-l sm:border-surface-border">
            <a
              href="https://github.com/AshrafuHussein"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-elevated transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/ash_tek255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-elevated transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-elevated transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
