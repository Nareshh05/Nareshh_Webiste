import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { resumeData } from '../data/resumeData';

const ResumeSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillTag = styled.span`
  display: inline-block;
  background: #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 0.25rem;
  font-size: 0.875rem;
`;

const Resume = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ResumeSection id="resume">
      <SectionTitle>Resume</SectionTitle>
      
      <Card
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <h3>Summary</h3>
        <p>{resumeData.summary}</p>
      </Card>

      <SectionTitle>Education</SectionTitle>
      <Grid>
        {resumeData.education.map((edu, index) => (
          <Card
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.score}</p>
            <p>{edu.period}</p>
          </Card>
        ))}
      </Grid>

      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {resumeData.projects.map((project, index) => (
          <Card
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Card>
        ))}
      </Grid>

      <SectionTitle>Technical Skills</SectionTitle>
      <Card
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        {resumeData.technicalSkills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </Card>

      <SectionTitle>Expertise</SectionTitle>
      <Card
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <ul>
          {resumeData.expertise.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card>

      <SectionTitle>Languages & Soft Skills</SectionTitle>
      <Grid>
        <Card
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <h3>Languages</h3>
          {resumeData.languages.map((lang, index) => (
            <SkillTag key={index}>{lang}</SkillTag>
          ))}
        </Card>
        <Card
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <h3>Soft Skills</h3>
          {resumeData.softSkills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </Card>
      </Grid>

      <SectionTitle>Interests</SectionTitle>
      <Card
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        {resumeData.interests.map((interest, index) => (
          <SkillTag key={index}>{interest}</SkillTag>
        ))}
      </Card>
    </ResumeSection>
  );
};

export default Resume;
