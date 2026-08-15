import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', intensity = 15 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Reset rotation when not hovered
  useEffect(() => {
    if (!isHovered) {
      setRotateX(0);
      setRotateY(0);
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Convert mouse position to rotation angles
    // Higher intensity = more tilt
    const maxRotation = intensity; 
    const rX = -(mouseY / (box.height / 2)) * maxRotation;
    const rY = (mouseX / (box.width / 2)) * maxRotation;

    setRotateX(rX);
    setRotateY(rY);
  };

  return (
    <div
      className={`perspective-1000 ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="w-full h-full transition-all ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
          transitionDuration: isHovered ? '50ms' : '500ms', // snappy on hover, smooth on leave
        }}
      >
        {/* Inner container to ensure children pop out in 3D */}
        <div style={{ transform: 'translateZ(20px)' }} className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
