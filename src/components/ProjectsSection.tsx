import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { TiltCard } from './TiltCard';
import {
  ExternalLink,
  Layers,
  Sparkles,
  Train,
  Radio,
  Music,
  ArrowRight,
  Filter,
  CheckCircle2,
  Maximize2,
  QrCode,
  Compass,
  Play,
  Pause,
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onDeploySignal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onDeploySignal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Mobile App' | 'Web App' | 'UI/UX Design'>('All');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [ticketScanned, setTicketScanned] = useState(false);

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  const mainProject = PROJECTS_DATA[0]; // Transit Nexus OS
  const secondaryProjects = filteredProjects.filter((p) => p.id !== mainProject.id);

  const handleFilterSelect = (filter: 'All' | 'Mobile App' | 'Web App' | 'UI/UX Design') => {
    sound.playClick();
    setSelectedFilter(filter);
    setShowFilterMenu(false);
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Top Header Protocol */}
      <div className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-bold text-[#FF006E] mb-4 reveal-child delay-100">
        <div className="h-[2px] w-12 bg-[#FF006E]" />
        <span className="tracking-[0.3em] uppercase">— ARCHIVE PROTOCOL // DIGITAL CONSTRUCTS</span>
      </div>

      {/* Main Section Header + Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-child delay-200">
        <div>
          <h2
            id="projects-title"
            className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase italic"
            style={{
              textShadow:
                '2px 2px 0px rgba(255, 0, 110, 0.4), 4px 4px 0px rgba(100, 0, 45, 0.4), 0 0 25px rgba(255, 0, 110, 0.25)',
            }}
          >
            DIGITAL CONSTRUCTS
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 font-sans max-w-xl">
            Curated selection of enterprise applications, reactive telemetric platforms, and experimental design architectures.
          </p>
        </div>

        {/* Filter Dropdown / Pills */}
        <div className="relative">
          <button
            id="projects-filter-btn"
            onClick={() => {
              sound.playClick();
              setShowFilterMenu(!showFilterMenu);
            }}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-5 py-3 bg-[#0a0a0d] hover:bg-[#121218] border border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-lg"
          >
            <Filter className="w-3.5 h-3.5 text-[#FF006E]" />
            <span>Filter: {selectedFilter}</span>
            <span className="text-[#FF006E] ml-1">▾</span>
          </button>

          {showFilterMenu && (
            <div className="absolute right-0 mt-2 w-52 bg-[#0a0a0d] border border-white/15 shadow-2xl py-2 z-30 font-bold uppercase tracking-wider text-xs animate-in fade-in slide-in-from-top-2 duration-150">
              {(['All', 'Mobile App', 'Web App', 'UI/UX Design'] as const).map((filter) => (
                <button
                  key={filter}
                  id={`filter-opt-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => handleFilterSelect(filter)}
                  className={`w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center justify-between transition-colors ${
                    selectedFilter === filter ? 'text-[#FF006E] bg-white/5 font-black' : 'text-white/70'
                  }`}
                >
                  <span>{filter}</span>
                  {selectedFilter === filter && <CheckCircle2 className="w-3.5 h-3.5 text-[#FF006E]" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FEATURED MAIN PROJECT 01: TRANSIT NEXUS OS */}
      {(selectedFilter === 'All' || selectedFilter === mainProject.category) && (
        <div
          id="featured-project-01"
          className="bg-[#0a0a0d] border border-white/10 p-6 sm:p-10 lg:p-12 mb-14 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,0,110,0.15)] group reveal-child delay-300"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF006E]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Number and tags */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-3xl sm:text-4xl font-black text-[#FF006E] tracking-wider italic">
                  {mainProject.number}
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono-code">
                  <span className="px-2.5 py-1 bg-[#FF006E]/10 text-[#FF006E] border border-[#FF006E]/30 font-bold">
                    [ {mainProject.tags[0]} ]
                  </span>
                  <span className="px-2.5 py-1 bg-white/5 text-white/80 border border-white/10">
                    [ {mainProject.tags[1]} ]
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {mainProject.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans">
                {mainProject.shortDescription}
              </p>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider block font-bold">
                  CORE INFRASTRUCTURE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {mainProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-white/80 text-xs font-mono-code border border-white/10 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  id="project-01-view-case-study"
                  onClick={() => {
                    sound.playClick();
                    onSelectProject(mainProject);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="px-8 py-4 bg-[#FF006E] hover:bg-[#e00060] text-white text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,0,110,0.35)] hover:shadow-[0_0_30px_rgba(255,0,110,0.6)] cursor-pointer flex items-center gap-2"
                >
                  <span>INSPECT BLUEPRINT</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <button
                  id="project-01-scan-sim"
                  onClick={() => {
                    sound.playTransmit();
                    setTicketScanned(!ticketScanned);
                  }}
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/15 text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#FF006E]" />
                  <span>{ticketScanned ? 'RELOAD TOKEN' : 'SIMULATE QR PASS'}</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup (Smartphone HUD Frame) */}
            <div className="lg:col-span-6 flex justify-center">
              <TiltCard intensity={15} className="w-full flex justify-center">
                <div className="w-full max-w-[300px] sm:max-w-[380px] bg-[#050505] border-2 border-white/15 rounded-3xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative group/phone transition-transform duration-300">
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-[#121216] rounded-full mx-auto mb-4 border border-white/5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse mr-2" />
                  <span className="text-[9px] font-mono-code text-white/40">NEXUS v3.2</span>
                </div>

                {/* Railway App Header inside phone */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-[#FF006E]" />
                    <span className="text-xs font-sans font-black text-white tracking-wider uppercase">AURORA RAILWAYS</span>
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/30 rounded font-bold">
                    LIVE
                  </span>
                </div>

                {/* Ticket Card Mockup */}
                <div className="bg-[#0e0e12] border border-white/10 p-4 rounded-xl space-y-3 mb-4 relative overflow-hidden">
                  <div className="flex justify-between items-center text-[10px] font-mono-code text-white/40">
                    <span>TICKET #{ticketScanned ? 'VALIDATED-849' : 'K7854D1'}</span>
                    <span className="text-[#FF006E] font-bold">EXPRESS 209</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-y border-white/5">
                    <div>
                      <div className="text-base font-bold font-serif text-white">MUMBAI</div>
                      <div className="text-[10px] font-mono-code text-white/40">CSTM • 22:30</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#e2b17a]" />
                    <div className="text-right">
                      <div className="text-base font-bold font-serif text-white">PUNE JN</div>
                      <div className="text-[10px] font-mono-code text-white/40">PLATFORM 04 • 08:45</div>
                    </div>
                  </div>

                  {/* QR or Live Scan Status */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-[11px] font-mono-code text-white/80 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                      <span>{ticketScanned ? 'GATE UNLOCKED (0.2s)' : 'READY TO SCAN'}</span>
                    </div>
                    <span className="text-[11px] font-mono-code text-[#e2b17a] font-semibold">COACH B4 / 32</span>
                  </div>
                </div>

                {/* Telemetry Bar inside phone */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono-code">
                  <div className="bg-white/5 p-2 rounded border border-white/5">
                    <span className="text-white/40 block">SPEED</span>
                    <span className="text-white font-bold">142 km/h</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded border border-white/5">
                    <span className="text-white/40 block">ETA</span>
                    <span className="text-[#e2b17a] font-bold">04h 15m</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded border border-white/5">
                    <span className="text-white/40 block">TURNSTILE</span>
                    <span className="text-[#FF006E] font-bold">PASS-OK</span>
                  </div>
                </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      )}

      {/* SECONDARY PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal-child delay-400">
        {secondaryProjects.map((project) => {
          return (
            <TiltCard key={project.id} intensity={8} className="h-full">
              <div
                id={`project-card-${project.id}`}
                className="bg-[#0a0a0d] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,0,110,0.12)] h-full"
              >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF006E] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                {/* Header with Project Number and Category */}
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl sm:text-3xl font-black text-[#FF006E] italic">
                    {project.number}
                  </span>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono-code">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 text-white/80 border border-white/10">
                        [ {tag} ]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF006E] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                  {project.shortDescription}
                </p>

                {/* Interactive Visual Widget for Project 02 & 03 */}
                {project.id === 'fleet-command-center' && (
                  <div className="bg-[#050505] border border-white/10 p-4 space-y-3 font-mono-code text-xs">
                    <div className="flex justify-between items-center text-white/50 text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-[#FF006E] animate-pulse" />
                        TELEMETRY FEED
                      </span>
                      <span className="text-[#00F5D4]">LATENCY: 18ms</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="bg-white/5 p-1.5">
                        <span className="text-white/40 block">TRAINS ACTIVE</span>
                        <span className="text-white font-bold text-sm">46</span>
                      </div>
                      <div className="bg-white/5 p-1.5">
                        <span className="text-white/40 block">ON-TIME</span>
                        <span className="text-[#00F5D4] font-bold text-sm">94.2%</span>
                      </div>
                      <div className="bg-white/5 p-1.5">
                        <span className="text-white/40 block">ALERTS</span>
                        <span className="text-[#e2b17a] font-bold text-sm">0 MINOR</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'resonance-audio' && (
                  <div className="bg-[#050505] border border-white/10 p-4 space-y-3 font-mono-code text-xs">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Music className="w-3.5 h-3.5 text-[#FF006E]" />
                        <span className="text-white text-[11px] font-sans font-bold">Strings of the Universe</span>
                      </div>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsPlayingAudio(!isPlayingAudio);
                        }}
                        className="p-1 text-white hover:text-[#FF006E] bg-white/5 rounded transition-colors"
                      >
                        {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      </button>
                    </div>
                    {/* Animated Neon Waveform */}
                    <div className="flex items-center justify-between gap-1 h-8 px-1">
                      {[40, 75, 90, 60, 100, 45, 80, 95, 30, 85, 70, 90, 50, 65, 80, 40].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-[#FF006E] transition-all duration-200"
                          style={{
                            height: isPlayingAudio ? `${Math.max(15, (h * (Math.random() * 0.6 + 0.6)))}%` : `${h * 0.3}%`,
                            opacity: isPlayingAudio ? 0.95 : 0.4,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 text-white/70 text-[11px] font-mono-code border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center">
                <button
                  id={`project-card-inspect-${project.id}`}
                  onClick={() => {
                    sound.playClick();
                    onSelectProject(project);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="text-xs font-mono-code text-[#FF006E] hover:text-white flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-bold"
                >
                  <span>INSPECT SPECS</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-[10px] font-mono-code text-white/40">STATUS: PRODUCTION</span>
              </div>
            </div>
            </TiltCard>
          );
        })}
      </div>

      {/* BOTTOM CALL-TO-ACTION CARD (INITIATE SEQUENCE) */}
      <div
        id="projects-cta-banner"
        className="bg-[#0a0a0d] border border-white/15 p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl reveal-child delay-500"
      >
        {/* Striated scanline background */}
        <div className="absolute inset-0 bg-scanlines-pink opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-2 max-w-xl">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-sans font-bold text-[#FF006E] uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEPLOYMENT CHANNEL OPEN</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-4xl font-black text-white uppercase tracking-tight italic">
            INITIATE SEQUENCE
          </h3>
          <p className="text-white/70 text-xs sm:text-sm font-sans">
            Ready to engineer the next generation of scalable platforms or deploy high-frequency data pipelines?
          </p>
        </div>

        <div className="relative z-10">
          <button
            id="projects-deploy-signal-btn"
            onClick={() => {
              sound.playClick();
              onDeploySignal();
            }}
            onMouseEnter={() => sound.playHover()}
            className="group px-10 py-5 bg-[#FF006E] hover:bg-[#e00060] text-white text-xs sm:text-sm font-black font-sans uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(255,0,110,0.4)] hover:shadow-[0_0_40px_rgba(255,0,110,0.7)] active:scale-95 cursor-pointer flex items-center gap-3 whitespace-nowrap"
          >
            <span>DEPLOY SIGNAL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
