import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionContainer from './common/SectionContainer';

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: var(--glass-shadow);
  }
`;

const ProjectTitle = styled.h3`
  color: var(--lightest-slate);
  font-size: var(--fz-xxl);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--light-slate);
  font-size: var(--fz-md);
  line-height: 1.5;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  list-style: none;
  padding: 0;

  li {
    color: var(--primary);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);

    &:hover {
      color: var(--primary);
    }
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React, TypeScript, and Styled Components. Features smooth animations and a responsive design.',
      tech: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      external: 'https://yourportfolio.com',
    },
    {
      title: "Hate Speech Detection",
      description: "Developed an advanced NLP model to detect and classify hate speech in social media content. Implemented using BERT and achieved 92% accuracy.",
      tech: ["Python", "PyTorch", "Transformers", "FastAPI", "React"],
      github: "https://github.com/yourusername/hate-speech-detection",
      external: "https://hate-speech-demo.yourdomain.com"
    },
    {
      title: "AI Image Generator",
      description: "Created a web application that generates unique images from text descriptions using OpenAI's DALL-E API.",
      tech: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
      github: "https://github.com/yourusername/ai-image-generator",
      external: "https://ai-image-gen.yourdomain.com"
    },
    {
      title: "Modern Portfolio",
      description: "A modern, responsive portfolio website built with React and styled-components, featuring glass morphism and smooth animations.",
      tech: ["React", "TypeScript", "Styled Components", "Framer Motion"],
      github: "https://github.com/yourusername/modern-portfolio",
      external: "https://portfolio.yourdomain.com"
    },
    {
      title: "E-Commerce Website",
      description: "A online platform facilitating buying and selling. The system ensures a user-friendly interface for customers to browse, purchase, and manage accounts. Sellers benefit from an admin panel for inventory management, order processing, and sales tracking.",
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/nareshkumar20',
    },
    {
      title: 'Malicious Mobile App Analysis',
      description: 'Web app to detect and analyze malicious mobile applications, utilizing algorithms and tools to identify suspicious behavior, analyze code patterns, and provide insights into potential security threats using ML. Participated in Smart India Hackathon 2023.',
      tech: ['Python', 'Machine Learning', 'Web Development'],
      github: 'https://github.com/nareshkumar20',
    },
    {
      title: 'Course Compass',
      description: 'An app that works using generative AI to get information on the topic you search for, while suggesting courses to learn that specific topic.',
      tech: ['React', 'AI/ML', 'Node.js'],
      github: 'https://github.com/nareshkumar20',
    },
    {
      title: 'Epidemic Spread Simulator',
      description: 'Created a computational model to simulate infectious disease spread, analyze epidemic dynamics, study intervention strategies, and predict potential outcomes using ML.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/nareshkumar20',
    },
    {
      title: 'Random Quote Generator',
      description: 'A React app that generates random quotes and helps the client to tweet them.',
      tech: ['React', 'Twitter API', 'CSS'],
      github: 'https://github.com/nareshkumar20',
    },
    {
      title: 'Flight Management System',
      description: 'A console Application that is used to view the passengers and airline details about a Airline Company.',
      tech: ['Java', 'Database Management'],
      github: 'https://github.com/nareshkumar20',
    }
  ];

  return (
    <SectionContainer id="projects">
      <h2 className="section-heading">Some Things I've Built</h2>
      <ProjectsGrid
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </TechList>
            <Links>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
              )}
              {project.external && (
                <a href={project.external} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                </a>
              )}
            </Links>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Projects;
