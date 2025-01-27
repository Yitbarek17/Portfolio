import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; 2025 Israel Theodros. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a 
                href="https://github.com/israelseleshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className={darkMode ? 'text-light' : 'text-dark'}
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a 
                href="https://linkedin.com/in/israel-theodros" 
                target="_blank" 
                rel="noopener noreferrer"
                className={darkMode ? 'text-light' : 'text-dark'}
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a 
                href="https://twitter.com/israel_theodros" 
                target="_blank" 
                rel="noopener noreferrer"
                className={darkMode ? 'text-light' : 'text-dark'}
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a 
                href="https://instagram.com/israeltheodros" 
                target="_blank" 
                rel="noopener noreferrer"
                className={darkMode ? 'text-light' : 'text-dark'}
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
                href="https://t.me/israeltheodros" 
                target="_blank" 
                rel="noopener noreferrer"
                className={darkMode ? 'text-light' : 'text-dark'}
              >
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
