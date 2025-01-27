import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ name, role, quote, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className={`h-100 shadow-sm ${
          darkMode
            ? "bg-dark text-light border-light"
            : "bg-light text-dark border-dark"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered
            ? "translateY(-10px) rotateZ(1deg)"
            : "translateY(0) rotateZ(0)",
          transition: "all 0.3s ease",
          borderWidth: "1px",
        }}
      >
        <Card.Body className="position-relative p-4">
          {/* Quote Icon (Top Left) */}
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className={`position-absolute top-0 start-0 m-3 ${
              darkMode ? "text-light" : "text-dark"
            }`}
            style={{
              opacity: 0.2,
              fontSize: "1.5rem",
            }}
          />

          {/* Testimonial Quote */}
          <blockquote className="blockquote mb-0">
            <p
              className="mb-4"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              {quote}
            </p>
            <footer className="blockquote-footer text-end mt-3">
              <cite
                title="Source Title"
                className={darkMode ? "text-light" : "text-dark"}
              >
                {name}
              </cite>
              <br />
              <small className={`text-muted ${darkMode ? "text-light" : ""}`}>
                {role}
              </small>
            </footer>
          </blockquote>

          {/* Quote Icon (Bottom Right) */}
          <FontAwesomeIcon
            icon={faQuoteRight}
            className={`position-absolute bottom-0 end-0 m-3 ${
              darkMode ? "text-light" : "text-dark"
            }`}
            style={{
              opacity: 0.2,
              fontSize: "1.5rem",
            }}
          />
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
