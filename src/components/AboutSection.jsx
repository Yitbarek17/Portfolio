import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutSection = ({ darkMode }) => {
  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="position-relative"
            >
              <img
                src="src/assets/diddy.jfif" // Replace with your new image path
                alt="Yitbarek Daniel"
                className="img-fluid rounded-3 shadow"
                style={{ zIndex: 1 }}
              />
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="ps-lg-5"
            >
              <h2 className="display-4 mb-4 fw-bold">About Me</h2>
              <p className="lead mb-4" style={{ lineHeight: "1.8" }}>
                Hi, I'm <span className="text-primary">Yitbarek Daniel</span>
              </p>
              <p className="lead mb-4" style={{ lineHeight: "1.8" }}>
                A beginner in the field of web development and on a journey to
                become a fullstack developer.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
