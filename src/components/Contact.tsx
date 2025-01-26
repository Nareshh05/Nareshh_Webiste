import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  margin: 0 0 20px;
  color: var(--lightest-slate);
`;

const Subtitle = styled.h3`
  font-size: var(--fz-md);
  color: var(--primary);
  font-family: var(--font-mono);
  font-weight: 400;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: var(--slate);
  font-size: var(--fz-lg);
  line-height: 1.6;
  margin-bottom: 50px;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 1.25rem 1.75rem;
  background: transparent;
  color: var(--primary);
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    background-color: var(--primary-tint);
    outline: none;
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Subtitle>What's Next?</Subtitle>
        <Title>Get In Touch</Title>
        <Description>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </Description>
        <ContactButton
          href="mailto:your.email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ y: 1 }}
        >
          Say Hello
        </ContactButton>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;
