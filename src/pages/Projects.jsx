import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = ({ darkMode }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/israelseleshi/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5">My Projects</h2>
          <Row>
            {repos.map((repo) => (
              <Col key={repo.id} md={6} lg={4} className="mb-4">
                <ProjectCard
                  title={repo.name}
                  description={repo.description || 'No description available'}
                  technologies={[repo.language || 'Not specified']}
                  link={repo.html_url}
                  darkMode={darkMode}
                />
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Projects;