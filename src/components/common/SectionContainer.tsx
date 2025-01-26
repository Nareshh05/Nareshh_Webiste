import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const StyledSection = styled(motion.section)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: radial-gradient(
      circle at center,
      var(--glass-bg) 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--lightest-navy),
      transparent
    );
    bottom: 0;
    left: 10%;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2
    }
  }
};

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  children,
  className 
}) => {
  return (
    <StyledSection
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <ContentWrapper variants={sectionVariants}>
        {children}
      </ContentWrapper>
    </StyledSection>
  );
};

export default SectionContainer;
