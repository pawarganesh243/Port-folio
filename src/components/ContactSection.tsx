import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { TiltCard } from './TiltCard';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenTerminal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTerminal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [transmissionProgress, setTransmissionProgress] = useState(0);

  const handleCopy = (text: string, label: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playTransmit();
    setIsSending(true);
    setTransmissionProgress(15);

    const interval = setInterval(() => {
      setTransmissionProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 20;
      });
    }, 120);

    setTimeout(() => {
      clearInterval(interval);
      setTransmissionProgress(100);
      setIsSending(false);
      setSentSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      sound.playAlert();
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Top Protocol Tag */}
      <div className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-bold text-[#FF006E] mb-4 reveal-child delay-100">
        <div className="h-[2px] w-12 bg-[#FF006E]" />
        <span className="tracking-[0.3em] uppercase">— PROTOCOL 04 // COMMUNICATIONS</span>
      </div>

      {/* Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-child delay-200">
        <div>
          <h2
            id="contact-title"
            className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase italic"
            style={{
              textShadow:
                '2px 2px 0px rgba(255, 0, 110, 0.4), 4px 4px 0px rgba(100, 0, 45, 0.4), 0 0 25px rgba(255, 0, 110, 0.25)',
            }}
          >
            ESTABLISH CONTACT
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 font-sans max-w-xl">
            Direct telemetry link for enterprise contracts, technical partnerships, or architectural consultation.
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-mono-code text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
          <span>PROTOCOL STATUS: ONLINE</span>
        </div>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 reveal-child delay-300">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans">
            {PERSONAL_INFO.statusDescription}
          </p>

          {/* Email Direct Link Card */}
          <TiltCard intensity={8}>
            <div
              id="contact-email-card"
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              onMouseEnter={() => sound.playHover()}
              className="bg-[#0a0a0d] border border-white/10 hover:border-[#FF006E]/50 p-5 sm:p-6 transition-all duration-300 cursor-pointer relative group"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider block font-bold">
                    DIRECT LINK
                  </span>
                  <div className="text-base sm:text-xl font-mono-code font-bold text-white group-hover:text-[#FF006E] transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF006E]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <span className="text-[11px] font-mono-code text-white/40 block">
                    PRIMARY INBOX • PGP ENCRYPTED
                  </span>
                </div>

                <button
                  className="p-2.5 bg-white/5 group-hover:bg-[#FF006E]/20 border border-white/10 text-white/70 group-hover:text-white transition-all"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-[#00F5D4]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </TiltCard>

          {/* Voice Comms Phone Card */}
          <TiltCard intensity={8}>
            <div
              id="contact-phone-card"
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              onMouseEnter={() => sound.playHover()}
              className="bg-[#0a0a0d] border border-white/10 hover:border-[#FF006E]/50 p-5 sm:p-6 transition-all duration-300 cursor-pointer relative group"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider block font-bold">
                    VOICE COMMS
                  </span>
                  <div className="text-base sm:text-xl font-mono-code font-bold text-white group-hover:text-[#FF006E] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FF006E]" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <span className="text-[11px] font-mono-code text-white/40 block">
                    SECURE CELLULAR RELAY
                  </span>
                </div>

                <button
                  className="p-2.5 bg-white/5 group-hover:bg-[#FF006E]/20 border border-white/10 text-white/70 group-hover:text-white transition-all"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-[#00F5D4]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </TiltCard>

          {/* Social Network Nodes */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <a
              id="contact-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="flex items-center justify-center gap-2.5 p-4 bg-[#0a0a0d] border border-white/10 hover:border-[#FF006E]/60 text-white font-mono-code text-xs transition-all group font-bold tracking-wider"
            >
              <Github className="w-4 h-4 text-[#FF006E] group-hover:scale-110 transition-transform" />
              <span>GITHUB</span>
            </a>

            <a
              id="contact-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="flex items-center justify-center gap-2.5 p-4 bg-[#0a0a0d] border border-white/10 hover:border-[#FF006E]/60 text-white font-mono-code text-xs transition-all group font-bold tracking-wider"
            >
              <Linkedin className="w-4 h-4 text-[#FF006E] group-hover:scale-110 transition-transform" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* Terminal Command trigger */}
          <div className="pt-2">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-white/80 hover:text-white transition-all uppercase tracking-wider font-bold"
            >
              <Terminal className="w-3.5 h-3.5 text-[#e2b17a]" />
              <span>TRANSMIT VIA COMMAND LINE TERMINAL</span>
            </button>
          </div>
        </div>

        {/* Right Column: Secure Transmission Form */}
        <div className="lg:col-span-6">
          <div
            id="contact-form-card"
            className="bg-[#0a0a0d] border border-white/10 p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Top Pink Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF006E]" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  TRANSMIT MESSAGE
                </h3>
                <p className="text-xs font-mono-code text-white/40 mt-0.5">
                  Enter parameters for high-priority dispatch.
                </p>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#00F5D4]" />
            </div>

            {sentSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 bg-[#00F5D4]/20 border border-[#00F5D4] text-[#00F5D4] rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-display text-xl font-bold text-white">
                    TRANSMISSION COMPLETE
                  </h4>
                  <p className="text-xs font-mono-code text-white/70 max-w-xs mx-auto">
                    Packet hash validated. Your transmission has been queued for immediate processing.
                  </p>
                </div>
                <button
                  onClick={() => {
                    sound.playClick();
                    setSentSuccess(false);
                  }}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-xs font-mono-code text-white transition-all font-bold uppercase tracking-wider"
                >
                  TRANSMIT ANOTHER PACKET
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Identifier Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider block font-bold">
                    IDENTIFIER / NAME
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Cyber Corp Operations"
                    className="w-full bg-[#050505] border border-white/10 focus:border-[#FF006E] text-white px-4 py-3 text-xs sm:text-sm font-mono-code focus:outline-none transition-all placeholder:text-white/25"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider block font-bold">
                    SECURE EMAIL / RETURN ADDRESS
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="agent@domain.com"
                    className="w-full bg-[#050505] border border-white/10 focus:border-[#FF006E] text-white px-4 py-3 text-xs sm:text-sm font-mono-code focus:outline-none transition-all placeholder:text-white/25"
                  />
                </div>

                {/* Payload Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code text-[#e2b17a] uppercase tracking-wider block font-bold">
                    TRANSMISSION PAYLOAD / MESSAGE
                  </label>
                  <textarea
                    id="contact-message-input"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architectural requirements, data volumes, or timeline parameters..."
                    className="w-full bg-[#050505] border border-white/10 focus:border-[#FF006E] text-white px-4 py-3 text-xs sm:text-sm font-mono-code focus:outline-none transition-all placeholder:text-white/25 resize-none"
                  />
                </div>

                {/* Transmission Progress Bar */}
                {isSending && (
                  <div className="space-y-1.5 py-1">
                    <div className="flex justify-between text-[11px] font-mono-code text-[#FF006E] font-bold">
                      <span>ENCRYPTING & ROUTING...</span>
                      <span>{transmissionProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/60 overflow-hidden">
                      <div
                        className="h-full bg-[#FF006E] transition-all duration-150 shadow-[0_0_8px_#FF006E]"
                        style={{ width: `${transmissionProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSending}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-4 bg-[#FF006E] hover:bg-[#e00060] disabled:opacity-50 text-white font-sans font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(255,0,110,0.35)] hover:shadow-[0_0_35px_rgba(255,0,110,0.6)] cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'TRANSMITTING...' : 'INITIATE TRANSFER'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
