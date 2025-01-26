import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../assets/naresh.jpeg';
import SectionContainer from './common/SectionContainer';

const HeroContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  padding-top: 70px;
`;

const GlowingBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(var(--primary-rgb), 0.15) 0%,
    transparent 60%
  );
  z-index: 0;
  pointer-events: none;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--primary);
  border-radius: 50%;
  filter: blur(1px);
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
`;

const SmallHeading = styled(motion.h3)`
  color: var(--primary);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;
  margin-bottom: 1rem;
`;

const MainHeading = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(
    to right,
    var(--lightest-slate) 0%,
    var(--primary) 50%,
    var(--lightest-slate) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 8s linear infinite;
  white-space: nowrap;
  overflow: visible;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

const SubHeading = styled(motion.h2)`
  font-size: clamp(30px, 6vw, 50px);
  font-weight: 500;
  line-height: 1.1;
  color: var(--slate);
  margin: 1rem 0;
`;

const Description = styled(motion.p)`
  max-width: 540px;
  color: var(--slate);
  font-size: var(--fz-lg);
  line-height: 1.6;
  margin: 2rem 0;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1.25rem 2rem;
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.5s ease;
    z-index: -1;
  }

  &:hover {
    color: var(--navy);
    
    &::before {
      transform: translateX(0) rotate(45deg);
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
`;

const ScrollDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 4rem;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }
`;

const LeftSection = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 1200px) {
    max-width: 100%;
    align-items: center;
  }
`;

const RightSection = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 1200px) {
    max-width: 100%;
    align-items: center;
  }
`;

const ProfileSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProfileCard = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  box-shadow: var(--glass-shadow);
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: var(--border-radius);
    padding: 1px;
    background: linear-gradient(
      45deg,
      var(--primary),
      transparent,
      var(--primary)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: var(--border-radius);
    background: linear-gradient(
      45deg,
      var(--primary),
      transparent 60%
    );
    opacity: 0.2;
    filter: blur(20px);
    transform: translateZ(0);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary);
    border-radius: var(--border-radius);
    top: 20px;
    left: 20px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::after {
    top: 15px;
    left: 15px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  filter: grayscale(20%);
  transition: all 0.3s ease;

  &:hover {
    filter: none;
    transform: translateY(-5px);
  }
`;

const ProfileInfo = styled(motion.div)`
  text-align: center;
  margin-top: 1.5rem;
`;

const ProfileName = styled(motion.h2)`
  font-size: var(--fz-heading);
  margin-bottom: 0.5rem;
  background: linear-gradient(
    to right,
    var(--lightest-slate),
    var(--primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  overflow: visible;
`;

const ProfileTitle = styled(motion.h3)`
  color: var(--slate);
  font-size: var(--fz-lg);
  margin-bottom: 1rem;
`;

const ProfileBio = styled(motion.p)`
  color: var(--light-slate);
  font-size: var(--fz-md);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--slate);
  font-size: var(--fz-xl);
  transition: all 0.2s ease;

  &:hover {
    color: var(--primary);
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <SectionContainer id="hero">
      <HeroContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, y, scale }}
      >
        <GlowingBackground 
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(var(--primary-rgb), 0.15) 0%, transparent 60%)`
          }}
        />
        
        {particles.map((particle, i) => (
          <FloatingParticle
            key={i}
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`,
              width: particle.size,
              height: particle.size
            }}
            animate={{
              y: [
                particle.y + '%',
                particle.y - 20 + '%',
                particle.y + '%'
              ],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}

        <HeroContent>
          <LeftSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ProfileCard
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <ImageContainer>
                <ProfileImage
                  src={profileImage}
                  alt="Naresh Kumar"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "grayscale(0%)",
                    transition: { 
                      type: "spring", 
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                />
              </ImageContainer>

              <ProfileInfo variants={itemVariants}>
                <ProfileName
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  Nareshhh A
                </ProfileName>
                <ProfileTitle variants={itemVariants}>
                  Software Engineer & AI Enthusiast
                </ProfileTitle>
                <ProfileBio variants={itemVariants}>
                  Passionate about creating innovative solutions using AI & ML.
                  Focused on building accessible and user-centered applications.
                </ProfileBio>
                <SocialLinks variants={itemVariants}>
                  <SocialLink 
                    href="https://github.com/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github"></i>
                  </SocialLink>
                  <SocialLink 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </SocialLink>
                  <SocialLink 
                    href="mailto:your.email@example.com"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-envelope"></i>
                  </SocialLink>
                </SocialLinks>
              </ProfileInfo>
            </ProfileCard>
          </LeftSection>

          <RightSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SmallHeading variants={itemVariants}>
              Hi, my name is
            </SmallHeading>

            <MainHeading
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Nareshhh A
            </MainHeading>

            <SubHeading
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              I build things for the web.
            </SubHeading>

            <Description variants={itemVariants}>
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered AI & ML solutions
              at Excelacom Technologies.
            </Description>

            <motion.div variants={itemVariants}>
              <CTAButton
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check out my work!
              </CTAButton>
            </motion.div>
          </RightSection>
        </HeroContent>

        <ScrollIndicator
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            scroll
          </motion.span>
          <ScrollDot
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </ScrollIndicator>
      </HeroContainer>
    </SectionContainer>
  );
};

export default Hero;
