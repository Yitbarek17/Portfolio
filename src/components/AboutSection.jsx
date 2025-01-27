import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutSection = ({ darkMode }) => {
  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="position-relative"
            >
              <img 
                src="src\assets\prison break origami.jpg" 
                alt="Israel Theodros" 
                className="img-fluid rounded-3 position-relative"
                style={{ zIndex: 1 }}
              />
            </motion.div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pe-lg-5"
            >
            <h2 className="display-4 mb-4 fw-bold">About Me</h2>
            <p className="lead mb-4" style={{ lineHeight: '1.8' }}>
              Hi, I'm Israel Theodros, a third-year Information Systems student at Addis Ababa University with a strong passion for software development.
              Over the past couple of years, I’ve honed my skills in programming, databases, system analysis and design, and networking.
            </p>
            <p className="lead mb-4" style={{ lineHeight: '1.8' }}>
              With hands-on experience in these areas, I've developed a deep understanding of creating efficient, scalable solutions.
              I’m particularly focused on developing user-friendly interfaces and crafting maintainable code to solve real-world challenges.
            </p>

              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} me-3`}
                >
                  Download CV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-primary"
                >
                  View Projects
                </motion.button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
