import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CounterContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--light-navy);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--lightest-navy);
  color: var(--lightest-slate);
  font-size: var(--fz-sm);
  box-shadow: var(--glass-shadow);
  backdrop-filter: blur(10px);
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    font-size: var(--fz-xs);
  }
`;

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/.netlify/functions/visitor-count');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <CounterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      👥 Visitors: {count}
    </CounterContainer>
  );
};

export default VisitorCounter;
