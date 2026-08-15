import React from 'react';
import { motion } from 'motion/react';

interface MotionTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const MotionText: React.FC<MotionTextProps> = ({ text, className = '', delay = 0 }) => {
  // Split text into characters
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      }
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
