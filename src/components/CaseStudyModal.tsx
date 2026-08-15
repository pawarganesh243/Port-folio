import React from 'react';
import { Project } from '../types';
import { sound } from '../utils/audio';
import { X, CheckCircle, Cpu, Layers, ExternalLink, Activity } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="case-study-modal"
        className="bg-[#0a0a0d] border border-white/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-8"
      >
        {/* Top Pink Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF006E] shadow-[0_0_10px_#FF006E]" />

        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-6 border-b border-white/10 pr-12">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#FF006E] font-bold">
            <span>[ PROTOCOL BLUEPRINT // {project.number} ]</span>
            <span>•</span>
            <span className="text-[#e2b17a]">{project.category}</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-4xl font-black text-white uppercase italic">
            {project.title}
          </h2>

          <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 my-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#050505] p-3 border border-white/10 text-center">
                <span className="text-[10px] font-mono-code text-white/40 block uppercase">
                  {m.label}
                </span>
                <span className="text-base sm:text-xl font-sans font-black text-[#FF006E] italic">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Details */}
        {project.caseStudyDetails && (
          <div className="space-y-6 my-6 text-xs sm:text-sm font-sans">
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#050505] p-4 border border-white/10 space-y-2">
                <div className="text-xs font-mono-code text-[#e2b17a] uppercase font-bold flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#FF006E]" />
                  <span>The Architectural Challenge</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed font-sans">
                  {project.caseStudyDetails.challenge}
                </p>
              </div>

              <div className="bg-[#050505] p-4 border border-white/10 space-y-2">
                <div className="text-xs font-mono-code text-[#00F5D4] uppercase font-bold flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>The Implemented Solution</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed font-sans">
                  {project.caseStudyDetails.solution}
                </p>
              </div>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-2">
              <div className="text-xs font-mono-code text-[#e2b17a] uppercase font-bold flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#FF006E]" />
                <span>System Architecture Layers</span>
              </div>
              <div className="space-y-1.5 font-mono-code text-xs">
                {project.caseStudyDetails.architecture.map((arch, i) => (
                  <div key={i} className="p-2 bg-[#050505] border border-white/10 flex items-center gap-2 text-white/80">
                    <span className="text-[#FF006E] font-bold">0{i + 1}.</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-2">
              <div className="text-xs font-mono-code text-white uppercase font-bold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span>Quantifiable Outcomes</span>
              </div>
              <ul className="space-y-1.5 text-xs text-white/70">
                {project.caseStudyDetails.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00F5D4] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono-code">
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-6 py-2.5 bg-[#FF006E] hover:bg-[#e00060] text-white font-mono-code text-xs uppercase font-bold tracking-wider transition-all cursor-pointer"
          >
            DISMISS LOG
          </button>
        </div>
      </div>
    </div>
  );
};
