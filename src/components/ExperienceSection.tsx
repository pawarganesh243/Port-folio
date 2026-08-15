import React, { useState } from 'react';
import { EXPERIENCE_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Code, Layout, Database, Wrench, ChevronRight, Sparkles, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; level: number; note?: string } | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4 text-[#FF006E]" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#FF006E]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#FF006E]" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-[#FF006E]" />;
      default:
        return <Code className="w-4 h-4 text-[#FF006E]" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Gigantic Background Watermark: ABILITY MATRIX */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap z-0">
        <span className="font-sans text-8xl sm:text-[140px] lg:text-[180px] font-black tracking-widest text-white uppercase italic">
          ABILITY MATRIX
        </span>
      </div>

      {/* Top Protocol Tag */}
      <div className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-bold text-[#FF006E] mb-4 relative z-10 reveal-child delay-100">
        <div className="h-[2px] w-12 bg-[#FF006E]" />
        <span className="tracking-[0.3em] uppercase">— PROTOCOL 02 // TRAJECTORY</span>
      </div>

      {/* Section Title */}
      <div className="mb-16 relative z-10 reveal-child delay-200">
        <h2
          id="experience-title"
          className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase italic"
          style={{
            textShadow:
              '2px 2px 0px rgba(255, 0, 110, 0.4), 4px 4px 0px rgba(100, 0, 45, 0.4), 0 0 25px rgba(255, 0, 110, 0.25)',
          }}
        >
          PROFESSIONAL TRAJECTORY
        </h2>
        <p className="text-white/70 text-sm sm:text-base mt-2 font-sans max-w-xl">
          Track record in building resilient enterprise systems, real-time analytics architectures, and production-grade software.
        </p>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
        {/* Left Column: Work Experience Timeline Card */}
        <div className="lg:col-span-6 space-y-8 reveal-child delay-300">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider mb-2 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FF006E]" />
            <span>OPERATIONAL HISTORY</span>
          </div>

          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="bg-[#0a0a0d] border border-white/10 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,0,110,0.12)] group"
            >
              {/* Left timeline accent line with node */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#FF006E]" />

              {/* Header: Period & Company */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rotate-45 bg-[#FF006E] shadow-[0_0_8px_#FF006E]" />
                    <span className="font-serif-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-[#e2b17a] block mt-0.5 font-semibold">
                    {exp.role}
                  </span>
                </div>

                <span className="px-3 py-1 bg-white/5 text-[#FF006E] text-xs font-mono-code border border-white/10 font-bold">
                  {exp.period}
                </span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3.5 py-6">
                {exp.description.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    <ChevronRight className="w-4 h-4 text-[#FF006E] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Metrics highlight */}
              <div className="p-3.5 bg-[#050505] border border-white/10 text-xs font-mono-code text-[#e2b17a] flex items-center justify-between">
                <span>IMPACT METRIC:</span>
                <span className="text-white font-bold">{exp.metrics}</span>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 bg-white/5 text-white/70 text-[11px] font-mono-code border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Skill Matrix Categories */}
        <div className="lg:col-span-6 space-y-6 reveal-child delay-400">
          <div className="flex items-center justify-between text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider mb-2 font-bold">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF006E]" />
              <span>CORE CAPABILITY MATRIX</span>
            </span>
            <span className="text-white/40">SYSTEM GRADE: S-TIER</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat) => {
              const isCategoryActive = activeSkillCategory === cat.title;

              return (
                <div
                  key={cat.title}
                  id={`skill-cat-${cat.title.replace(/\s+/g, '-').toLowerCase()}`}
                  onMouseEnter={() => {
                    sound.playHover();
                    setActiveSkillCategory(cat.title);
                  }}
                  className={`bg-[#0a0a0d] border p-5 transition-all duration-300 cursor-pointer relative ${
                    isCategoryActive
                      ? 'border-[#FF006E]/60 shadow-[0_0_25px_rgba(255,0,110,0.2)] bg-[#121218]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Category Title */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(cat.iconName)}
                      <span className="font-serif-display text-sm font-bold text-white tracking-wider">
                        {cat.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-code text-white/40">{cat.skills.length} MODULES</span>
                  </div>

                  {/* Skills Pills */}
                  <div className="space-y-2">
                    {cat.skills.map((skill) => {
                      const isSelected = selectedSkill?.name === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onClick={() => {
                            sound.playClick();
                            setSelectedSkill(skill);
                          }}
                          className={`p-2 border transition-all text-xs font-mono-code flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#FF006E]/20 border-[#FF006E] text-white shadow-[0_0_12px_rgba(255,0,110,0.4)] font-bold'
                              : 'bg-white/5 border-white/5 text-white/80 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-[10px] text-[#e2b17a] font-semibold">{skill.level}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Skill Level Inspector Card */}
          {selectedSkill && (
            <div className="bg-[#0a0a0d] border border-[#FF006E]/40 p-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#FF006E] mb-2">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00F5D4]" />
                  {selectedSkill.name.toUpperCase()} TELEMETRY
                </span>
                <span className="text-white font-bold">{selectedSkill.level}% PROFICIENCY</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-black/60 overflow-hidden mb-2">
                <div
                  className="h-full bg-[#FF006E] transition-all duration-500 shadow-[0_0_8px_#FF006E]"
                  style={{ width: `${selectedSkill.level}%` }}
                />
              </div>

              {selectedSkill.note && (
                <p className="text-[11px] font-mono-code text-white/70">
                  <span className="text-[#e2b17a]">ECOSYSTEM:</span> {selectedSkill.note}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
