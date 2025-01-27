import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-4 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; 2025 Yitbarek . All rights reserved.</p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://github.com/Yitbarek17"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yitbarek-daniel-66b3a5286"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:yitdan17@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                <Mail size={24} />
              </a>
              <a
                href="https://t.me/BabiGlow"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
