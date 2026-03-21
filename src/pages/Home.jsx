import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import Contact from "./Contact";
import { motion } from "framer-motion";
import axios from "axios";

const Home = ({ darkMode }) => {
  const [repos, setRepos] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const skills = [
    { title: "HTML", proficiency: 60 },
    { title: "CSS", proficiency: 45 },
    { title: "JavaScript", proficiency: 20 },
    { title: "SQL", proficiency: 73 },
    { title: "C++", proficiency: 54 },
  ];

  const roles = [
    "Information Systems Student",
    "Emerging Software Engineer",
    "Web Developer",
    "Full Stack Enthusiast",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Yitbarek17/repos"
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepos();
  }, []);

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (isTyping) {
      if (typedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [typedText, isTyping, roleIndex, roles]);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      {/* Hero */}
      <section id="hero">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Container
            fluid
            className="py-5 d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <Row className="text-center">
              <Col md={12}>
                <motion.h1
                  className="display-1 fw-bold mb-4 gradient-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Yitbarek Daniel
                </motion.h1>
                <motion.div
                  className="lead mb-4 fs-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="gradient-text">{typedText}</span>
                  <span className="typing-cursor"></span>
                </motion.div>
                <motion.div
                  className="mt-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    className="btn btn-primary btn-lg px-5 py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View My Work
                  </motion.button>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </section>

      {/* About */}
      <section id="about">
        <AboutSection darkMode={darkMode} />
      </section>

      {/* Skills */}
      <section id="skills" className="py-5">
        <Container fluid>
          <motion.h2
            className="text-center mb-5 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>
          <Row className="justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} md={4} lg={3} className="mb-4">
                <SkillCard {...skill} darkMode={darkMode} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5">
        <Container fluid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-center display-4 fw-bold mb-5 gradient-text">Featured Projects</h2>
            <Row className="g-4">
              {repos.map((repo, index) => (
                <Col
                  key={repo.id}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.1 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard
                      title={repo.name}
                      description={repo.description || "No description available"}
                      technologies={[repo.language || "Not specified"]}
                      link={repo.html_url}
                      darkMode={darkMode}
                    />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>
    </div>
  );
};

export default Home;
