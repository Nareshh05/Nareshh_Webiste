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
    border-color: var(--primary);
    box-shadow: var(--glass-shadow);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const ProjectTitle = styled(motion.h3)`
  color: var(--lightest-slate);
  font-size: var(--fz-xl);
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDescription = styled(motion.p)`
  color: var(--slate);
  font-size: var(--fz-md);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
  list-style: none;
  padding: 0;
`;

const TechItem = styled(motion.li)`
  color: var(--light-slate);
  font-size: var(--fz-sm);
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const IconLink = styled(motion.a)`
  color: var(--light-slate);
  font-size: var(--fz-xl);
  
  &:hover {
    color: var(--primary);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Hate Speech Detection",
      description: "Developed an advanced NLP model to detect and classify hate speech in social media content. Implemented using BERT and achieved 92% accuracy.",
      tech: ["Python", "PyTorch", "Transformers", "FastAPI", "React"],
      github: "https://github.com/yourusername/hate-speech-detection",
      live: "https://hate-speech-demo.yourdomain.com"
    },
    {
      title: "AI Image Generator",
      description: "Created a web application that generates unique images from text descriptions using OpenAI's DALL-E API.",
      tech: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
      github: "https://github.com/yourusername/ai-image-generator",
      live: "https://ai-image-gen.yourdomain.com"
    },
    {
      title: "Modern Portfolio",
      description: "A modern, responsive portfolio website built with React and styled-components, featuring glass morphism and smooth animations.",
      tech: ["React", "TypeScript", "Styled Components", "Framer Motion"],
      github: "https://github.com/yourusername/modern-portfolio",
      live: "https://portfolio.yourdomain.com"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
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
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <SectionContainer id="projects">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9]
        }}
      >
        Featured Projects
      </motion.h2>
      
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} variants={cardVariants}>
            <ProjectTitle variants={itemVariants}>
              {project.title}
            </ProjectTitle>
            <ProjectDescription variants={itemVariants}>
              {project.description}
            </ProjectDescription>
            <TechList variants={containerVariants}>
              {project.tech.map((tech, techIndex) => (
                <TechItem
                  key={techIndex}
                  variants={itemVariants}
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
                </TechItem>
              ))}
            </TechList>
            <Links>
              <IconLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
              </IconLink>
              {project.live && (
                <IconLink
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink />
                </IconLink>
              )}
            </Links>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Projects;
