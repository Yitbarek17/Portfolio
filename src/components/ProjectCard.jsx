import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExternalLinkAlt, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, technologies, link, darkMode }) => {
  const [likes, setLikes] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card 
        className={`h-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(12px)',
          background: darkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
          border: `1px solid ${isHovered ? (darkMode ? 'rgba(59, 130, 246, 0.4)' : 'rgba(99, 102, 241, 0.3)') : (darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
          boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-center mb-3">
            <h4 className={`mb-0 ${darkMode ? 'text-light' : 'text-dark'}`} style={{ fontWeight: '600' }}>
              {title}
            </h4>
            <motion.button 
              onClick={() => setLikes(prev => prev + 1)}
              className={`btn btn-link p-0 ${darkMode ? 'text-light' : 'text-dark'}`}
              style={{ 
                transition: 'all 0.3s ease',
                border: 'none',
                background: 'none',
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon 
                icon={faHeart} 
                className={likes > 0 ? 'text-danger' : ''} 
                style={{ 
                  filter: 'none',
                  transition: 'all 0.3s ease',
                }}
              />
              <span className="ms-2" style={{ fontSize: '0.9rem', fontWeight: '500' }}>{likes}</span>
            </motion.button>
          </Card.Title>
          
          <Card.Text className={`mb-4 ${darkMode ? 'text-light' : 'text-dark'}`} style={{ 
            lineHeight: '1.6', 
            flex: 1,
            opacity: 0.9 
          }}>
            {description}
          </Card.Text>
          
          <div className="mb-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                className="me-2 mb-2"
                style={{
                  background: `linear-gradient(135deg, #3b82f6, #6366f1)`,
                  color: 'white',
                  padding: '0.4em 0.9em',
                  borderRadius: '20px',
                  fontWeight: '500',
                  fontSize: '0.8rem',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <motion.a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn w-100 mt-auto`}
            style={{
              background: `linear-gradient(135deg, #3b82f6, #6366f1)`,
              border: 'none',
              color: 'white',
              fontWeight: '500',
              padding: '0.8em',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: isHovered ? '0 8px 25px rgba(59, 130, 246, 0.25)' : '0 4px 15px rgba(59, 130, 246, 0.15)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Project 
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '0.9rem' }} />
          </motion.a>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;