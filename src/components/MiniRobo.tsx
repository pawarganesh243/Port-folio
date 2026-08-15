import React from 'react';
import { motion } from 'motion/react';

export const MiniRobo: React.FC = () => {
  return (
    <div className="relative w-24 h-24 hidden sm:flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Main Body (Sleek Sci-Fi Drone) */}
        <div className="w-16 h-12 bg-[#0a0a0d] border border-[#00F5D4]/80 rounded-full shadow-[0_0_15px_rgba(0,245,212,0.4)] flex items-center justify-center relative overflow-hidden z-10">
          {/* Glass/Scanline reflection */}
          <div className="absolute inset-0 bg-scanlines-pink opacity-20 pointer-events-none" />
          <div className="absolute top-1 left-2 w-4 h-1 bg-white/20 rounded-full rotate-[-15deg]" />
          
          {/* Scanning Eye Array */}
          <motion.div 
            className="w-10 h-3 bg-black rounded-full flex items-center shadow-[inset_0_0_5px_rgba(0,0,0,1)] relative overflow-hidden"
            animate={{ scaleY: [1, 0.1, 1] }} // Fast blink effect
            transition={{ repeat: Infinity, duration: 5, times: [0, 0.02, 0.04] }}
          >
            {/* The glowing red scanner bouncing left and right */}
            <motion.div 
              className="w-3 h-full bg-[#FF006E] shadow-[0_0_8px_#FF006E] rounded-full absolute" 
              animate={{ left: ['0%', '70%', '0%'] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Floating stabilizers / Antennas */}
        <motion.div 
          className="absolute -left-3 top-5 w-4 h-1 bg-[#00F5D4] shadow-[0_0_5px_#00F5D4] rounded-sm z-0"
          animate={{ rotate: [0, 15, 0], y: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div 
          className="absolute -right-3 top-5 w-4 h-1 bg-[#00F5D4] shadow-[0_0_5px_#00F5D4] rounded-sm z-0"
          animate={{ rotate: [0, -15, 0], y: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Jet Thruster Flame */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-0">
          <motion.div 
            className="w-4 bg-[#00F5D4] rounded-b-full blur-[2px] opacity-80"
            animate={{ height: [12, 20, 12], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 0.1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};
