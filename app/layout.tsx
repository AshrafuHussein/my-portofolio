import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import 'goey-toast/styles.css';
import '@designcodeio/threeui/style.css';
import './globals.css';
import { ToastProvider } from '@/components/ui/ToastProvider';
import { SmoothFollower } from '@/components/cursor/SmoothFollower';

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ashrafuhussein-7219b.web.app'),
  title: 'Ashrafu Hussein | Flutter & Supabase Software Engineer',
  description:
    'Portfolio of Ashrafu Hussein, a freelance software engineer in Tanzania specializing in production Flutter/Dart mobile apps & Supabase backends. Incoming Software/Mobile Development Intern at eGA (Oct 2026).',
  keywords: [
    'Ashrafu Hussein',
    'Flutter Developer Tanzania',
    'Supabase Specialist',
    'BLoC Cubit Architecture',
    'Mobile App Developer Dar es Salaam',
    'eGA Intern 2026',
    'Arusha Technical College Computer Science',
    'Next.js Portfolio',
  ],
  authors: [{ name: 'Ashrafu Hussein', url: 'https://github.com/AshrafuHussein' }],
  creator: 'Ashrafu Hussein',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashrafuhussein-7219b.web.app/',
    title: 'Ashrafu Hussein | Flutter & Supabase Software Engineer',
    description:
      'Freelance Software Engineer building robust mobile systems in Flutter & Supabase — incoming Mobile Development Intern at eGA (Oct 2026).',
    siteName: 'Ashrafu Hussein Portfolio',
    images: [
      {
        url: '/img/ashrafu hussein.png',
        width: 1200,
        height: 630,
        alt: 'Ashrafu Hussein Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashrafu Hussein | Flutter & Supabase Software Engineer',
    description:
      'Freelance Software Engineer building robust mobile systems in Flutter & Supabase — incoming Mobile Development Intern at eGA (Oct 2026).',
    images: ['/img/ashrafu hussein.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#070b14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} dark scroll-smooth`}>
      <body className="bg-background text-slate-100 selection:bg-brand-500/30 selection:text-brand-100 min-h-screen">
        {/* Cursify SmoothFollower Cursor */}
        <SmoothFollower />

        {/* gooey-toast provider for promise-based notifications */}
        <ToastProvider />

        {children}
      </body>
    </html>
  );
}
