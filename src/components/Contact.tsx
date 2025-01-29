import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionContainer from './common/SectionContainer';

const ContactSection = styled(motion.section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  color: var(--lightest-slate);
  font-size: var(--fz-sm);
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: var(--border-radius);
  background: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 5px var(--primary);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: var(--border-radius);
  background: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  min-height: 150px;
  resize: vertical;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 5px var(--primary);
  }
`;

const SubmitButton = styled(motion.button)`
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  padding: 1rem 2rem;
  font-size: var(--fz-md);
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1rem;

  &:hover {
    background: var(--primary);
    color: var(--navy);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  color: var(--primary);
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: rgba(100, 255, 218, 0.1);
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form will be handled by Netlify automatically
    // We just need to show a success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <SectionContainer id="contact">
      <ContactSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Get In Touch</h2>
        {!isSubmitted ? (
          <ContactForm
            onSubmit={handleSubmit}
            data-netlify="true"
            name="contact"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                required
                placeholder="Your message..."
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        ) : (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Thanks for your message! I'll get back to you soon.
          </SuccessMessage>
        )}
      </ContactSection>
    </SectionContainer>
  );
};

export default Contact;
