'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Github,
  Instagram,
  Mail,
  Copy,
  Check,
  Globe,
  Clock,
  Sparkles,
  Terminal,
  ArrowUpRight,
  Code2,
} from 'lucide-react';
import { gooeyToast } from 'goey-toast';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // East Africa Time (GMT+3)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Dar_es_Salaam',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ashrafuhussien@gmail.com');
      setCopied(true);
      gooeyToast.success('Email copied', {
        description: 'ashrafuhussien@gmail.com is on your clipboard.',
        preset: 'bouncy',
      });
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Copy email failed: ', err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060a08] border-t border-emerald-500/20 pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Supabase Matrix Grid Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Top Feature Bar: Call to Collaboration */}
        <div className="rounded-3xl bg-[#0b100d] border border-emerald-500/25 p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Technical Roles &amp; Projects</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Let&apos;s engineer something extraordinary together.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Whether you need a full-scale Flutter mobile app, a scalable Supabase cloud backend, or high-performance reactive systems.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:justify-end">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#0e1611] hover:bg-emerald-950/40 border border-emerald-500/25 hover:border-emerald-500/50 text-xs sm:text-sm font-mono text-emerald-300 transition-all active:scale-95 shadow-md group"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-glow active:scale-95"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">
          {/* Col 1: Identity & Realtime Telemetry */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-emerald-500/40 shadow-glow">
                <Image
                  src="/img/ashrafu hussein.png"
                  alt="Ashrafu Hussein"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Ashrafu Hussein</h4>
                <p className="text-xs font-mono text-emerald-400">Flutter &amp; Supabase Engineer</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Specialized in production Flutter client architectures, reactive BLoC state management, PostGIS spatial queries, and secure Supabase cloud infrastructures.
            </p>

            {/* Live Telemetry Box */}
            <div className="p-3.5 rounded-2xl bg-[#0b100d] border border-emerald-500/20 space-y-2 text-xs font-mono max-w-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Location</span>
                </span>
                <span className="text-slate-200">Tanzania · Arusha</span>
              </div>

              <div className="flex items-center justify-between text-slate-300 border-t border-emerald-500/10 pt-2">
                <span className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Local Time</span>
                </span>
                <span className="text-emerald-300 font-semibold">{time || '03:00 PM EAT'}</span>
              </div>

              <div className="flex items-center justify-between text-slate-300 border-t border-emerald-500/10 pt-2">
                <span className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Incoming Intern</span>
                </span>
                <span className="text-emerald-300">eGA (Oct 2026)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Technology Stack */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Tech Stack
            </h5>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              {['Flutter & Dart', 'Supabase Cloud', 'PostgreSQL & RLS', 'PostGIS Geospatial', 'BLoC & Cubit', 'REST & WebSockets'].map(
                (tech) => (
                  <li key={tech} className="flex items-center gap-1.5">
                    <span className="text-emerald-500/60">›</span>
                    <span>{tech}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4: Social & Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Connect
            </h5>
            <div className="space-y-2">
              <a
                href="https://github.com/AshrafuHussein"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0b100d] hover:bg-emerald-950/40 border border-emerald-500/15 hover:border-emerald-500/35 text-xs text-slate-300 hover:text-white transition-all group"
              >
                <span className="flex items-center gap-2 font-mono">
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/ash_tek255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0b100d] hover:bg-emerald-950/40 border border-emerald-500/15 hover:border-emerald-500/35 text-xs text-slate-300 hover:text-white transition-all group"
              >
                <span className="flex items-center gap-2 font-mono">
                  <Instagram className="w-4 h-4 text-emerald-400" />
                  <span>Instagram</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href="mailto:ashrafuhussien@gmail.com"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0b100d] hover:bg-emerald-950/40 border border-emerald-500/15 hover:border-emerald-500/35 text-xs text-slate-300 hover:text-white transition-all group"
              >
                <span className="flex items-center gap-2 font-mono">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Direct Email</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Ghost Watermark (Sylva/Supabase Aesthetic) */}
        <div className="relative pt-6 overflow-hidden select-none pointer-events-none text-center">
          <div className="text-[12vw] sm:text-[10vw] font-black tracking-widest text-emerald-500/[0.035] leading-none whitespace-nowrap">
            ASHRAFU HUSSEIN
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-emerald-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Ashrafu Hussein. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-500/60 hidden sm:inline-block">
              Designed with Supabase &amp; Sylva systems
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e1611] hover:bg-emerald-950/60 text-emerald-300 hover:text-white border border-emerald-500/25 transition-all active:scale-95 shadow-sm"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
