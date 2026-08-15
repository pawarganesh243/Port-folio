import React, { useState, useRef, useEffect } from 'react';
import { TerminalCommandOutput } from '../types';
import { PERSONAL_INFO, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalCommandOutput[]>([
    {
      command: 'sys.init',
      output: [
        'GANESH PAWAR // ARCHITECTURAL CLI TERMINAL v4.2',
        'Type "help" to view available system routines and dispatch commands.',
      ],
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    sound.playTerminalKey();
    const timestamp = new Date().toLocaleTimeString();
    let response: string | string[] = '';
    let isError = false;

    switch (cmd) {
      case 'help':
        response = [
          'AVAILABLE SUB-ROUTINES:',
          '  about       - Transmit developer bio and active focus',
          '  projects    - List all archived digital constructs & specs',
          '  skills      - Query active core ability matrix',
          '  education   - Review academic dossier and credentials',
          '  contact     - Display secure comms channels & direct email',
          '  gta6        - Trigger Vice City protocol Easter egg',
          '  clear       - Wipe terminal buffer history',
          '  exit        - Terminate active terminal session',
        ];
        break;
      case 'about':
        response = [
          `NAME: ${PERSONAL_INFO.name}`,
          `SPECIALIZATION: ${PERSONAL_INFO.role} | ${PERSONAL_INFO.subRole}`,
          `LOCATION: ${PERSONAL_INFO.location}`,
          `MISSION: ${PERSONAL_INFO.tagline}`,
        ];
        break;
      case 'projects':
        response = PROJECTS_DATA.map(
          (p) => `[${p.number}] ${p.title} (${p.category}) -> ${p.techStack.join(', ')}`
        );
        break;
      case 'skills':
        response = SKILL_CATEGORIES.flatMap((cat) => [
          `--- ${cat.title} ---`,
          ...cat.skills.map((s) => `  * ${s.name} (${s.level}%): ${s.note || ''}`),
        ]);
        break;
      case 'education':
        response = [
          'PADRE CONCEICAO COLLEGE OF ENGINEERING (2016-2020)',
          '  Degree: Bachelor of Engineering in Information Technology',
          '  Honors: First Class',
          'SHREE DAMODAR HIGHER SECONDARY (2014-2016)',
          '  Specialization: Vocational Science & Mathematics',
        ];
        break;
      case 'contact':
        response = [
          `EMAIL: ${PERSONAL_INFO.email}`,
          `PHONE: ${PERSONAL_INFO.phone}`,
          `GITHUB: ${PERSONAL_INFO.github}`,
          `LINKEDIN: ${PERSONAL_INFO.linkedin}`,
          'RESPONSE CYCLE: < 1 cycle',
        ];
        break;
      case 'gta6':
        response = [
          '🌴 VICE CITY TRANSMISSION RECEIVED 🌴',
          'PROTOCOL: LEONIDA STATE TELEMETRY ACTIVE',
          'TARGET DATE: 2026',
          'SUNSET GRADIENT // NEON DRIFT // HYPERDRIVE ENGAGED',
        ];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        isError = true;
        response = `Command not recognized: "${cmd}". Type "help" for available routines.`;
    }

    setHistory((prev) => [
      ...prev,
      { command: input, output: response, isError, timestamp },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="terminal-window"
        className="bg-[#050505] border border-white/20 w-full max-w-2xl h-[480px] flex flex-col shadow-[0_0_50px_rgba(255,0,110,0.2)] font-mono-code text-xs relative overflow-hidden"
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#0a0a0d] border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#FF006E]" />
            <span className="text-white font-bold text-[11px] tracking-wider">
              PROTOCOL_CLI // GANESH_PAWAR_OS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#FF006E] font-bold">
                <span className="text-[#e2b17a]">guest@nexus:~$</span>
                <span>{item.command}</span>
                <span className="text-[10px] text-white/40 ml-auto font-normal">{item.timestamp}</span>
              </div>
              <div className={item.isError ? 'text-rose-400 pl-4' : 'text-white/80 pl-4'}>
                {Array.isArray(item.output) ? (
                  item.output.map((line, lIdx) => <div key={lIdx}>{line}</div>)
                ) : (
                  <div>{item.output}</div>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="bg-[#0a0a0d] border-t border-white/10 p-3 flex items-center gap-2">
          <span className="text-[#e2b17a] font-bold">guest@nexus:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' for command list..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-white/30 font-mono-code"
          />
        </form>
      </div>
    </div>
  );
};
