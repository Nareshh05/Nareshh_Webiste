import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const GradientOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  background: var(--gradient-1);
  mix-blend-mode: normal;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--primary);
  border-radius: 50%;
`;

const GlowingLine = styled(motion.div)`
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary),
    transparent
  );
  opacity: 0.2;
`;

const BackgroundEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const particles: HTMLDivElement[] = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 3}px;
          height: ${Math.random() * 3}px;
          background: rgba(100, 255, 218, ${Math.random() * 0.5});
          border-radius: 50%;
          top: ${Math.random() * 100}vh;
          left: ${Math.random() * 100}vw;
          pointer-events: none;
          opacity: ${Math.random()};
        `;
        container.appendChild(particle);
        particles.push(particle);

        const animation = particle.animate(
          [
            {
              transform: `translate(0, 0) rotate(0deg)`,
              opacity: Math.random(),
            },
            {
              transform: `translate(${Math.random() * 200 - 100}px, ${
                Math.random() * 200 - 100
              }px) rotate(${Math.random() * 360}deg)`,
              opacity: 0,
            },
          ],
          {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
          }
        );
      }

      return () => {
        particles.forEach((particle) => particle.remove());
      };
    };

    const cleanup = createParticles();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <BackgroundContainer ref={containerRef}>
      {/* Gradient Orbs */}
      <GradientOrb
        initial={{ scale: 0.8, x: "10%", y: "10%" }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          x: ["10%", "60%", "10%"],
          y: ["10%", "40%", "10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: "40vw",
          height: "40vw",
          background: "linear-gradient(45deg, var(--primary), var(--green))",
        }}
      />
      <GradientOrb
        initial={{ scale: 1, x: "70%", y: "60%" }}
        animate={{
          scale: [1, 1.5, 1],
          x: ["70%", "30%", "70%"],
          y: ["60%", "20%", "60%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: "35vw",
          height: "35vw",
          background: "linear-gradient(-45deg, var(--primary), var(--navy))",
        }}
      />

      {/* Glowing Lines */}
      {[...Array(5)].map((_, i) => (
        <GlowingLine
          key={i}
          initial={{ 
            width: "0%",
            left: "50%",
            top: `${15 + i * 20}%`,
            opacity: 0 
          }}
          animate={{ 
            width: ["0%", "100%", "0%"],
            left: ["50%", "0%", "50%"],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default BackgroundEffects;
