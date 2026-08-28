<p align="center">
  <img src="public/favicon.png" alt="Ashrafu Hussein Logo" width="80" />
</p>

<h1 align="center">Ashrafu Hussein — Portfolio v2.0</h1>

<p align="center">
  <strong>Flutter &amp; Supabase Software Engineer · Dar es Salaam &amp; Arusha, Tanzania</strong>
</p>

<p align="center">
  <a href="https://ashrafuhussein-7219b.web.app">
    <img src="https://img.shields.io/badge/🌐_Live_Site-ashrafuhussein-10b981?style=for-the-badge&labelColor=080f0b" alt="Live Site" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-14-000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase_Hosting-Deployed-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Hosting" />
</p>

---

## ✨ Overview

A premium, single-page portfolio built to showcase my work as a **Flutter & Supabase Software Engineer**. The site is engineered with modern web technologies and designed around a signature **Living Emerald Green** dark-mode aesthetic featuring 3D WebGL visuals, fluid Framer Motion animations, and a fully accessible, SEO-optimized architecture.

> **Live:** [ashrafuhussein-7219b.web.app](https://ashrafuhussein-7219b.web.app)

---

## 🏗 Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [Next.js 14](https://nextjs.org) (App Router, Static Export) |
| **Language** | [TypeScript 5.6](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com) + Custom Design Tokens |
| **Animation** | [Framer Motion 11](https://www.framer.com/motion) |
| **3D / WebGL** | [Three.js](https://threejs.org) + [@designcodeio/threeui](https://www.npmjs.com/package/@designcodeio/threeui) |
| **Typography** | [Inter](https://rsms.me/inter) (sans) · [JetBrains Mono](https://www.jetbrains.com/lp/mono) (mono) |
| **Notifications** | [Goey Toast](https://www.npmjs.com/package/goey-toast) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Hosting** | [Firebase Hosting](https://firebase.google.com/products/hosting) |

---

## 🎨 Design System

The portfolio uses a custom **"Inner Green"** design system with carefully curated tokens:

- **Background:** `#080f0b` — Deep botanical black
- **Surface:** `#0f1c14` → `#15271d` — Layered dark green surfaces
- **Brand (Emerald):** Full 50–950 scale anchored on `#10b981`
- **Moss (Accent):** Secondary green scale for subtle variation
- **Shadows:** Custom `glow` and `glass` box-shadows for glassmorphism effects
- **Scrollbar:** Themed to match the emerald palette

---

## 📐 Architecture

```
my-portofolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, JSON-LD, providers
│   ├── page.tsx            # Home page — assembles all sections
│   ├── globals.css         # Global styles, scrollbar, toast overrides
│   ├── robots.ts           # SEO robots.txt (AI-bot friendly)
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── hero/               # Hero section + ThreeUI WebGL background
│   ├── about/              # About & education background
│   ├── skills/             # Skills bento grid
│   ├── projects/           # Project cards, modals, code snippets
│   ├── timeline/           # Academic & career timeline
│   ├── contact/            # Contact form with toast feedback
│   ├── layout/             # Navbar (glass) & Footer
│   ├── cursor/             # Custom smooth-follow cursor
│   └── ui/                 # Shared UI primitives (ToastProvider)
├── hooks/
│   ├── use-mouse.ts        # Mouse position tracking hook
│   └── use-reduced-motion.ts  # Prefers-reduced-motion detection
├── public/
│   ├── img/                # Project screenshots & profile photos
│   ├── inner-green-assets/ # Design system assets
│   ├── favicon.png         # Site favicon
│   └── llms.txt            # AI agent context (llmstxt.org standard)
├── tailwind.config.ts      # Extended theme with brand tokens
├── next.config.mjs         # Static export configuration
└── firebase.json           # Hosting config with caching headers
```

---

## 🧩 Sections

| Section | Description |
| --- | --- |
| **Hero** | Full-viewport landing with animated ThreeUI 3D WebGL canvas, typed name, tagline, and CTA buttons |
| **About** | Personal bio, education background, and professional summary |
| **Skills** | Bento-grid layout showcasing technical proficiencies across mobile, backend, web, and DevOps |
| **Projects** | Featured case studies (SONNOH, Let's Vent, ProjectHub, ATC Events, Fursafy) with expandable modals and inline code snippets |
| **Timeline** | Chronological progression of academic and career milestones |
| **Contact** | Contact form with real-time goey-toast notification feedback |

---

## ⚡ Features

- **3D WebGL Background** — Interactive Three.js scene via ThreeUI Sylva template
- **Framer Motion Animations** — Staggered reveals, smooth transitions, and micro-interactions
- **Custom Cursor** — Smooth-follow cursor with mouse tracking hook
- **Glassmorphism Navbar** — Sticky glass-effect navigation bar
- **Dark Mode First** — Engineered for dark mode with `color-scheme: dark`
- **Responsive Design** — Mobile-first, fully responsive across all breakpoints
- **Accessibility** — Skip-to-content link, reduced-motion support, semantic HTML
- **SEO Optimized** — Full metadata, Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- **AI-Discoverable** — `llms.txt` file following the [llmstxt.org](https://llmstxt.org) standard for AI agent context
- **Performance** — Static export with aggressive cache headers for assets

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/AshrafuHussein/my-portofolio.git
cd my-portofolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the site at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

Generates a static export in the `out/` directory.

---

## 🌍 Deployment

The site is deployed to **Firebase Hosting** as a static export.

```bash
# Build + Deploy (predeploy hook runs `npm run build` automatically)
npm run deploy
```

This runs `next build` (static export to `out/`) then `firebase deploy --only hosting`.

### Firebase Configuration

| Setting | Value |
| --- | --- |
| **Public Directory** | `out` |
| **Clean URLs** | Enabled |
| **Static Asset Caching** | 1 year, immutable (`_next/static/**`, images, fonts) |
| **SPA Rewrite** | `** → /index.html` |

---

## 🧪 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build static export to `out/` |
| `npm run start` | Start production server (for SSR, not used with static export) |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run deploy` | Build and deploy to Firebase Hosting |

---

## 📄 License

This project is private and not licensed for redistribution. All rights reserved.

---

<p align="center">
  Built with 🤍 by <a href="https://github.com/AshrafuHussein"><strong>Ashrafu Hussein</strong></a>
</p>
