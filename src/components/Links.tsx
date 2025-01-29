import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const LinksContainer = styled.div`
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

const LinksList = styled.ul`
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

const LinkItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const LinkAnchor = styled.a`
  padding: 10px;
  display: inline-block;
  color: var(--light-slate);
  font-size: 20px;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const Links: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nareshkumar-h',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nareshkumarh',
      icon: <FaLinkedin />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nareshkumarh_',
      icon: <FaTwitter />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/nareshkumarh_',
      icon: <FaInstagram />,
    },
  ];

  return (
    <LinksContainer>
      <LinksList>
        {socialLinks.map(({ name, url, icon }) => (
          <LinkItem key={name}>
            <LinkAnchor
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {icon}
            </LinkAnchor>
          </LinkItem>
        ))}
      </LinksList>
    </LinksContainer>
  );
};

export default Links;
