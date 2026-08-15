import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { SectionId, Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { TerminalModal } from './components/TerminalModal';
import { HireMeModal } from './components/HireMeModal';
import { Footer } from './components/Footer';
import { BackgroundFX } from './components/BackgroundFX';
import { sound } from './utils/audio';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll spy & Animations using Intersection Observer
  useEffect(() => {
    const sections: SectionId[] = ['home', 'projects', 'experience', 'education', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        element.classList.add('reveal-on-scroll');
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut listener for Terminal (Press ~ or `)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        sound.playClick();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionsList: { id: SectionId; num: string; label: string }[] = [
    { id: 'home', num: '01', label: 'INITIALIZE' },
    { id: 'projects', num: '02', label: 'CONSTRUCTS' },
    { id: 'experience', num: '03', label: 'TRAJECTORY' },
    { id: 'education', num: '04', label: 'DOSSIER' },
    { id: 'contact', num: '05', label: 'TELEMETRY' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white relative selection:bg-[#FF006E] selection:text-white font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#FF006E] origin-left z-50 shadow-[0_0_15px_#FF006E]"
        style={{ scaleX }}
      />

      {/* Dynamic Background FX & Ambient Lighting */}
      <BackgroundFX />

      {/* Primary Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenHireMe={() => setIsHireMeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Floating Left-Side Rotated Telemetry Watermark (matching Leonida State District aesthetic) */}
      <div className="hidden 2xl:block fixed top-1/2 -left-12 transform -rotate-90 origin-left z-20 pointer-events-none select-none">
        <span className="text-[10px] font-black uppercase tracking-[1em] opacity-20 text-white">
          LEONIDA TELEMETRY PROTOCOL
        </span>
      </div>

      {/* Floating Right-Side GTA VI Style Section HUD Tracker */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col space-y-4 z-30 font-mono-code text-[10px] pointer-events-auto">
        {sectionsList.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => {
                sound.playClick();
                scrollToSection(sec.id);
              }}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 group text-right justify-end cursor-pointer focus:outline-none"
            >
              <span
                className={`transition-all duration-300 opacity-0 group-hover:opacity-100 uppercase tracking-widest ${
                  isActive ? 'opacity-100 text-[#FF006E] font-black' : 'text-white/40'
                }`}
              >
                {sec.num} // {sec.label}
              </span>
              <div
                className={`w-2 h-2 rotate-45 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#FF006E] shadow-[0_0_12px_#FF006E] scale-125'
                    : 'bg-white/20 group-hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Screen 1: Hero Section */}
        <HeroSection onExploreProjects={() => scrollToSection('projects')} />

        {/* Screen 2: Digital Constructs / Projects */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onDeploySignal={() => scrollToSection('contact')}
        />

        {/* Screen 3: Professional Trajectory / Experience & Skills */}
        <ExperienceSection />

        {/* Screen 4: Academic Dossier / Education & Metrics */}
        <EducationSection />

        {/* Screen 5: Establish Contact / Communication Terminal */}
        <ContactSection onOpenTerminal={() => setIsTerminalOpen(true)} />
      </main>

      {/* Bottom Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Modals & Overlays */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />
    </div>
  );
}
