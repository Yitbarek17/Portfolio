import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { motion } from "framer-motion";

const Projects = ({ darkMode }) => {
  const [repos, setRepos] = useState([]);

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

  return (
    <div
      className={`min-vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Heading */}
          <h2 className="text-center display-4 fw-bold mb-5">My Projects</h2>

          {/* Projects Grid with Staggered Layout */}
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
    </div>
  );
};

export default Projects;
