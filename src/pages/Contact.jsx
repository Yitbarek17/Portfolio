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
    { icon: faEnvelope, text: "yitbarek@gmail.com", label: "Email" },
    { icon: faPhone, text: "+2519 00 00 00 00", label: "Phone" },
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
              <h2 className="display-4 mb-3">Get in Touch</h2>
              <p className="lead">
                I'm currently exploring variety of application and system
                development methods. Feel free to reach out if you want to work
                together!
              </p>
            </Col>
          </Row>

          {/* Contact Info Cards */}
          <Row className="justify-content-center mb-5">
            {contactInfo.map((info, index) => (
              <Col key={index} md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-3 ${
                    darkMode ? "bg-dark border border-light" : "bg-white border"
                  }`}
                  style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                >
                  <FontAwesomeIcon
                    icon={info.icon}
                    className={`mb-3 ${
                      darkMode ? "text-light" : "text-primary"
                    }`}
                    style={{ fontSize: "2rem" }}
                  />
                  <h5 className="mb-2">{info.label}</h5>
                  <p className="mb-0">{info.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Contact Form */}
          <Row className="justify-content-center">
            <Col md={8}>
              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                  className="mb-4"
                >
                  Thank you for your message! I'll get back to you soon.
                </Alert>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`p-4 rounded-3 ${
                  darkMode ? "bg-dark border border-light" : "bg-white border"
                }`}
                style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      className={darkMode ? "bg-dark text-light" : ""}
                      placeholder="Your name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      className={darkMode ? "bg-dark text-light" : ""}
                      placeholder="your.email@example.com"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      className={darkMode ? "bg-dark text-light" : ""}
                      placeholder="Your message here..."
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
                      variant={darkMode ? "light" : "dark"}
                      className="w-100 py-3"
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
