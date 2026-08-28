import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Inter, JetBrains_Mono } from 'next/font/google';
import 'goey-toast/styles.css';
import '@designcodeio/threeui/style.css';
import './globals.css';

const ToastProvider = dynamic(
  () => import('@/components/ui/ToastProvider').then((mod) => mod.ToastProvider),
  { ssr: false }
);

const SmoothFollower = dynamic(
  () => import('@/components/cursor/SmoothFollower').then((mod) => mod.SmoothFollower),
  { ssr: false }
);

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

const SITE_URL = 'https://ashrafuhussein-7219b.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    'PostGIS Mobile Engineer',
    'Next.js Portfolio',
    'Dart Engineer East Africa',
  ],
  authors: [{ name: 'Ashrafu Hussein', url: 'https://github.com/AshrafuHussein' }],
  creator: 'Ashrafu Hussein',
  category: 'technology',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Ashrafu Hussein | Flutter & Supabase Software Engineer',
    description:
      'Freelance Software Engineer building robust mobile systems in Flutter & Supabase — incoming Mobile Development Intern at eGA (Oct 2026).',
    siteName: 'Ashrafu Hussein Portfolio',
    images: [
      {
        url: `${SITE_URL}/img/ashrafu%20hussein.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Ashrafu Hussein — Flutter & Supabase Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashrafu Hussein | Flutter & Supabase Software Engineer',
    description:
      'Freelance Software Engineer building robust mobile systems in Flutter & Supabase — incoming Mobile Development Intern at eGA (Oct 2026).',
    images: [`${SITE_URL}/img/ashrafu%20hussein.png`],
    creator: '@AshrafuHussein',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#080f0b',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Ashrafu Hussein',
      alternateName: ['Ashrafu', 'ash_tek255', 'Ash Lizer'],
      url: SITE_URL,
      image: `${SITE_URL}/img/ashrafu%20hussein.png`,
      jobTitle: 'Flutter & Supabase Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'e-Government Authority (eGA) Tanzania',
        url: 'https://ega.go.tz',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Arusha Technical College',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dar es Salaam',
        addressRegion: 'Dar es Salaam & Arusha',
        addressCountry: 'Tanzania',
      },
      sameAs: [
        'https://github.com/AshrafuHussein',
        'https://www.instagram.com/ash_tek255/',
        'https://www.tiktok.com/@ash_lizer',
      ],
      knowsAbout: [
        'Flutter',
        'Dart',
        'Supabase',
        'PostgreSQL',
        'PostGIS',
        'BLoC State Management',
        'Clean Architecture',
        'Next.js',
        'React',
        'Mobile App Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Ashrafu Hussein Portfolio',
      description:
        'Portfolio of Ashrafu Hussein, a freelance software engineer in Tanzania specializing in production Flutter/Dart mobile apps & Supabase backends.',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} dark scroll-smooth`}>
      <head>
        {/* Machine-readable AI Agent summary standard (llmstxt.org) */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Summary (llms.txt)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-slate-100 selection:bg-brand-500/30 selection:text-brand-100 min-h-screen">
        {/* Accessible Skip to main content link for keyboard users & screen readers */}
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-xl focus:shadow-lg font-mono text-xs focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Cursify SmoothFollower Cursor */}
        <SmoothFollower />

        {/* gooey-toast provider for promise-based notifications */}
        <ToastProvider />

        {children}
      </body>
    </html>
  );
}
