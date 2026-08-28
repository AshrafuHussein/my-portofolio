'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Code2,
  Database,
  Cpu,
  Smartphone,
  Globe,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Github,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { ProjectCard, ProjectData } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ProjectCodeSnippet } from './ProjectCodeSnippet';

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'sonnoh',
    title: 'SONNOH',
    subtitle: 'Social-Commerce Ecosystem · Flutter & Supabase',
    description:
      'A production cross-platform mobile application combining an interactive video reels feed and creator timeline with an integrated multi-vendor e-commerce store, real-time messaging, instant in-app checkout, and order status broadcasts.',
    highlights: [
      'Interactive video reel feed with dynamic caching & preloading engine',
      'Multi-vendor shop catalog indexing, cart synchronization & order lifecycle',
      'Supabase Realtime notifications & WebSocket chat channels between buyers and merchants',
      'Strict BLoC state management with normalized relational schema in PostgreSQL',
    ],
    tech: ['Flutter', 'Dart', 'Supabase', 'BLoC/Cubit', 'PostgreSQL', 'GoRouter', 'FCM'],
    type: 'Mobile App',
    category: 'mobile',
    image: '/img/sonnoh.png',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Production App',
    featured: true,
    telemetry: [
      { label: 'State Engine', value: 'BLoC / Cubit Architecture' },
      { label: 'Realtime Sync', value: 'Supabase WebSockets' },
      { label: 'Database', value: 'PostgreSQL Relational' },
      { label: 'Target Platforms', value: 'iOS & Android (60fps)' },
    ],
    codeSnippet: {
      language: 'dart',
      filename: 'order_realtime_bloc.dart',
      title: 'Supabase Realtime Channel & State Pipeline',
      code: `// Supabase Realtime Order & Message Broadcast
final channel = supabase.channel('order_lifecycle:\${orderId}')
  .onPostgresChanges(
    event: PostgresChangeEvent.update,
    schema: 'public',
    table: 'orders',
    filter: PostgresChangeFilter(
      type: PostgresChangeFilterType.eq,
      column: 'id',
      value: orderId,
    ),
    callback: (payload) {
      final updatedOrder = OrderModel.fromJson(payload.newRecord);
      context.read<OrderBloc>().add(OrderStateSynced(updatedOrder));
    },
  ).subscribe();`,
    },
  },
  {
    id: 'lets-vent',
    title: "Let's Vent",
    subtitle: 'Proximity Event Discovery & Ticketing · PostGIS',
    description:
      'Swipe-driven social event discovery platform connecting urban attendees with nearby music, tech, and cultural gatherings. Engineered with PostGIS geospatial radius indexing, instant digital ticket reservations, and offline-validated QR entry.',
    highlights: [
      'PostGIS geospatial ST_DWithin proximity indexing for millisecond radius queries',
      'Host analytics console with real-time attendee check-in telemetry',
      'Offline-capable ticket pass storage with cryptographic QR signature verification',
      'Supabase Edge Functions handling secure ticket generation and webhooks',
    ],
    tech: ['Flutter', 'Supabase', 'PostGIS', 'BLoC', 'GoRouter', 'QR Engine', 'Edge Functions'],
    type: 'Mobile App',
    category: 'supabase',
    image: '/img/lets-vent.png',
    demoUrl: 'https://letsvent.online',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Live · letsvent.online',
    featured: true,
    telemetry: [
      { label: 'Geospatial Engine', value: 'PostGIS ST_DWithin' },
      { label: 'Ticket Verification', value: 'HMAC-SHA256 QR' },
      { label: 'Cloud Backend', value: 'Supabase Edge Functions' },
      { label: 'Live URL', value: 'letsvent.online' },
    ],
    codeSnippet: {
      language: 'sql',
      filename: 'nearby_events_rpc.sql',
      title: 'PostGIS Proximity Search Stored Procedure',
      code: `-- Supabase PostGIS Radius Discovery RPC
create or replace function get_nearby_events(
  user_lat double precision,
  user_lng double precision,
  radius_meters integer
)
returns setof events language sql security definer as $$
  select * from events
  where st_dwithin(
    location,
    st_point(user_lng, user_lat)::geography,
    radius_meters
  )
  order by st_distance(location, st_point(user_lng, user_lat)::geography) asc;
$$;`,
    },
  },
  {
    id: 'site-diary',
    title: 'ProjectHub & Site Diary',
    subtitle: 'Enterprise Project & Site Management · Flutter Web',
    description:
      'A production-grade management portal engineered for civil engineering contractors, construction supervisors, and enterprise project tracking. Features standardized project directory indexing, admin consoles, and multi-tier member access.',
    highlights: [
      'Strict Clean Architecture separating domain entities from Supabase data sources',
      'Dynamic multi-step form validation with automated PDF daily summary exports',
      'Role-Based Row-Level Security (RLS) for Site Engineers, Project Managers & Clients',
    ],
    tech: ['Flutter Web', 'Dart', 'Clean Architecture', 'BLoC', 'Supabase RLS', 'PDF Gen'],
    type: 'Flutter Web',
    category: 'web',
    image: '/img/projecthub.png',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Enterprise Web Portal',
    featured: false,
    telemetry: [
      { label: 'Architecture', value: 'Clean Domain-Driven' },
      { label: 'Security Model', value: 'Supabase RLS Multi-Role' },
      { label: 'Document Engine', value: 'Automated Vector PDF' },
      { label: 'Platform', value: 'Flutter Web & Desktop' },
    ],
    codeSnippet: {
      language: 'sql',
      filename: 'site_logs_rls.sql',
      title: 'Multi-Tenant Row-Level Security Policy',
      code: `-- Supabase Row Level Security (RLS) Policy
create policy "Engineers can create and sign daily site logs"
  on site_logs for insert to authenticated
  with check (
    auth.uid() = engineer_id and exists (
      select 1 from project_members
      where project_id = site_logs.project_id
        and role in ('lead_engineer', 'site_supervisor')
    )
  );`,
    },
  },
  {
    id: 'atc-campus-connect',
    title: 'ATC Events & Campus Connect',
    subtitle: 'Arusha Technical College Portal · Mobile & Cloud',
    description:
      'Official campus companion application and administrative portal for Arusha Technical College students and faculty. Centralizes departmental advisories, event management, and secure academic MFA access.',
    highlights: [
      'Targeted push notifications via Firebase Cloud Messaging topic routing',
      'Offline schedule synchronization with local Hive key-value persistence',
      'Admin console for department heads to publish signed advisories',
    ],
    tech: ['Flutter', 'Dart', 'Supabase / Firebase', 'Hive DB', 'BLoC', 'REST API'],
    type: 'Mobile App',
    category: 'mobile',
    image: '/img/atc-events.png',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Campus System',
    featured: false,
    telemetry: [
      { label: 'Notification Pipe', value: 'FCM Topic Channels' },
      { label: 'Local Store', value: 'Hive Encrypted Box' },
      { label: 'State Model', value: 'BLoC Event-Driven' },
    ],
    codeSnippet: {
      language: 'dart',
      filename: 'campus_sync_service.dart',
      title: 'Hive Offline Local Persistence & FCM Topic Subscriptions',
      code: `// Multi-tier Hive Cache & FCM Topic Sync
await FirebaseMessaging.instance.subscribeToTopic('dept_\${user.departmentId}');
final localAdvisories = await hiveBox.values
  .where((item) => item.departmentId == user.departmentId)
  .toList();
emit(CampusSyncSuccess(localAdvisories));`,
    },
  },
  {
    id: 'fursafy',
    title: 'Fursafy',
    subtitle: 'Youth Opportunity & Skill Matching · Capstone',
    description:
      'Final-year capstone engineering mobile platform designed to bridge the youth unemployment gap in Tanzania. Uses geohash spatial indexing to match vocational graduates and freelancers with verified local micro-jobs, delivery logistics gigs, and apprenticeships.',
    highlights: [
      'Proximity-first job matching utilizing geohash spatial bounding boxes',
      'Standardized skill verification & portfolio display for technical trades',
      'In-app application pipeline with real-time status notifications',
    ],
    tech: ['Flutter', 'Dart', 'Supabase', 'Geohash', 'PostgreSQL', 'BLoC'],
    type: 'Mobile App',
    category: 'supabase',
    image: '/img/fursafy.png',
    githubUrl: 'https://github.com/AshrafuHussein',
    statusBadge: 'Capstone Engineering',
    featured: false,
    telemetry: [
      { label: 'Spatial Indexing', value: 'Geohash Bounding Box' },
      { label: 'Database', value: 'Supabase PostgreSQL' },
      { label: 'Application Pipeline', value: 'Realtime Subscriptions' },
    ],
    codeSnippet: {
      language: 'sql',
      filename: 'geohash_indexing.sql',
      title: 'Geohash Proximity Query Indexing',
      code: `-- Spatial Bounding Box Index for Vocational Micro-Gigs
create index idx_gigs_geohash on gigs (geohash_prefix);
select * from gigs
where geohash_prefix like 's0z9%'
  and status = 'open'
order by created_at desc;`,
    },
  },
];

