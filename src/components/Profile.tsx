import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ProfileSection = styled.section`
  padding: 100px 0;
  background: var(--navy);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--lightest-slate);
  margin-bottom: 50px;
  text-align: center;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Card = styled(motion.div)`
  background: var(--light-navy);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--green), var(--blue), var(--purple));
    background-size: 200% 100%;
    animation: gradient 3s linear infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const CardTitle = styled.h3`
  color: var(--green);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardContent = styled.div`
  color: var(--slate);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(motion.li)`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--slate);

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--green);
  }
`;

const Badge = styled(motion.span)`
  display: inline-block;
  background: var(--lightest-navy);
  color: var(--green);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--green);
    color: var(--navy);
    transform: translateY(-3px);
  }
`;

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <ProfileSection id="profile">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Profile
      </SectionTitle>

      <ProfileGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Certificates */}
        <Card
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle>Certificates</CardTitle>
          <CardContent>
            <List>
              {resumeData.certificates.map((cert, index) => (
                <ListItem
                  key={index}
                  variants={itemVariants}
                >
                  {cert}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle>Languages</CardTitle>
          <CardContent>
            {resumeData.languages.map((lang, index) => (
              <Badge
                key={index}
                variants={floatVariants}
                whileHover="hover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {lang}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Expertise */}
        <Card
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle>Area of Expertise</CardTitle>
          <CardContent>
            <List>
              {resumeData.expertise.map((exp, index) => (
                <ListItem
                  key={index}
                  variants={itemVariants}
                >
                  {exp}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle>Soft Skills</CardTitle>
          <CardContent>
            {resumeData.softSkills.map((skill, index) => (
              <Badge
                key={index}
                variants={floatVariants}
                whileHover="hover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Interests */}
        <Card
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle>Interests</CardTitle>
          <CardContent>
            {resumeData.interests.map((interest, index) => (
              <Badge
                key={index}
                variants={floatVariants}
                whileHover="hover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {interest}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </ProfileGrid>
    </ProfileSection>
  );
};

export default Profile;
