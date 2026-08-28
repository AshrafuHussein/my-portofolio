'use client';

import { useState } from 'react';
import { gooeyToast } from 'goey-toast';
import { Send, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.name || !formData.email || !formData.message) {
      gooeyToast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xwpodzya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New message from portfolio',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        gooeyToast.success('Email sent succesfull', {
          description:
            'Your message has been sent and recieved successfully, ill catch up on you soon.',
          action: {
            label: 'Ok',
            onClick: () => {},
          },
          preset: 'bouncy',
          showProgress: true,
        });
      } else {
        gooeyToast.error('Could not send message. Please email ashrafuhussien@gmail.com directly.');
      }
    } catch (err) {
      gooeyToast.error('Network error. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact and project inquiry form"
      className="bg-surface/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-surface-border flex flex-col gap-4 shadow-glass"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-mono text-slate-300">
            Your Name <span className="text-brand-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-surface-elevated text-slate-100 placeholder-slate-500 border border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-mono text-slate-300">
            Your Email <span className="text-brand-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-surface-elevated text-slate-100 placeholder-slate-500 border border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm outline-none transition-all"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-mono text-slate-300">
          Project or Opportunity Topic
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Mobile App / Flutter Project Inquiry"
          className="w-full px-4 py-3 rounded-xl bg-surface-elevated text-slate-100 placeholder-slate-500 border border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm outline-none transition-all"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-mono text-slate-300">
          Message &amp; Requirements <span className="text-brand-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your app vision, timeline, and tech requirements..."
          className="w-full px-4 py-3 rounded-xl bg-surface-elevated text-slate-100 placeholder-slate-500 border border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm outline-none transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        aria-label={loading ? 'Sending message...' : 'Send message'}
        className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 active:scale-[0.99] text-white shadow-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
