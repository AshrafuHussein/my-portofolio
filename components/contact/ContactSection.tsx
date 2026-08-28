'use client';

import { ContactForm } from './ContactForm';
import { Copy, Github, Instagram, Mail, MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { gooeyToast } from 'goey-toast';

export function ContactSection() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    gooeyToast.success(`${label} copied!`, {
      description: text,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Let&apos;s build your next mobile milestone.
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Available for freelance Flutter development, architecture consultation, or Supabase
            backend integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-5 border border-surface-border flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <div className="text-sm font-semibold text-slate-100">ashrafuhussien@gmail.com</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard('ashrafuhussien@gmail.com', 'Email')}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-surface-elevated border border-transparent hover:border-surface-border transition-colors"
                aria-label="Copy Email address"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-5 border border-surface-border flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Direct / WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-100">+255 749 939 527</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard('+255749939527', 'Phone number')}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-surface-elevated border border-transparent hover:border-surface-border transition-colors"
                aria-label="Copy Phone number"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-5 border border-surface-border flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Based in</div>
                <div className="text-sm font-semibold text-slate-100">
                  Dar es Salaam &amp; Arusha, Tanzania (GMT+3)
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="bg-surface-elevated/50 rounded-2xl p-5 border border-surface-border flex flex-col gap-3">
              <div className="text-xs font-mono text-slate-400">Social Channels &amp; Code</div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/AshrafuHussein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface border border-surface-border hover:border-brand-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/ash_tek255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface border border-surface-border hover:border-brand-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@ash_lizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface border border-surface-border hover:border-brand-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
