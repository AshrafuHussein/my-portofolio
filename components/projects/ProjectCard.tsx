'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Layers,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

export interface ProjectTelemetry {
  label: string;
  value: string;
}

export interface ProjectCodeSnippetData {
  code: string;
  language: 'dart' | 'sql' | 'typescript' | 'json';
  filename?: string;
  title?: string;
}

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
  category?: 'mobile' | 'web' | 'supabase';
  telemetry?: ProjectTelemetry[];
  codeSnippet?: ProjectCodeSnippetData;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onSelectProject?: (project: ProjectData) => void;
}

export function ProjectCard({ project, index, onSelectProject }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-2xl bg-[#0b100d] border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
    >
      {/* Corner crosshairs (Supabase signature style) */}
      <span className="absolute top-2 left-2 text-emerald-500/20 text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute top-2 right-2 text-emerald-500/20 text-xs font-mono select-none pointer-events-none">+</span>

      <div>
        {/* Top Image Preview Banner */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#080d0a] border-b border-emerald-500/15">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b100d] via-[#0b100d]/30 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0e1611]/90 backdrop-blur-md border border-emerald-500/25 text-[11px] font-mono text-emerald-300">
              {project.type === 'Mobile App' && <Smartphone className="w-3 h-3 text-emerald-400" />}
              {project.type === 'Flutter Web' && <Globe className="w-3 h-3 text-cyan-400" />}
              {project.type === 'Full Stack' && <Layers className="w-3 h-3 text-emerald-400" />}
              <span>{project.type}</span>
            </span>

            {project.statusBadge && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-md border border-emerald-500/30 text-[10.5px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{project.statusBadge}</span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-emerald-400/80 mt-0.5">{project.subtitle}</p>
              </div>

              {/* Action Link Icons */}
              <div className="flex items-center gap-1.5 flex-none">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0e1611] hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                    aria-label={`${project.title} GitHub repo`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/30 transition-all duration-150"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-2.5 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-2 border-t border-emerald-500/10 text-xs text-slate-400 font-sans">
              {project.highlights.slice(0, 2).map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-none" />
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer & Deep Dive Trigger */}
      <div className="p-5 sm:p-6 pt-0 space-y-3">
        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-[#0e1611] text-[10px] font-mono text-slate-300 border border-emerald-500/15"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-1.5 py-0.5 rounded bg-[#0e1611] text-[10px] font-mono text-emerald-400 border border-emerald-500/15">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Deep Dive Button */}
        {onSelectProject && (
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#0e1611] hover:bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/40 text-xs font-mono text-emerald-300 transition-all duration-150 group/btn"
          >
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inspect Architecture &amp; RLS</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
