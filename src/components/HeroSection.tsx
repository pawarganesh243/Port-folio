import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { TiltCard } from './TiltCard';
import { CyberPet } from './CyberPet';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects }) => {
  // Live ticking countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 16,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  
  // Parallax scroll tracking
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 250]); // Title moves down
  const yParallaxReverse = useTransform(scrollY, [0, 1000], [0, -100]); // HUD moves up

  useEffect(() => {
    // Target release date (14 days from initial load)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(targetDate.getHours() + 8);
    targetDate.setMinutes(targetDate.getMinutes() + 42);
    targetDate.setSeconds(targetDate.getSeconds() + 16);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between max-w-7xl mx-auto z-10 select-none overflow-hidden"
    >
      {/* Top Protocol Tag with Hot Pink Accent Line */}
      <div className="pt-4 sm:pt-8 reveal-child delay-100">
        <div className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-bold">
          <div className="h-[2px] w-12 bg-[#FF006E]" />
          <span className="text-[#FF006E] uppercase tracking-[0.4em] text-xs">
            {PERSONAL_INFO.systemTag}
          </span>
        </div>
      </div>

      {/* Centerpiece Hero Title (Grand Theft Auto VI / Vice City Sophisticated Dark Style) */}
      <motion.div className="my-auto py-8 sm:py-12 relative" style={{ y: yParallax }}>
        {/* Parallax Wireframe HUD circle + Cyber Pet */}
        <div
          className="absolute right-2 sm:right-12 top-0 w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-white/10 pointer-events-none flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
          }}
        >
          {/* Wireframes */}
          <div className="absolute inset-4 rounded-full border border-dashed border-[#FF006E]/30 animate-spin opacity-40" style={{ animationDuration: '30s' }} />
          <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-[#FF006E] rounded-full animate-ping opacity-40" />
          
          {/* Holographic AI Pet */}
          <CyberPet />
        </div>

        {/* Massive Staggered Heading */}
        <div className="relative z-10 space-y-1 reveal-child delay-200">
          <h1
            id="hero-main-title"
            className="font-sans text-5xl sm:text-7xl lg:text-[108px] xl:text-[124px] font-black leading-[0.84] tracking-tighter uppercase italic"
          >
            <span
              className="block text-white transition-transform hover:scale-[1.01] duration-300"
              style={{
                textShadow:
                  '2px 2px 0px rgba(255, 0, 110, 0.4), 4px 4px 0px rgba(100, 0, 45, 0.4), 0 0 35px rgba(255, 0, 110, 0.25)',
              }}
            >
              GANESH
            </span>
            <span
              className="flex items-center gap-4 sm:gap-8 text-white transition-transform hover:scale-[1.01] duration-300"
              style={{
                textShadow:
                  '2px 2px 0px rgba(255, 0, 110, 0.4), 4px 4px 0px rgba(100, 0, 45, 0.4), 0 0 35px rgba(255, 0, 110, 0.25)',
              }}
            >
              <span>PAWAR</span>
            </span>
          </h1>

          {/* Subtitle in Warm Gold / White Serif */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-2 text-base sm:text-xl lg:text-2xl font-serif tracking-[0.14em] text-[#e2b17a] font-medium reveal-child delay-300">
            <span>{PERSONAL_INFO.role}</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-[#e2b17a]/90">{PERSONAL_INFO.subRole}</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Grid: Left Bio + Explore Button & Right Countdown HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8">
        {/* Left Side: Bio + Explore Projects */}
        <div className="lg:col-span-6 relative space-y-6 reveal-child delay-400">
          <p className="text-white/70 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-md font-sans relative z-10">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              id="hero-explore-projects-btn"
              onClick={() => {
                sound.playClick();
                onExploreProjects();
              }}
              onMouseEnter={() => sound.playHover()}
              className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#FF006E] hover:text-white transition-colors duration-200 cursor-pointer shadow-lg flex items-center gap-3"
            >
              <span>WATCH PROJECTS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                sound.playClick();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/20 px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm hover:border-white text-white transition-colors cursor-pointer inline-flex items-center"
            >
              MORE INFO
            </a>
          </div>

          <div className="pt-2 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            <span>AVAILABLE ON</span>
            <div className="flex gap-3 text-white/60">
              <span className="font-bold text-xs">WEB</span>
              <span>•</span>
              <span className="font-bold text-xs">MOBILE</span>
              <span>•</span>
              <span className="font-bold text-xs">CLOUD ARCH</span>
            </div>
          </div>
        </div>

        {/* Right Side: Next Release Countdown HUD Card */}
        <motion.div className="lg:col-span-6 lg:flex lg:justify-end" style={{ y: yParallaxReverse }}>
          <TiltCard className="reveal-child-scale delay-500 w-full sm:w-auto">
            <div
              id="hero-countdown-hud"
              className="w-full sm:w-auto bg-[#0a0a0d] border border-white/10 p-6 sm:p-7 relative transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,0,110,0.15)]"
            >
            {/* Top Pink Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FF006E] shadow-[0_0_12px_#FF006E]" />

            {/* Header label */}
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] text-[#e2b17a] uppercase mb-4 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#FF006E]" />
              <span>NEXT PRODUCTION RELEASE:</span>
            </div>

            {/* Big Countdown Digits */}
            <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {formatDigit(timeLeft.days)}
                </span>
                <span className="text-[10px] sm:text-xs font-mono-code text-white/40 tracking-wider mt-1">
                  DAYS
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {formatDigit(timeLeft.hours)}
                </span>
                <span className="text-[10px] sm:text-xs font-mono-code text-white/40 tracking-wider mt-1">
                  HRS
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {formatDigit(timeLeft.minutes)}
                </span>
                <span className="text-[10px] sm:text-xs font-mono-code text-white/40 tracking-wider mt-1">
                  MIN
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-[#FF006E] tracking-tight drop-shadow-[0_0_12px_rgba(255,0,110,0.6)]">
                  {formatDigit(timeLeft.seconds)}
                </span>
                <span className="text-[10px] sm:text-xs font-mono-code text-[#FF006E]/80 tracking-wider mt-1 font-bold">
                  SEC
                </span>
              </div>
            </div>

            {/* Subtext indicator */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse shadow-[0_0_6px_#00F5D4]" />
                V2.6 PROTOCOL SYNC
              </span>
              <span className="text-[#e2b17a]">HASH #8472-LEONIDA</span>
            </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};
