import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutSection from '../components/AboutSection';
import SkillCard from '../components/SkillCard';
import TestimonialCard from '../components/TestimonialCard';
import { motion } from 'framer-motion';

const Home = ({ darkMode }) => {
  const skills = [
    { title: 'HTML', proficiency: 90 },
    { title: 'CSS', proficiency: 85 },
    { title: 'JavaScript', proficiency: 75 },
    { title: 'Python', proficiency: 80 },
    { title: 'SQL', proficiency: 85 },
    { title: 'C++', proficiency: 75 }
  ];

  const testimonials = [
    {
      name: 'Abebe Kebede',
      role: 'Tech Lead',
      quote: 'Israel is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.'
    },
    {
      name: 'Tigist Haile',
      role: 'Project Manager',
      quote: 'Working with Israel has been a pleasure. He brings both technical expertise and creative solutions to every project.'
    },
    {
      name: 'Dawit Mekonnen',
      role: 'Senior Developer',
      quote: 'Israel\'s dedication to clean code and best practices makes him an invaluable team member. His work consistently exceeds expectations.'
    }
  ];

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container className="py-5">
          <Row className="align-items-center min-vh-100">
            <Col md={12} className="text-center">
              <h1 className="display-2 fw-bold mb-4">Israel Theodros</h1>
              <p className="lead mb-4">Information Systems Student | Aspiring Developer | Passionate About Clean Code</p>
            </Col>
          </Row>
        </Container>

        <AboutSection darkMode={darkMode} />

        <Container className="py-5">
          <h2 className="text-center mb-5">Skills</h2>
          <Row>
            {skills.map((skill, index) => (
              <Col key={index} md={4} className="mb-4">
                <SkillCard {...skill} darkMode={darkMode} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="py-5">
          <h2 className="text-center mb-5">Testimonials</h2>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col key={index} md={4} className="mb-4">
                <TestimonialCard {...testimonial} darkMode={darkMode} />
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default Home;