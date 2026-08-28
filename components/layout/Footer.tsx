'use client';

import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border/60 bg-surface/40 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="text-sm font-semibold text-slate-200">
            Ashrafu Hussein <span className="text-slate-400 font-normal">© 2026</span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            Freelance Software Engineer · Tanzania (GMT+3)
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <a
            href="https://github.com/AshrafuHussein"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/ash_tek255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:ashrafuhussien@gmail.com"
            className="hover:text-slate-200 transition-colors"
          >
            Email
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-surface-elevated hover:bg-surface-border text-slate-300 hover:text-white border border-surface-border transition-colors ml-2"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
