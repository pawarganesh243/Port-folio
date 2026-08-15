import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { X, Send, Sparkles, Check } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('Full-Stack Platform');
  const [budget, setBudget] = useState('$5k - $15k');
  const [timeline, setTimeline] = useState('1 - 2 Months');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playTransmit();
    setSubmitted(true);
    setTimeout(() => {
      sound.playAlert();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="hire-me-modal"
        className="bg-[#0a0a0d] border border-white/20 w-full max-w-xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(255,0,110,0.3)] p-6 sm:p-8"
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

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 bg-[#00F5D4]/20 border border-[#00F5D4] text-[#00F5D4] rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,245,212,0.3)]">
              <Check className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-sans text-2xl font-black text-white uppercase italic">
                CONTRACT INQUIRY DISPATCHED
              </h3>
              <p className="text-xs font-mono-code text-white/70 max-w-md mx-auto">
                Parameters registered under transmission payload. Ganesh Pawar will review the architecture requirements and respond within 1 business cycle.
              </p>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#FF006E] hover:bg-[#e00060] text-xs font-mono-code text-white uppercase font-bold tracking-wider transition-all cursor-pointer"
            >
              CLOSE TERMINAL
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1 pr-8">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#FF006E] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONTRACT & ARCHITECTURAL ENGAGEMENT</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-black text-white uppercase italic">
                INITIATE COLLABORATION
              </h2>
              <p className="text-xs font-mono-code text-white/40">
                Direct channel for bespoke web applications, reactive telemetric dashboards, or technical lead contracts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Type Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-code text-[#e2b17a] uppercase block font-bold">
                  ENGAGEMENT TYPE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Full-Stack Platform', 'Data Analytics Pipeline', 'UI/UX Design System', 'Consultancy / Audit'].map(
                    (type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          sound.playClick();
                          setProjectType(type);
                        }}
                        className={`p-2 text-[11px] font-mono-code border transition-all text-center cursor-pointer ${
                          projectType === type
                            ? 'bg-[#FF006E]/20 border-[#FF006E] text-white font-bold'
                            : 'bg-[#050505] border-white/10 text-white/70 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-code text-[#e2b17a] uppercase block font-bold">
                    NAME / ENTITY
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Nexus Dynamics"
                    className="w-full bg-[#050505] border border-white/10 text-white px-3 py-2 text-xs font-mono-code focus:border-[#FF006E] focus:outline-none placeholder:text-white/25"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-code text-[#e2b17a] uppercase block font-bold">
                    CONTACT EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="contact@entity.com"
                    className="w-full bg-[#050505] border border-white/10 text-white px-3 py-2 text-xs font-mono-code focus:border-[#FF006E] focus:outline-none placeholder:text-white/25"
                  />
                </div>
              </div>

              {/* Project Scope */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono-code text-[#e2b17a] uppercase block font-bold">
                  PROJECT SPECIFICATIONS & TIMELINE
                </label>
                <textarea
                  rows={3}
                  required
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  placeholder="Outline key deliverables, tech expectations, or system requirements..."
                  className="w-full bg-[#050505] border border-white/10 text-white px-3 py-2 text-xs font-mono-code focus:border-[#FF006E] focus:outline-none resize-none placeholder:text-white/25"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                onMouseEnter={() => sound.playHover()}
                className="w-full py-3.5 bg-[#FF006E] hover:bg-[#e00060] text-white font-sans font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,0,110,0.35)] cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>TRANSMIT CONTRACT PROPOSAL</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
