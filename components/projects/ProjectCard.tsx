'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Smartphone, Globe, Layers } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  type: 'Mobile App' | 'Flutter Web' | 'Full Stack';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  statusBadge?: string;
  featured?: boolean;
}

export function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const isLarge = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative bg-surface/60 backdrop-blur-md rounded-2xl border border-surface-border hover:border-brand-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Top Banner / Image Preview */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-surface-elevated/80 border-b border-surface-border/60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface/90 backdrop-blur-md border border-surface-border text-[11px] font-mono text-slate-200">
            {project.type === 'Mobile App' && <Smartphone className="w-3 h-3 text-brand-400" />}
            {project.type === 'Flutter Web' && <Globe className="w-3 h-3 text-cyan-400" />}
            {project.type === 'Full Stack' && <Layers className="w-3 h-3 text-purple-400" />}
            <span>{project.type}</span>
          </span>

          {project.statusBadge && (
            <span className="px-2.5 py-1 rounded-lg bg-brand-950/90 backdrop-blur-md border border-brand-500/30 text-[11px] font-mono text-brand-300">
              {project.statusBadge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{project.subtitle}</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-surface-elevated hover:bg-brand-600/20 text-slate-300 hover:text-white border border-surface-border transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-brand-600/20 hover:bg-brand-600 text-brand-300 hover:text-white border border-brand-500/30 transition-all duration-200"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mt-3">{project.description}</p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-surface-border/50 pt-3">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-4 border-t border-surface-border/50 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-surface-elevated text-[11px] font-mono text-slate-300 border border-surface-border/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
