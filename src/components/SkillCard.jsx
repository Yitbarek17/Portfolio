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
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      >
        <Card.Body>
          <Card.Title className="h5 d-flex justify-content-between align-items-center">
            {title}
            <span className="badge bg-primary">{proficiency}%</span>
          </Card.Title>
          <ProgressBar 
            now={isHovered ? proficiency : 0} 
            variant={darkMode ? "info" : "primary"}
            style={{ 
              height: '10px',
              transition: 'all 1s ease'
            }}
          />
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default SkillCard;