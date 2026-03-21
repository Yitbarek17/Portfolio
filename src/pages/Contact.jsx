import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.split(" ").length > 500) {
      newErrors.message = "Message cannot exceed 500 words";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    { icon: faEnvelope, text: "yitdan17@gmail.com", label: "Email" },
    { icon: faPhone, text: "+2519 11 48 50 63", label: "Phone" },
    { icon: faLocationDot, text: "Addis Ababa, Ethiopia", label: "Location" },
  ];

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
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <motion.h2 
                className="display-3 mb-3 gradient-text"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>
              <p className="lead fs-5" style={{ opacity: 0.9 }}>
                I'm currently exploring modern web development. Let's build something amazing together!
              </p>
            </Col>
          </Row>

          {/* Contact Info Cards */}
          <Row className="justify-content-center mb-5">
            {contactInfo.map((info, index) => (
              <Col key={index} md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                  }}
                  className="p-4 rounded-3"
                  style={{
                    background: darkMode 
                      ? 'rgba(30, 41, 59, 0.6)' 
                      : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <FontAwesomeIcon
                    icon={info.icon}
                    className="mb-3"
                    style={{
                      fontSize: "2.5rem",
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'none',
                    }}
                  />
                  <h5 className="mb-2 fw-bold">{info.label}</h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>{info.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Contact Form */}
          <Row className="justify-content-center">
            <Col md={8}>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  <Alert
                    variant="success"
                    onClose={() => setSubmitted(false)}
                    dismissible
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      color: darkMode ? '#fff' : '#065f46',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <strong>Thank you for your message!</strong> I'll get back to you soon.
                  </Alert>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-3"
                style={{
                  background: darkMode 
                    ? 'rgba(30, 41, 59, 0.6)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      placeholder="Your name"
                      style={{
                        background: darkMode 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                        color: darkMode ? '#fff' : '#000',
                        borderRadius: '12px',
                        padding: '0.8em',
                        backdropFilter: 'blur(8px)',
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="your.email@example.com"
                      style={{
                        background: darkMode 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                        color: darkMode ? '#fff' : '#000',
                        borderRadius: '12px',
                        padding: '0.8em',
                        backdropFilter: 'blur(8px)',
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      placeholder="Your message here..."
                      style={{
                        background: darkMode 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                        color: darkMode ? '#fff' : '#000',
                        borderRadius: '12px',
                        padding: '0.8em',
                        backdropFilter: 'blur(8px)',
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-100 py-3"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        border: 'none',
                        borderRadius: '12px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