type CategoryFilter = 'all' | 'mobile' | 'web' | 'supabase';

const FILTER_TABS: { id: CategoryFilter; label: string; icon: any }[] = [
  { id: 'all', label: 'All Systems', icon: Layers },
  { id: 'mobile', label: 'Mobile Apps (Flutter)', icon: Smartphone },
  { id: 'web', label: 'Flutter Web', icon: Globe },
  { id: 'supabase', label: 'Supabase & PostGIS', icon: Database },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [spotlightTab, setSpotlightTab] = useState<'preview' | 'code' | 'schema'>('preview');

  // Spotlight project is the first featured project
  const spotlightProject = PROJECTS_DATA[0];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[#080f0b]"
    >
      {/* Supabase Matrix Grid Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full min-w-0 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="w-full min-w-0 flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-emerald-500/15">
          <div className="w-full min-w-0 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] sm:text-xs font-mono text-emerald-400 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-none" />
              <span className="truncate">Production Systems &amp; Architectures</span>
            </div>
            <h2 id="projects-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight break-words">
              Crafted with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-green-400">
                Flutter &amp; Supabase
              </span>
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed break-words">
              Engineered for reactive state performance, spatial PostGIS queries, offline-first sync,
              and rock-solid Row-Level Security in production.
            </p>
          </div>

          <a
            href="https://github.com/AshrafuHussein"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1611] hover:bg-emerald-950/40 text-emerald-300 hover:text-emerald-200 border border-emerald-500/20 text-xs font-mono transition-all self-start md:self-auto active:scale-95 flex-none"
          >
            <span>Browse GitHub Repos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Spotlight Showcase (Supabase Signature Feature Spotlight) */}
        <div className="relative w-full min-w-0 rounded-2xl sm:rounded-3xl bg-[#0b100d] border border-emerald-500/25 overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Col: Case Study Narrative */}
            <div className="lg:col-span-6 w-full min-w-0 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[10.5px] sm:text-[11px] font-mono text-emerald-300">
                  Featured Case Study
                </span>
                <span className="text-slate-500 text-xs font-mono">01 / 05</span>
              </div>

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight break-words">
                  {spotlightProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-1 break-words">
                  {spotlightProject.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-words">
                {spotlightProject.description}
              </p>

              {/* Telemetry Grid: 1 col on mobile (<sm), 2 cols on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full min-w-0 font-mono">
                {spotlightProject.telemetry?.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#0e1611] border border-emerald-500/15 flex items-center sm:flex-col sm:items-start justify-between gap-1 min-w-0 overflow-hidden"
                  >
                    <span className="text-slate-400 text-[10px] uppercase truncate">{t.label}</span>
                    <span className="text-emerald-300 font-semibold text-xs truncate text-right sm:text-left">{t.value}</span>
                  </div>
                ))}
              </div>

              {/* Spotlight Actions: Stack vertically on mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1 w-full">
                <button
                  type="button"
                  onClick={() => setSelectedProject(spotlightProject)}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-glow active:scale-[0.98]"
                >
                  <Code2 className="w-4 h-4 flex-none" />
                  <span className="truncate">Inspect Full Architecture</span>
                </button>

                {spotlightProject.githubUrl && (
                  <a
                    href={spotlightProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1611] hover:bg-emerald-900/30 text-slate-300 hover:text-white border border-emerald-500/20 text-xs font-medium transition-colors active:scale-[0.98]"
                  >
                    <Github className="w-4 h-4 flex-none" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Col: Interactive Visual / Code Switcher */}
            <div className="lg:col-span-6 w-full min-w-0 space-y-3 pt-2 lg:pt-0">
              {/* Tabs Switcher */}
              <div className="flex items-center justify-between p-1 rounded-xl bg-[#0e1611] border border-emerald-500/15 w-full">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setSpotlightTab('preview')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      spotlightTab === 'preview'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    App UI
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpotlightTab('code')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      spotlightTab === 'code'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    BLoC Code
                  </button>
                </div>
                <span className="text-[10px] font-mono text-emerald-400/80 pr-2 hidden sm:inline-block">
                  ● 60 FPS State
                </span>
              </div>

              {/* Tab Content */}
              {spotlightTab === 'preview' ? (
                <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-500/20 bg-[#080d0a] shadow-inner group">
                  <Image
                    src={spotlightProject.image}
                    alt={spotlightProject.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b100d] via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#0e1611]/90 backdrop-blur-md border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono text-emerald-300 truncate">
                      Multi-Vendor Store &amp; Reels
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono text-emerald-300 flex-none">
                      Flutter + Supabase
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full min-w-0 overflow-hidden">
                  <ProjectCodeSnippet
                    code={spotlightProject.codeSnippet!.code}
                    language={spotlightProject.codeSnippet!.language}
                    filename={spotlightProject.codeSnippet!.filename}
                    title={spotlightProject.codeSnippet!.title}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Bar (Responsive Horizontal Swipe for Mobile) */}
        <div className="w-full min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#0b100d] border border-emerald-500/20 w-max">
              {FILTER_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-mono transition-colors whitespace-nowrap ${
                      isActive ? 'text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCategory"
                        className="absolute inset-0 rounded-xl bg-emerald-500/15 border border-emerald-500/35"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5 relative z-10 flex-none" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <span className="text-xs font-mono text-slate-400 pl-1 sm:pl-0 flex-none">
            Showing <strong className="text-emerald-400">{filteredProjects.length}</strong> production systems
          </span>
        </div>

        {/* Bento Grid Projects Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full min-w-0">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelectProject={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep-Dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default ProjectsSection;
