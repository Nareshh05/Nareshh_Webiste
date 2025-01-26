import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionContainer from './common/SectionContainer';

const BackgroundGradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(var(--primary-rgb), 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
`;

const ContentSection = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: var(--fz-heading);
  margin-bottom: 2rem;
  color: var(--lightest-slate);
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: var(--gradient-1);
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s ease-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const BioText = styled(motion.p)`
  color: var(--slate);
  font-size: var(--fz-lg);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const InterestsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const InterestItem = styled(motion.li)`
  color: var(--slate);
  font-size: var(--fz-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;

  &::before {
    content: '▹';
    color: var(--primary);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary);
    transform: translateY(-2px);

    &::before {
      transform: translateX(2px);
    }
  }
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.5;
`;

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Cloud Computing",
    "Open Source",
    "Problem Solving",
    "Tech Innovation",
    "Continuous Learning"
  ];

  return (
    <SectionContainer id="about">
      <BackgroundGradient />
      {particles.map((particle, i) => (
        <FloatingParticle
          key={i}
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            y: [particle.y + '%', particle.y - 20 + '%', particle.y + '%'],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      <ContentSection
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ opacity, scale }}
      >
        <SectionTitle
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          About Me
        </SectionTitle>
        
        <BioText
          variants={itemVariants}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Hello! I'm a passionate software engineer with a focus on AI & ML development. 
          My journey in tech began with a curiosity about how things work, which evolved into a deep love for creating innovative solutions.
        </BioText>
        
        <BioText
          variants={itemVariants}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Currently, I'm working at <HighlightText>Excelacom Technologies</HighlightText>, where I develop scalable machine learning solutions 
          and work on cutting-edge AI applications. I'm particularly interested in natural language processing and computer vision.
        </BioText>

        <InterestsList variants={containerVariants}>
          {interests.map((interest, index) => (
            <InterestItem
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                x: 10,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              {interest}
            </InterestItem>
          ))}
        </InterestsList>
      </ContentSection>
    </SectionContainer>
  );
};

export default About;
