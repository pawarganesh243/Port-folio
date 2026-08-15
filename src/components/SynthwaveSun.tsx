import React from 'react';
import { motion } from 'motion/react';

export const SynthwaveSun: React.FC = () => {
  return (
    <div className="relative w-32 h-32 flex flex-col items-center justify-center pointer-events-none">
      <motion.div 
        className="relative w-full h-full overflow-hidden rounded-full shadow-[0_0_50px_rgba(255,0,110,0.7)]"
        animate={{ y: [0, -6, 0] }} // Gentle float
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        {/* Core Sun Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF006E] via-[#FF006E] to-[#e2b17a] saturate-150" />
        
        {/* Synthwave horizontal cuts */}
        <div className="absolute inset-0 flex flex-col justify-end pb-1">
          <div className="w-full h-[1px] bg-[#050505] mb-[2px]" />
          <div className="w-full h-[2px] bg-[#050505] mb-[3px]" />
          <div className="w-full h-[3px] bg-[#050505] mb-[4px]" />
          <div className="w-full h-[5px] bg-[#050505] mb-[5px]" />
          <div className="w-full h-[7px] bg-[#050505] mb-[6px]" />
          <div className="w-full h-[10px] bg-[#050505] mb-[6px]" />
          <div className="w-full h-[14px] bg-[#050505]" />
        </div>
        
        {/* Scanlines overlay to blend it with the tech HUD UI */}
        <div className="absolute inset-0 bg-scanlines-pink opacity-40 mix-blend-overlay" />
      </motion.div>

      {/* Decorative HUD Elements */}
      <div className="absolute -top-3 right-0 text-[8px] font-mono-code text-[#e2b17a] tracking-widest uppercase shadow-[#e2b17a]">
        VICE_CITY_OS
      </div>
      <div className="absolute -bottom-3 left-2 flex gap-1 items-center">
        <div className="w-2 h-1 bg-[#e2b17a] shadow-[0_0_5px_#e2b17a] animate-pulse" />
        <div className="w-6 h-1 bg-[#FF006E] shadow-[0_0_5px_#FF006E] animate-pulse delay-75" />
      </div>
    </div>
  );
};
