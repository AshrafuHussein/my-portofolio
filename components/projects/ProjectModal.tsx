'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { ProjectData } from './ProjectCard';
import { ProjectCodeSnippet } from './ProjectCodeSnippet';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto overscroll-contain">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0c120e] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-emerald-500/20 bg-[#0e1611]/95 backdrop-blur-sm flex-none">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-none" />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2 truncate">
                  <span className="truncate">{project.title}</span>
                  <span className="text-[10px] sm:text-xs font-mono font-normal text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-none">
                    {project.type}
                  </span>
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono truncate">{project.subtitle}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-xl bg-surface/80 hover:bg-emerald-500/20 text-slate-300 hover:text-white border border-surface-border transition-colors flex-none active:scale-95"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-5 sm:space-y-6 scrollbar-thin scrollbar-thumb-emerald-900/40">
            {/* Top Media & Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
              {/* Media Preview */}
              <div className="lg:col-span-7 relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-emerald-500/20 bg-[#080d0a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c120e] via-transparent to-transparent" />
                {project.statusBadge && (
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 text-[11px] sm:text-xs font-mono text-emerald-300">
                    {project.statusBadge}
                  </span>
                )}
              </div>

              {/* Architecture Telemetry Chips */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Engineering Telemetry</span>
                </h4>

                <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                  {project.telemetry?.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-2.5 rounded-lg bg-[#0e1611] border border-emerald-500/15 flex items-center justify-between text-slate-300 gap-2"
                    >
                      <span className="text-slate-400 text-[11px] sm:text-xs">{t.label}</span>
                      <span className="text-emerald-300 font-semibold text-[11px] sm:text-xs text-right truncate">{t.value}</span>
                    </div>
                  ))}
                </div>

                {/* External Actions */}
                <div className="flex flex-col sm:flex-row items-stretch gap-2 mt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1611] hover:bg-emerald-900/30 text-slate-200 hover:text-emerald-200 border border-emerald-500/25 text-xs font-medium transition-colors active:scale-95"
                    >
                      <Github className="w-4 h-4 text-emerald-400" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-glow active:scale-95"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Overview & Core Problem Solved */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>System Architecture Overview</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Key Technical Deliverables</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#0e1611] border border-emerald-500/15 flex items-start gap-2 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 flex-none" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Code / Architecture Snippet */}
            {project.codeSnippet && (
              <div className="space-y-2 pt-1">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Reactive State &amp; Database Pattern</span>
                </h4>
                <ProjectCodeSnippet
                  code={project.codeSnippet.code}
                  language={project.codeSnippet.language}
                  filename={project.codeSnippet.filename}
                  title={project.codeSnippet.title}
                />
              </div>
            )}

            {/* Tech Stack Breakdown */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Technologies &amp; Protocols</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-[#0e1611] border border-emerald-500/20 text-xs font-mono text-emerald-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
