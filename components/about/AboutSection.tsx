'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Crafting resilient mobile experiences with clean architecture.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Card / Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-surface/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-surface-border flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                I&apos;m <span className="text-slate-100 font-semibold">Ashrafu Hussein</span>, a
                freelance software engineer based in Tanzania specializing in production Flutter &amp;
                Dart applications backed by scalable Supabase and cloud infrastructures.
              </p>
              <p>
                My engineering focus centers on structured architectures: separation of concerns via
                <span className="text-brand-300 font-medium font-mono text-sm px-1.5 py-0.5 rounded bg-brand-950/60 border border-brand-500/30 mx-1">
                  BLoC / Cubit
                </span>
                state management, declarative deep-linking with
                <span className="text-brand-300 font-medium font-mono text-sm px-1.5 py-0.5 rounded bg-brand-950/60 border border-brand-500/30 mx-1">
                  GoRouter
                </span>
                , and offline-first data synchronization.
              </p>
              <p>
                Starting <span className="text-slate-100 font-semibold">October 2026</span>, I will be
                joining the <span className="text-blue-300 font-semibold">e-Government Authority (eGA)</span>{' '}
                Research and Innovation Centre as a Software/Mobile Development Intern to help build
                high-impact public sector digital systems.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="mt-8 pt-6 border-t border-surface-border/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Education</div>
                  <div className="text-sm font-semibold text-slate-200">CS Diploma (2026)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Incoming</div>
                  <div className="text-sm font-semibold text-slate-200">eGA Intern (Oct 26)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-slate-200">Dar es Salaam, TZ</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo & Key Metric Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Image card */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-surface-border group">
              <Image
                src="/img/ashrafu-2.png"
                alt="Ashrafu Hussein workspace"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface/80 backdrop-blur-md border border-surface-border/80 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Arusha Technical College</span>
                <span className="text-brand-400 font-semibold">Class of 2026</span>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-surface-elevated/70 rounded-2xl p-5 border border-surface-border">
              <div className="flex items-center gap-2 text-brand-400 text-xs font-mono mb-2">
                <Code2 className="w-4 h-4" />
                <span>Core Philosophy</span>
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                &ldquo;Clean code is not an afterthought; it is the contract between system reliability
                and seamless end-user performance.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
