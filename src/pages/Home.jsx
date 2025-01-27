import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";
import TestimonialCard from "../components/TestimonialCard";
import { motion } from "framer-motion";

const Home = ({ darkMode }) => {
  const skills = [
    { title: "HTML", proficiency: 60 },
    { title: "CSS", proficiency: 45 },
    { title: "JavaScript", proficiency: 20 },
    { title: "SQL", proficiency: 73 },
    { title: "C++", proficiency: 54 },
  ];

  const testimonials = [
    {
      name: "Trump",
      role: "Software Engineer",
      quote: "Yitbarek is a quick learner and a great team player.",
    },
    {
      name: "Chris Paul",
      role: "UI/UX Designer",
      quote:
        "Working with Yitbarek is always a pleasure. He’s very detail-oriented.",
    },
    {
      name: "Mike Tyson",
      role: "Project Manager",
      quote: "Yitbarek’s dedication to his work is truly inspiring.",
    },
  ];
  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          fluid
          className="py-5 d-flex align-items-center justify-content-center"
        >
          <Row className="text-center">
            <Col md={12}>
              <motion.h1
                className="display-2 fw-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Yitbarek Daniel
              </motion.h1>
              <motion.p
                className="lead mb-4 fs-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Information Systems Student | Emerging Software Engineer | web
                developer
              </motion.p>
            </Col>
          </Row>
        </Container>
        <AboutSection darkMode={darkMode} />

        <Container fluid className="py-5">
          <h2 className="text-center mb-5">Skills</h2>
          <Row className="justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} md={4} lg={3} className="mb-4">
                <SkillCard {...skill} darkMode={darkMode} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container fluid className="py-5">
          <h2 className="text-center mb-5">Testimonials</h2>
          <Row className="justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col key={index} md={4} lg={3} className="mb-4">
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
