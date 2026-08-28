'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Sparkles, Building2, MapPin } from 'lucide-react';

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'internship' | 'education' | 'freelance';
  description: string;
  points: string[];
  current?: boolean;
}

const TIMELINE_EVENTS: TimelineItem[] = [
  {
    period: 'Starting October 2026',
    title: 'Software / Mobile Development Intern',
    organization: 'e-Government Authority (eGA) — Research & Innovation Centre',
    location: 'Dar es Salaam, Tanzania',
    type: 'internship',
    current: true,
    description:
      'Selected for an engineering internship at Tanzania’s central government technological authority, contributing to citizen-centric digital platforms.',
    points: [
      'Architecting cross-platform Flutter client modules with high security standards',
      'Integrating public API standards, authentication gateways, and offline synchronization',
      'Collaborating on government digital transformation initiatives within the Research & Innovation team',
    ],
  },
  {
    period: '2023 – 2026',
    title: 'Ordinary Diploma in Computer Science',
    organization: 'Arusha Technical College (ATC)',
    location: 'Arusha, Tanzania',
    type: 'education',
    description:
      'Completed comprehensive technical coursework in Object-Oriented Programming, Data Structures, Relational Database Design, Computer Networks, and Mobile Engineering.',
    points: [
      'Capstone: Developed "Fursafy" youth opportunity matching platform with spatial geohash queries',
      'Engineered "ATC Campus Connect" mobile companion for departmental notices and schedules',
      'Graduating in 2026 with proven expertise in Flutter/Dart and cloud architectures',
    ],
  },
  {
    period: '2022 – Present',
    title: 'Independent Freelance Software Engineer',
    organization: 'Self-Employed / Client Solutions',
    location: 'Remote / Tanzania',
    type: 'freelance',
    description:
      'Delivering end-to-end mobile and web solutions for startups, enterprise contractors, and local businesses.',
    points: [
      'Engineered production applications including SONNOH (social-commerce) and Let’s Vent (proximity events)',
      'Built enterprise web systems with Flutter Web and Clean Architecture (Site Diary)',
      'Provided full deployment lifecycle: UI design, state modeling, Supabase setup, and Play Store releases',
    ],
  },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Journey &amp; Milestones</span>
          </div>
          <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Academic &amp; Professional Progression
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            From technical foundations at Arusha Technical College to engineering impactful systems
            at eGA.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-surface-border pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {TIMELINE_EVENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  item.current
                    ? 'bg-brand-500 border-brand-300 shadow-glow scale-110'
                    : 'bg-surface-elevated border-surface-border group-hover:border-brand-500'
                }`}
              />

              {/* Card */}
              <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-surface-border hover:border-surface-borderHover transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  {item.current && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                      Incoming Milestone
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 font-medium mt-1 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    {item.organization}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>

                <ul className="space-y-2 border-t border-surface-border/60 pt-4">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-400 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
