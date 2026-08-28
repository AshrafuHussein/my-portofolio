'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Database,
  Globe,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: { name: string; tag: string; highlighted?: boolean }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Mobile Architecture (Primary)',
    icon: Smartphone,
    description: 'Production-ready cross-platform mobile systems built for speed and reliability.',
    skills: [
      { name: 'Flutter', tag: 'Core Engine', highlighted: true },
      { name: 'Dart', tag: 'Language', highlighted: true },
      { name: 'BLoC / Cubit', tag: 'State Pattern', highlighted: true },
      { name: 'GoRouter', tag: 'Deep-Linking' },
      { name: 'Clean Architecture', tag: 'Domain/Data/UI' },
      { name: 'Offline Sync & Hive', tag: 'Local Cache' },
      { name: 'Custom Painters', tag: 'Animations' },
    ],
  },
  {
    title: 'Backend, Database & Spatial',
    icon: Database,
    description: 'Scalable data layers, real-time messaging, and geospatial queries.',
    skills: [
      { name: 'Supabase', tag: 'BaaS & Auth', highlighted: true },
      { name: 'PostgreSQL', tag: 'Relational DB', highlighted: true },
      { name: 'PostGIS', tag: 'Geospatial / Proximity', highlighted: true },
      { name: 'Firebase', tag: 'FCM / Firestore' },
      { name: 'Edge Functions', tag: 'Deno / TS' },
      { name: 'MySQL', tag: 'Relational DB' },
      { name: 'REST & GraphQL', tag: 'APIs' },
    ],
  },
  {
    title: 'Modern Web Engineering',
    icon: Globe,
    description: 'High-performance web companions, client dashboards, and interactive landing pages.',
    skills: [
      { name: 'Next.js (App Router)', tag: 'React Framework', highlighted: true },
      { name: 'React', tag: 'UI Library' },
      { name: 'TypeScript', tag: 'Type-Safety' },
      { name: 'Tailwind CSS', tag: 'Design System' },
      { name: 'Framer Motion', tag: 'Motion Engineering' },
      { name: 'Three.js / WebGL', tag: '3D Graphics' },
    ],
  },
  {
    title: 'DevOps, Tooling & Design',
    icon: Terminal,
    description: 'Standardized workflows for design handoffs, testing, and deployment.',
    skills: [
      { name: 'Git & GitHub', tag: 'VCS', highlighted: true },
      { name: 'Figma', tag: 'UI/UX Prototypes' },
      { name: 'Android Studio / VS Code', tag: 'IDEs' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Vercel / Firebase Hosting', tag: 'CI/CD Deploy' },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Specialized in Flutter, Supabase &amp; Modern Web
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A comprehensive overview of the frameworks, patterns, and cloud services I leverage to
            ship production software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-surface/60 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-surface-border hover:border-surface-borderHover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">{category.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                        skill.highlighted
                          ? 'bg-brand-950/70 border border-brand-500/40 text-brand-200 shadow-sm'
                          : 'bg-surface-elevated/80 border border-surface-border text-slate-300 hover:text-slate-100 hover:border-slate-600'
                      }`}
                    >
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-[10px] text-slate-400 font-sans opacity-70">
                        · {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
