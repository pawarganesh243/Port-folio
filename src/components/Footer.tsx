import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Github, Linkedin, ArrowUp, Terminal, Radio } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTerminal }) => {
  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] py-12 px-6 md:px-12 z-10 text-xs font-mono-code text-white/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Tag */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF006E] shadow-[0_0_8px_#FF006E]" />
          <span className="text-white/80 font-bold tracking-wider">
            {PERSONAL_INFO.footerTag}
          </span>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex items-center space-x-6 text-white/60">
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('projects');
            }}
            className="hover:text-white transition-colors cursor-pointer font-bold tracking-wider"
          >
            PROJECTS
          </button>
          <span>•</span>
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('experience');
            }}
            className="hover:text-white transition-colors cursor-pointer font-bold tracking-wider"
          >
            EXPERIENCE
          </button>
          <span>•</span>
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('education');
            }}
            className="hover:text-white transition-colors cursor-pointer font-bold tracking-wider"
          >
            EDUCATION
          </button>
          <span>•</span>
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('contact');
            }}
            className="hover:text-white transition-colors cursor-pointer font-bold tracking-wider"
          >
            CONTACT
          </button>
        </div>

        {/* Right Actions: CLI, GitHub, LinkedIn, Back to top */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            title="Open CLI"
            className="p-2 text-white/60 hover:text-[#FF006E] bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-2 text-[#FF006E] hover:text-white bg-[#FF006E]/10 hover:bg-[#FF006E]/20 border border-[#FF006E]/30 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
