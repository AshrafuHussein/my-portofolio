'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Instagram, Mail, Sparkles } from 'lucide-react';
import { gooeyToast } from 'goey-toast';

// Lazy-load ThreeUI WebGL component (Sylva Living World)
const ThreeUIBackground = dynamic(
  () => import('./ThreeUIBackground').then((mod) => mod.ThreeUIBackground),
  { ssr: false }
);

const HIGHLIGHT_COLUMNS = [
  {
    num: '# 01',
    title: 'Mobile Architecture',
    sub: 'Flutter, Dart & Clean BLoC',
  },
  {
    num: '# 02',
    title: 'Cloud & Database',
    sub: 'Supabase, PostgreSQL & PostGIS',
  },
  {
    num: '# 03',
    title: 'Enterprise Systems',
    sub: 'Incoming eGA Intern · Oct 2026',
  },
  {
    num: '# 04',
    title: 'Fluid UI & Motion',
    sub: '60fps Responsive Experiences',
  },
];

export function HeroSection() {
  const handleDownloadCV = () => {
    gooeyToast.success('Resume download ready!', {
      description: 'Opening Ashrafu Hussein’s CV...',
    });
    window.open('https://github.com/AshrafuHussein', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* ThreeUI Sylva Living World 3D WebGL Background - fully visible without blue overlays */}
      <ThreeUIBackground />

      {/* Main Split Hero Structure (Folioblox-inspired Layout with Living Green Aesthetic) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Big Bold Title (Folioblox Left Structure) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="text-emerald-400 font-semibold text-lg sm:text-xl tracking-tight">
                Hey, I&apos;m
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]"
            >
              Flutter &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-green-400">
                Supabase
              </span>{' '}
              <br />
              Engineer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-medium bg-surface/75 hover:bg-surface-elevated text-slate-200 border border-surface-border transition-colors active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Resume / CV</span>
              </button>
            </motion.div>
          </div>

          {/* Center Column: Portrait Focal Visual with soft emerald backglow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 hidden lg:flex justify-center items-center"
          >
            <div className="relative w-44 h-56 rounded-3xl overflow-hidden border border-emerald-500/25 shadow-2xl group bg-surface/40 backdrop-blur-sm">
              <Image
                src="/img/ashrafu-2.png"
                alt="Ashrafu Hussein"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="176px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 text-center text-[10px] font-mono text-emerald-300">
                Ashrafu Hussein
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement Quote & Description (Folioblox Right Structure) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md flex flex-col gap-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                Great software should feel invisible.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From reactive architecture to fluid mobile interactions, I engineer scalable
                Flutter mobile apps and cloud backends that connect and convert.
              </p>
            </motion.div>

            {/* Social quick links with green hover effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href="https://github.com/AshrafuHussein"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-surface/75 hover:bg-surface-elevated text-slate-300 hover:text-emerald-300 border border-surface-border hover:border-emerald-500/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ash_tek255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-surface/75 hover:bg-surface-elevated text-slate-300 hover:text-emerald-300 border border-surface-border hover:border-emerald-500/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="p-2.5 rounded-full bg-surface/75 hover:bg-surface-elevated text-slate-300 hover:text-emerald-300 border border-surface-border hover:border-emerald-500/40 transition-all duration-200"
                aria-label="Contact Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom 4-Column Numbered Grid (Exact Folioblox Bottom Structure in Emerald Green) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-emerald-500/20"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HIGHLIGHT_COLUMNS.map((item) => (
            <div key={item.num} className="flex flex-col gap-1.5 group">
              <span className="text-emerald-400 font-mono text-xs sm:text-sm font-semibold tracking-wider">
                {item.num}
              </span>
              <h3 className="text-slate-100 font-semibold text-sm sm:text-base tracking-tight group-hover:text-emerald-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs font-mono hidden sm:block">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
