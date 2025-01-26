import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;

  @media (max-width: 1080px) {
    left: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
`;

const SocialItem = styled(motion.li)`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const SocialLink = styled.a`
  padding: 10px;
  color: var(--light-slate);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    color: var(--primary);
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FiGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FiLinkedin />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FiTwitter />,
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <FiMail />,
    },
  ];

  return (
    <SocialContainer>
      <SocialList>
        {socialLinks.map(({ name, url, icon }, i) => (
          <SocialItem
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <SocialLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {icon}
            </SocialLink>
          </SocialItem>
        ))}
      </SocialList>
    </SocialContainer>
  );
};

export default SocialLinks;
