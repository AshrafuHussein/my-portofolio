'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-5 transition-all duration-300 pointer-events-auto">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-xl border border-surface-border/80 shadow-glass py-2.5 px-6'
            : 'bg-surface/30 backdrop-blur-sm border border-emerald-500/10 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Folioblox structure with green accent) */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400 transition-colors shadow-glow">
              <Image
                src="/img/ashrafu hussein.png"
                alt="Ashrafu Hussein"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                Ashrafu Hussein
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Links & CTA (Folioblox Header Right Structure) */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-emerald-300 font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                        : 'text-slate-200/85 hover:text-emerald-200'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Folioblox Pill CTA with Circular Icon Container in Emerald Green */}
            <a
              href="#contact"
              className="inline-flex items-center pl-5 pr-1.5 py-1.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-emerald-50 hover:shadow-glow transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="mr-2">Get in touch</span>
              <span className="w-7 h-7 rounded-full bg-emerald-600 group-hover:bg-emerald-500 text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center pl-3.5 pr-1 py-1 rounded-full bg-white text-slate-950 font-semibold text-xs"
            >
              <span className="mr-1.5">Contact</span>
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white bg-surface/80 border border-surface-border transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-surface-elevated/95 backdrop-blur-2xl rounded-2xl border border-surface-border flex flex-col gap-2 animate-fade-in shadow-glass">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-emerald-300 hover:bg-surface text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
