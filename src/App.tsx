import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import GlobalStyle from './styles/GlobalStyle';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import BackgroundEffects from './components/BackgroundEffects';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--navy);
  color: var(--slate);
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 150px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <BackgroundEffects />
      <ParticleBackground />
      <Navigation />
      <MainContent>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Profile />
        <Contact />
        <SocialLinks />
      </MainContent>
    </AppContainer>
  );
};

export default App;
