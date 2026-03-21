import React, { useState } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SkillCard = ({ title, proficiency, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className={`mb-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(12px)',
          background: darkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.9)',
          border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
        }}
      >
        <Card.Body>
          <Card.Title className="h5 d-flex justify-content-between align-items-center mb-3">
            <span className={darkMode ? 'text-light' : 'text-dark'}>{title}</span>
            <span 
              className="badge"
              style={{
                background: `linear-gradient(135deg, #3b82f6, #6366f1)`,
                color: 'white',
                padding: '0.4em 0.8em',
                borderRadius: '20px',
                fontWeight: '600',
              }}
            >
              {proficiency}%
            </span>
          </Card.Title>
          <div className="progress-wrapper" style={{ position: 'relative' }}>
            <ProgressBar 
              now={isHovered ? proficiency : 0} 
              style={{ 
                height: '12px',
                borderRadius: '20px',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                  height: '100%',
                  borderRadius: '20px',
                  transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isHovered ? 'none' : 'none',
                }}
              />
            </ProgressBar>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default SkillCard;