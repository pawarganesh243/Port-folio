import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Volume2, VolumeX, Menu, X, Terminal as TerminalIcon } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenHireMe: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenHireMe,
  onOpenTerminal,
}) => {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setHidden(false); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: SectionId) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    sound.soundEnabled = nextState;
    if (nextState) {
      sound.playClick();
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand (Rockstar inspired aesthetic with hot pink badge) */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick('home')}
          onMouseEnter={() => sound.playHover()}
          className="text-left group cursor-pointer focus:outline-none flex items-center gap-3"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FF006E] text-white flex items-center justify-center font-black text-lg tracking-tighter shadow-[0_0_15px_rgba(255,0,110,0.5)] group-hover:scale-105 transition-transform">
            G
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm sm:text-base font-black tracking-[0.25em] text-white uppercase group-hover:text-[#FF006E] transition-colors duration-200 block">
              GANESH PAWAR
            </span>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-60 text-white font-mono-code">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] uppercase font-bold tracking-[0.2em]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => sound.playHover()}
                className={`relative py-1.5 transition-all duration-200 cursor-pointer ${isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-[#FF006E]'
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF006E] shadow-[0_0_12px_#FF006E] transition-all duration-300"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Sound toggle, Terminal, HIRE ME) */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Sound FX Toggle */}
          <button
            id="audio-toggle-btn"
            onClick={toggleSound}
            title={soundOn ? 'Mute audio FX' : 'Enable audio FX'}
            className="p-2 text-white/50 hover:text-[#FF006E] hover:bg-white/5 transition-colors"
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 opacity-50" />
            )}
          </button>

          {/* Quick Terminal Trigger */}
          <button
            id="nav-terminal-btn"
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            title="Open CLI Terminal (~)"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-[10px] uppercase tracking-widest font-mono-code text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-[#FF006E]" />
            <span>CLI</span>
          </button>

          {/* HIRE ME / JOIN NOW Button */}
          <button
            id="hire-me-btn"
            onClick={() => {
              sound.playClick();
              onOpenHireMe();
            }}
            onMouseEnter={() => sound.playHover()}
            className="bg-[#FF006E] px-5 py-2.5 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white hover:bg-[#e00060] transition-colors cursor-pointer shadow-[0_0_20px_rgba(255,0,110,0.35)] hover:shadow-[0_0_30px_rgba(255,0,110,0.6)] active:scale-95"
          >
            HIRE ME
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-white/70 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/10 px-6 py-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-bold uppercase tracking-[0.2em] text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 transition-colors ${activeSection === item.id
                    ? 'text-[#FF006E] pl-2 border-l-2 border-[#FF006E]'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center gap-2 text-xs text-white/70 hover:text-white font-mono-code uppercase tracking-wider"
              >
                <TerminalIcon className="w-4 h-4 text-[#FF006E]" />
                Launch Terminal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
