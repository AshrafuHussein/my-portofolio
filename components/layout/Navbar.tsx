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
    // 1. Passive scroll listener for navbar elevation/fade
    let ticking = false;
    let isScrolledState = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = window.scrollY > 20;
          if (shouldScroll !== isScrolledState) {
            isScrolledState = shouldScroll;
            setScrolled(shouldScroll);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. High-performance IntersectionObserver for active section tracking (zero layout thrashing)
    const sectionIds = ['home', 'about', 'projects', 'skills', 'timeline', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 lg:px-12 pt-3 sm:pt-5 transition-all duration-300 ${
        scrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="max-w-7xl mx-auto rounded-full transition-all duration-300 bg-surface/90 backdrop-blur-xl border border-surface-border/80 shadow-glass py-2 px-3.5 sm:py-2.5 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400 transition-colors shadow-glow flex-none">
              <Image
                src="/img/ashrafu hussein.png"
                alt="Ashrafu Hussein"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base lg:text-lg text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                Ashrafu Hussein
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Links & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-150 ${
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

            {/* Pill CTA */}
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
              className="inline-flex items-center min-h-[34px] pl-3 pr-1 py-1 rounded-full bg-white text-slate-950 font-semibold text-xs active:scale-95 transition-transform"
            >
              <span className="mr-1.5">Contact</span>
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-xl text-slate-200 hover:text-white bg-surface/80 border border-surface-border transition-colors active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 p-3 bg-surface-elevated/95 backdrop-blur-2xl rounded-2xl border border-surface-border flex flex-col gap-1 animate-fade-in shadow-glass">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:text-emerald-300 hover:bg-surface text-sm font-medium transition-colors active:bg-emerald-500/10"
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
