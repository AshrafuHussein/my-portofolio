'use client';

import { ProjectCard, ProjectData } from './ProjectCard';
import { Briefcase, Sparkles } from 'lucide-react';

const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'sonnoh',
    title: 'SONNOH',
    subtitle: 'Social-Commerce Ecosystem',
    description:
      'A cross-platform mobile application seamlessly combining interactive social content (reels, photos, stories, Timeline feed) with modern e-commerce storefronts, in-app cart, instant checkout, and real-time order tracking.',
    highlights: [
      'Interactive social feed with video caching & timeline algorithms',
      'Merchant shop management, live catalog indexing & order lifecycle',
      'Supabase Realtime notifications & chat system between buyers and sellers',
    ],
    tech: ['Flutter', 'Dart', 'Supabase', 'BLoC/Cubit', 'PostgreSQL', 'GoRouter'],
    type: 'Mobile App',
    image: '/img/wakazi app.jpg',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Featured Mobile App',
    featured: true,
  },
  {
    id: 'lets-vent',
    title: "Let's Vent",
    subtitle: 'Proximity Event Discovery & Ticketing',
    description:
      'Swipe-driven social event discovery platform connecting urban attendees with nearby music, tech, and cultural gatherings. Features geofenced feeds, instant RSVP, and live QR code check-in validation for event hosts.',
    highlights: [
      'PostGIS geospatial proximity queries for radius-based discovery',
      'Host analytics dashboard with real-time attendee scan metrics',
      'Offline-capable ticket storage with cryptographic QR validation',
    ],
    tech: ['Flutter', 'Supabase', 'PostGIS', 'BLoC', 'GoRouter', 'QR Engine'],
    type: 'Mobile App',
    image: '/img/first aid now.jpg',
    demoUrl: 'https://letsvent.online',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Live · letsvent.online',
    featured: true,
  },
  {
    id: 'site-diary',
    title: 'Site Diary',
    subtitle: 'Enterprise Construction & Field Tracking',
    description:
      'A production-grade Flutter Web management portal engineered for civil engineering contractors and construction supervisors. Replaces paper logs with standardized daily progress logs, machinery logs, weather records, and multi-tier signoffs.',
    highlights: [
      'Strict Clean Architecture separating domain entities from data sources',
      'Dynamic multi-step form validation with automated PDF daily reports',
      'Role-based access control for Site Engineers, Project Managers & Clients',
    ],
    tech: ['Flutter Web', 'Dart', 'Clean Architecture', 'BLoC', 'Supabase', 'PDF Gen'],
    type: 'Flutter Web',
    image: '/img/home treatment app.jpg',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Enterprise Web',
    featured: false,
  },
  {
    id: 'atc-campus-connect',
    title: 'ATC Campus Connect',
    subtitle: 'Arusha Technical College Portal',
    description:
      'Official campus companion application for Arusha Technical College students and faculty. Centralizes departmental announcements, timetable updates, examination alerts, and student service requests with a role-aware moderation panel.',
    highlights: [
      'Targeted push notifications via Firebase Cloud Messaging based on department',
      'Offline schedule synchronization with local Hive persistence',
      'Admin console for department heads to publish official advisories',
    ],
    tech: ['Flutter', 'Dart', 'Firebase / Supabase', 'Hive', 'BLoC', 'REST API'],
    type: 'Mobile App',
    image: '/img/campus jobs.jpg',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Campus System',
    featured: false,
  },
  {
    id: 'fursafy',
    title: 'Fursafy',
    subtitle: 'Youth Opportunity & Skill Matching',
    description:
      'Final-year capstone project designed to bridge the youth unemployment gap in Tanzania. Uses geohash spatial indexing to match vocational graduates and freelancers with verified local micro-jobs, apprenticeships, and enterprise gigs.',
    highlights: [
      'Proximity-first job matching utilizing geohash spatial bounding boxes',
      'Standardized skill verification & portfolio display for technical trades',
      'In-app application pipeline with real-time status notifications',
    ],
    tech: ['Flutter', 'Dart', 'Supabase', 'Geohash', 'PostgreSQL', 'BLoC'],
    type: 'Mobile App',
    image: '/img/shebele portofolio.jpg',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Capstone Project',
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                Production Mobile &amp; Web Systems
              </h2>
              <p className="text-slate-400 text-base max-w-xl mt-1">
                Real-world applications engineered for reliability, spatial computation, and smooth
                60fps Flutter UI performance.
              </p>
            </div>
            <a
              href="https://github.com/AshrafuHussein"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:text-brand-300 font-semibold transition-colors"
            >
              <span>View all repositories</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
