import React, { useEffect, useRef } from 'react';
import { EDUCATION_DATA, ACADEMIC_METRICS } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { GraduationCap, Award, CheckCircle2, MapPin, Sparkles, Target } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const radarCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas radar HUD effect
  useEffect(() => {
    const canvas = radarCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angle = 0;
    let animId: number;
    const size = 220;
    canvas.width = size;
    canvas.height = size;
    const center = size / 2;

    const drawRadar = () => {
      ctx.clearRect(0, 0, size, size);

      // Outer rings
      ctx.strokeStyle = 'rgba(255, 0, 110, 0.25)';
      ctx.lineWidth = 1;

      // Circle 1
      ctx.beginPath();
      ctx.arc(center, center, 95, 0, Math.PI * 2);
      ctx.stroke();

      // Circle 2
      ctx.beginPath();
      ctx.arc(center, center, 65, 0, Math.PI * 2);
      ctx.stroke();

      // Circle 3
      ctx.beginPath();
      ctx.arc(center, center, 35, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshairs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.beginPath();
      ctx.moveTo(center, 15);
      ctx.lineTo(center, size - 15);
      ctx.moveTo(15, center);
      ctx.lineTo(size - 15, center);
      ctx.stroke();

      // Sweeping radar beam
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle);

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 95);
      gradient.addColorStop(0, 'rgba(255, 0, 110, 0.7)');
      gradient.addColorStop(0.5, 'rgba(255, 0, 110, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 0, 110, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 95, -0.35, 0);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      // Blinking targets inside radar
      const targets = [
        { x: center + 45, y: center - 30, label: 'B.E. IT' },
        { x: center - 50, y: center + 25, label: 'MATH' },
      ];

      targets.forEach((t) => {
        ctx.fillStyle = '#FF006E';
        ctx.beginPath();
        ctx.arc(t.x, t.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '8px monospace';
        ctx.fillText(t.label, t.x + 6, t.y + 3);
      });

      angle += 0.035;
      animId = requestAnimationFrame(drawRadar);
    };

    drawRadar();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Top Tag */}
      <div className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-bold text-[#FF006E] mb-4 reveal-child delay-100">
        <div className="h-[2px] w-12 bg-[#FF006E]" />
        <span className="tracking-[0.3em] uppercase">— RECORD 04 / CERTIFICATION LOG</span>
      </div>

      {/* Main Header + Status Tags */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-child delay-200">
        <div>
          <h2
            id="education-title"
            className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase italic"
            style={{
              textShadow:
                '2px 2px 0px rgba(255, 0, 110, 0.4), 4px 4px 0px rgba(100, 0, 45, 0.4), 0 0 25px rgba(255, 0, 110, 0.25)',
            }}
          >
            ACADEMIC DOSSIER
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 font-sans max-w-xl">
            Formal foundations in computer engineering, algorithmic computation, and mathematical problem-solving.
          </p>
        </div>

        {/* Status Verification Tags */}
        <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs">
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/30 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>[STATUS: VERIFIED]</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 text-white/80 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#e2b17a]" />
            <span>[DATA_NODE: INDIA / GOA]</span>
          </div>
        </div>
      </div>

      {/* Central Timeline with Alternating Cards */}
      <div className="relative mb-20 reveal-child delay-300">
        {/* Central Vertical Neon Line */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#FF006E] shadow-[0_0_10px_#FF006E]" />

        <div className="space-y-12 md:space-y-16">
          {EDUCATION_DATA.map((item) => {
            const isRight = item.side === 'right';

            return (
              <div
                key={item.id}
                id={`edu-node-${item.id}`}
                className="relative grid grid-cols-1 md:grid-cols-12 items-center"
              >
                {/* Timeline Diamond Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-45 bg-[#050505] border-2 border-[#FF006E] items-center justify-center z-20 shadow-[0_0_15px_#FF006E]">
                  <div className="w-2 h-2 bg-white" />
                </div>

                {/* Card Container positioned left or right based on side */}
                <div
                  className={`md:col-span-5 ${
                    isRight ? 'md:col-start-7' : 'md:col-start-1'
                  }`}
                >
                  <div
                    onMouseEnter={() => sound.playHover()}
                    className="bg-[#0a0a0d] border border-white/10 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_30px_rgba(255,0,110,0.15)] group"
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF006E]" />

                    {/* Date and Institution */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <span className="font-mono-code text-xs text-[#e2b17a] font-bold">
                        {item.period}
                      </span>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 bg-white/5 text-white/80 border border-white/10">
                        {item.location}
                      </span>
                    </div>

                    {/* Degree & Field */}
                    <div className="space-y-1 mb-4">
                      <div className="text-xs font-mono-code text-[#FF006E] uppercase tracking-wider font-bold">
                        {item.degree}
                      </div>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF006E] transition-colors">
                        {item.specialization}
                      </h3>
                      <div className="text-sm font-sans text-white/70 font-medium">
                        {item.institution}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans mb-5">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 text-white/80 text-[10px] font-mono-code border border-white/10"
                        >
                          [ {tag} ]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM SECTION: ACADEMIC METRICS + RADAR HUD */}
      <div className="bg-[#0a0a0d] border border-white/10 p-6 sm:p-10 relative overflow-hidden reveal-child delay-400">
        <div className="flex items-center gap-2 text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider mb-6 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#FF006E]" />
          <span>ACADEMIC METRICS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Metrics Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ACADEMIC_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="bg-[#050505] border border-white/10 p-5 space-y-3 relative group hover:border-[#FF006E]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl font-black text-[#FF006E] italic">
                    {metric.id}
                  </span>
                  <span className="text-[10px] font-mono-code text-white/40 uppercase">
                    {metric.label}
                  </span>
                </div>
                <h4 className="font-serif-display text-lg font-bold text-white">
                  {metric.title}
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Radar HUD Visual Canvas */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-[#050505] border border-white/10">
            <canvas ref={radarCanvasRef} className="w-[200px] h-[200px]" />
            <div className="flex items-center gap-2 text-[10px] font-mono-code text-white/40 mt-2">
              <Target className="w-3 h-3 text-[#FF006E]" />
              <span>RADAR SCAN: 360° ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
