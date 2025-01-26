import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionContainer from './common/SectionContainer';

const SectionTitle = styled(motion.h2)`
  font-size: var(--fz-heading);
  margin-bottom: 3rem;
  text-align: center;
  color: var(--lightest-slate);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: var(--gradient-1);
    margin: 1rem auto 0;
    border-radius: 1px;
  }
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--primary),
      transparent
    );
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4rem;
  position: relative;
  
  &:nth-child(odd) {
    justify-content: flex-start;
    padding-right: 50%;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 50px;
    }
  }
  
  &:nth-child(even) {
    justify-content: flex-end;
    padding-left: 50%;
    
    @media (max-width: 768px) {
      padding-left: 50px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled(motion.div)`
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 12px;
  }
`;

const ExperienceContent = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  position: relative;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.03) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--glass-shadow);
    border-color: var(--primary);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const CompanyName = styled.h3`
  color: var(--primary);
  font-size: var(--fz-lg);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const JobTitle = styled.h4`
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: var(--light-slate);
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--slate);
  font-size: var(--fz-md);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled(motion.span)`
  color: var(--light-slate);
  font-size: var(--fz-sm);
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
`;

const Experience = () => {
  const experiences = [
    {
      company: "Excelacom Technologies",
      title: "AI & ML Intern",
      duration: "Oct 2024 - Present",
      description: "Working on cutting-edge AI & ML projects, focusing on natural language processing and computer vision applications. Contributing to the development of scalable machine learning solutions.",
      tech: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "FastAPI"]
    },
    {
      company: "Previous Company",
      title: "Junior Developer",
      duration: "2021 - 2023",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      tech: ["React", "Node.js", "TypeScript", "MongoDB", "Express"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.1
      }
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <SectionContainer id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9]
        }}
      >
        Work Experience
      </SectionTitle>

      <TimelineContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} variants={cardVariants}>
              <TimelineDot variants={dotVariants} />
              <ExperienceContent>
                <CompanyName>{exp.company}</CompanyName>
                <JobTitle>{exp.title}</JobTitle>
                <Duration>{exp.duration}</Duration>
                <Description>{exp.description}</Description>
                <TechStack>
                  {exp.tech.map((tech, techIndex) => (
                    <TechTag
                      key={techIndex}
                      variants={techVariants}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </ExperienceContent>
            </ExperienceCard>
          ))}
        </motion.div>
      </TimelineContainer>
    </SectionContainer>
  );
};

export default Experience;
