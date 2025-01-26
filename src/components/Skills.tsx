import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionContainer from './common/SectionContainer';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const SkillCategory = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--glass-shadow);
    border-color: var(--primary);
  }
`;

const CategoryTitle = styled(motion.h3)`
  color: var(--lightest-slate);
  font-size: var(--fz-xl);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: var(--gradient-1);
    border-radius: 50%;
  }
`;

const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillItem = styled(motion.li)`
  color: var(--slate);
  font-size: var(--fz-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▹';
    color: var(--primary);
  }
`;

const SkillBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  font-size: var(--fz-sm);
  color: var(--lightest-slate);
  margin: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gradient-1);
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
    border-color: transparent;
    color: var(--navy);
    transform: translateY(-2px);
  }
`;

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

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  const skillsData = {
    "Programming Languages": [
      "Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"
    ],
    "Web Technologies": [
      "React", "Node.js", "Express", "HTML5", "CSS3", "REST APIs"
    ],
    "AI & ML": [
      "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"
    ],
    "Tools & Platforms": [
      "Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"
    ]
  };

  return (
    <SectionContainer id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </SectionTitle>

      <SkillsGrid>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory
            key={category}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <CategoryTitle variants={itemVariants}>
              {category}
            </CategoryTitle>
            <SkillsList variants={containerVariants}>
              {skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>

      <motion.div
        style={{ 
          marginTop: "3rem", 
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem"
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Git", "CI/CD", "Agile", "RESTful APIs", "Microservices", "Cloud Computing", "System Design", "Testing"].map((badge) => (
          <SkillBadge
            key={badge}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {badge}
          </SkillBadge>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Skills;
