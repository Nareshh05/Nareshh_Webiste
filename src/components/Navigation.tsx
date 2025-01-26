import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(motion.a)`
  color: var(--primary);
  font-family: var(--font-mono);
  font-size: var(--fz-xl);
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 5px 10px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--border-radius);
    padding: 2px;
    background: linear-gradient(45deg, var(--primary), transparent);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  
  &:hover {
    color: var(--primary-light);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: var(--slate);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  padding: 10px;
  
  span {
    color: var(--primary);
    margin-right: 5px;
  }
  
  &:hover {
    color: var(--primary);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  padding: 10px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--navy);
  padding: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(motion.a)`
  display: block;
  color: var(--slate);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--fz-lg);
  padding: 15px;
  text-align: center;
  
  span {
    color: var(--primary);
    margin-right: 5px;
  }
  
  &:hover {
    color: var(--primary);
    background: var(--light-navy);
  }
`;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      y: -3,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      y: 0
    }
  };

  const navItems = [
    { number: '01.', name: 'About', href: '#about' },
    { number: '02.', name: 'Experience', href: '#experience' },
    { number: '03.', name: 'Projects', href: '#projects' },
    { number: '04.', name: 'Skills', href: '#skills' },
    { number: '05.', name: 'Contact', href: '#contact' },
  ];

  return (
    <NavContainer
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none'
      }}
    >
      <NavContent>
        <Logo
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          NK
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>{item.number}</span>
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
        </MobileMenuButton>
      </NavContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.number}</span>
                {item.name}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navigation;
