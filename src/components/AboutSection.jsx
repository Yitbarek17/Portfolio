import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutSection = ({ darkMode }) => {
  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <Container>
        <Row className="align-items-center justify-content-center g-5">
          <Col lg={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="position-relative"
            >
              <div
                className="rounded-4 overflow-hidden"
                style={{
                  background: darkMode 
                    ? 'rgba(30, 41, 59, 0.6)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  padding: 0,
                }}
              >
                <img
                  src="/src/assets/gojo3.jpg"
                  alt="Yitbarek Daniel"
                  className="img-fluid w-100 h-100"
                  style={{ 
                    maxHeight: '400px',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-5 rounded-4"
              style={{
                background: darkMode 
                  ? 'rgba(30, 41, 59, 0.6)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              }}
            >
              <motion.h2 
                className="display-4 mb-4 fw-bold gradient-text"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <p className="lead mb-4" style={{ lineHeight: "1.8", opacity: 0.95 }}>
                Hi, I'm <span className="gradient-text fw-bold">Yitbarek Daniel</span>
              </p>
              <p className="lead mb-4" style={{ lineHeight: "1.8", opacity: 0.9 }}>
                A passionate Information Systems student and emerging software developer focused on building modern web applications. I'm constantly learning and exploring new technologies to create impactful digital experiences.
              </p>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="d-flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'Node.js', 'CSS', 'SQL'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-pill"
                      style={{
                        background: `linear-gradient(135deg, #3b82f6, #6366f1)`,
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
