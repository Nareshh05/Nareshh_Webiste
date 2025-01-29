import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import BackgroundEffects from './components/BackgroundEffects';
import ParticleBackground from './components/ParticleBackground';
import Links from './components/Links';

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

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: var(--primary);
  font-size: 1.5rem;
`;

// Error boundary for individual components
class ComponentErrorBoundary extends React.Component<{
  children: React.ReactNode;
  componentName: string;
}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(`Error in ${this.props.componentName}:`, error);
  }

  render() {
    if (this.state.hasError) {
      return null; // Skip rendering this component if it errors
    }
    return this.props.children;
  }
}

// Wrap each component with error boundary
const SafeComponent: React.FC<{
  children: React.ReactNode;
  name: string;
}> = ({ children, name }) => (
  <ComponentErrorBoundary componentName={name}>
    <Suspense fallback={<LoadingFallback>Loading {name}...</LoadingFallback>}>
      {children}
    </Suspense>
  </ComponentErrorBoundary>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Allow initial render to complete
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      
      {/* Load essential UI first */}
      <SafeComponent name="Navigation">
        <Navigation />
      </SafeComponent>
      <MainContent>
        <SafeComponent name="Hero">
          <Hero />
        </SafeComponent>
        
        {/* Load remaining components after initial render */}
        {isLoaded && (
          <>
            <SafeComponent name="About">
              <About />
            </SafeComponent>
            <SafeComponent name="Experience">
              <Experience />
            </SafeComponent>
            <SafeComponent name="Projects">
              <Projects />
            </SafeComponent>
            <SafeComponent name="Skills">
              <Skills />
            </SafeComponent>
            <SafeComponent name="Contact">
              <Contact />
            </SafeComponent>
            <SafeComponent name="Links">
              <Links />
            </SafeComponent>
          </>
        )}
      </MainContent>

      {/* Load background effects last */}
      {isLoaded && (
        <>
          <SafeComponent name="BackgroundEffects">
            <BackgroundEffects />
          </SafeComponent>
          <SafeComponent name="ParticleBackground">
            <ParticleBackground />
          </SafeComponent>
        </>
      )}
    </AppContainer>
  );
}

export default App;
