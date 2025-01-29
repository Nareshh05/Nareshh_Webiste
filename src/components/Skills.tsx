import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionContainer from './common/SectionContainer';

const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  color: var(--lightest-slate);
  font-size: var(--fz-xl);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  ${SkillCategory}:hover &::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background: var(--primary);
    transition: height 0.3s ease;
  }

  &:hover {
    transform: translateX(5px);
    border-color: var(--primary);
    
    &::before {
      height: 100%;
    }
  }
`;

const SkillName = styled.h4`
  color: var(--lightest-slate);
  font-size: var(--fz-lg);
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.span`
  color: var(--primary);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
`;

const CertificationItem = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    
    &::after {
      width: 100%;
    }
  }
`;

const CertName = styled.h4`
  color: var(--lightest-slate);
  font-size: var(--fz-lg);
  margin-bottom: 0.5rem;
`;

const CertIssuer = styled.p`
  color: var(--light-slate);
  margin: 0.5rem 0;
`;

const CertDate = styled.span`
  color: var(--primary);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
`;

const Skills: React.FC = () => {
  const technicalSkills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'MongoDB',
    'Git',
    'Docker',
    'AWS',
    'GraphQL',
    'Redux'
  ];

  const areasOfInterest = [
    'Machine Learning',
    'Web Development',
    'Cloud Computing',
    'DevOps',
    'Data Science',
    'Artificial Intelligence',
    'System Design',
    'Blockchain'
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Tamil', level: 'Native' },
    { name: 'Hindi', level: 'Intermediate' },
    { name: 'Telugu', level: 'Basic' }
  ];

  const softSkills = [
    'Problem Solving',
    'Team Leadership',
    'Communication',
    'Project Management',
    'Agile Methodology',
    'Critical Thinking',
    'Time Management',
    'Adaptability'
  ];

  const certificates = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: 'Dec 2023'
    },
    {
      name: 'Full Stack Development',
      issuer: 'Meta',
      date: 'Nov 2023'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <SectionContainer id="skills">
      <h2 className="section-heading">Skills & Expertise</h2>
      
      <SkillsWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillCategory>
            <CategoryTitle>Technical Skills</CategoryTitle>
            <SkillGrid>
              {technicalSkills.map((skill, i) => (
                <SkillItem
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillGrid>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Areas of Interest</CategoryTitle>
            <SkillGrid>
              {areasOfInterest.map((area, i) => (
                <SkillItem
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <SkillName>{area}</SkillName>
                </SkillItem>
              ))}
            </SkillGrid>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Languages</CategoryTitle>
            <SkillGrid>
              {languages.map((lang, i) => (
                <SkillItem
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <SkillName>{lang.name}</SkillName>
                  <SkillLevel>{lang.level}</SkillLevel>
                </SkillItem>
              ))}
            </SkillGrid>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Soft Skills</CategoryTitle>
            <SkillGrid>
              {softSkills.map((skill, i) => (
                <SkillItem
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillGrid>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Certifications</CategoryTitle>
            <SkillGrid>
              {certificates.map((cert, i) => (
                <CertificationItem
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <CertName>{cert.name}</CertName>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                  <CertDate>{cert.date}</CertDate>
                </CertificationItem>
              ))}
            </SkillGrid>
          </SkillCategory>
        </motion.div>
      </SkillsWrapper>
    </SectionContainer>
  );
};

export default Skills;
