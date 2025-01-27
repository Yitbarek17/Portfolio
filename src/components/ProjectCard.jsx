import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, technologies, link, darkMode }) => {
  const [likes, setLikes] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className={`h-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'transform 0.3s ease'
        }}
      >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h4>{title}</h4>
            <button 
              onClick={() => setLikes(prev => prev + 1)}
              className={`btn btn-link p-0 ${darkMode ? 'text-light' : 'text-dark'}`}
              style={{ transition: 'all 0.3s ease' }}
            >
              <FontAwesomeIcon 
                icon={faHeart} 
                className={likes > 0 ? 'text-danger' : ''} 
                style={{ 
                  transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              />
              <span className="ms-2">{likes}</span>
            </button>
          </Card.Title>
          <Card.Text className="my-3">{description}</Card.Text>
          <div className="mb-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                bg={darkMode ? 'light' : 'dark'} 
                text={darkMode ? 'dark' : 'light'}
                className="me-2 mb-2"
                style={{ 
                  padding: '0.5em 1em',
                  borderRadius: '20px'
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} w-100`}
            style={{
              transition: 'all 0.3s ease',
              transform: isHovered ? 'translateY(0)' : 'translateY(5px)',
              opacity: isHovered ? 1 : 0.9
            }}
          >
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
          </a>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;