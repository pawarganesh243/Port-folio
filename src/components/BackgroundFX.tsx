import React, { useEffect, useRef } from 'react';

export const BackgroundFX: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle cyber dust
    const particlesCount = 35;
    const particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number }[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        speedY: (Math.random() - 0.5) * 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render faint particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 110, 165, ${p.opacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background ambient radial glow matching Sophisticated Dark specification */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #3d142b 0%, #050505 70%)',
        }}
      />
      
      {/* Top right #FF006E neon glow orb */}
      <div 
        className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[#FF006E] opacity-10 blur-[120px] rounded-full pointer-events-none"
      />
      
      {/* Bottom left #00F5D4 subtle cyan glow orb */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-[#00F5D4] opacity-5 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Top ambient bleed */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#FF006E] opacity-[0.07] blur-[150px] rounded-full pointer-events-none"
      />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />

      {/* Subtle Scanlines overlay */}
      <div className="absolute inset-0 bg-scanlines opacity-30 mix-blend-overlay" />

      {/* Interactive canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
