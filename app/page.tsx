import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { TimelineSection } from '@/components/timeline/TimelineSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Sticky Glass Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section with ThreeUI WebGL canvas */}
        <HeroSection />

        {/* About & Education Background */}
        <AboutSection />

        {/* Skills Bento */}
        <SkillsSection />

        {/* Featured Case Studies */}
        <ProjectsSection />

        {/* Academic & Career Progression */}
        <TimelineSection />

        {/* Contact Form with gooey-toast feedback */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
