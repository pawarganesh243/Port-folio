import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CyberPet: React.FC = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [lookDirection, setLookDirection] = useState<'left' | 'right' | 'center'>('center');

  useEffect(() => {
    // Random blinking logic
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150); // fast blink
      
      // Sometimes double blink
      if (Math.random() > 0.7) {
        setTimeout(() => {
          setIsBlinking(true);
          setTimeout(() => setIsBlinking(false), 150);
        }, 300);
      }
    }, 3500);

    // Random looking around logic
    const lookInterval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.3) setLookDirection('left');
      else if (rand > 0.7) setLookDirection('right');
      else setLookDirection('center');
    }, 2500);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(lookInterval);
    };
  }, []);

  const eyeTranslateX = lookDirection === 'left' ? -4 : lookDirection === 'right' ? 4 : 0;

  return (
    <div className="relative w-32 h-32 flex flex-col items-center justify-center pointer-events-none">
      {/* Holographic grid background for the pet face */}
      <div className="absolute inset-0 border border-[#FF006E]/20 bg-[#FF006E]/5 rounded-xl shadow-[inset_0_0_20px_rgba(255,0,110,0.2)] overflow-hidden">
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-scanlines-pink opacity-50 mix-blend-overlay pointer-events-none" />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center gap-3"
        animate={{ y: [0, -4, 0] }} // Gentle floating hover
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {/* Eyes Container */}
        <div className="flex gap-6">
          {/* Left Eye */}
          <motion.div 
            className="w-4 h-6 bg-[#FF006E] shadow-[0_0_15px_#FF006E]"
            animate={{ 
              scaleY: isBlinking ? 0.1 : 1,
              x: eyeTranslateX
            }}
            transition={{ duration: 0.1 }}
          />
          {/* Right Eye */}
          <motion.div 
            className="w-4 h-6 bg-[#FF006E] shadow-[0_0_15px_#FF006E]"
            animate={{ 
              scaleY: isBlinking ? 0.1 : 1,
              x: eyeTranslateX
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Mouth (pixel style) */}
        <div className="flex gap-1 mt-1">
          <div className="w-2 h-2 bg-[#FF006E] shadow-[0_0_10px_#FF006E] opacity-80" />
          <div className="w-6 h-2 bg-[#FF006E] shadow-[0_0_10px_#FF006E] translate-y-1 opacity-80" />
          <div className="w-2 h-2 bg-[#FF006E] shadow-[0_0_10px_#FF006E] opacity-80" />
        </div>
      </motion.div>

      {/* Decorative HUD Elements around pet */}
      <div className="absolute -top-2 left-2 text-[8px] font-mono-code text-[#FF006E]/60">AI_ENTITY_01</div>
      <div className="absolute -bottom-2 right-2 flex gap-1">
        <div className="w-1 h-1 bg-[#00F5D4] animate-pulse" />
        <div className="w-1 h-1 bg-[#00F5D4] animate-pulse delay-75" />
        <div className="w-1 h-1 bg-[#00F5D4] animate-pulse delay-150" />
      </div>
    </div>
  );
};
