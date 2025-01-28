import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar
      expand="lg"
      className={`fixed-top ${
        darkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"
      }`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          Yitbarek Daniel
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={darkMode ? "" : "bg-light"}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
            <button
              onClick={toggleDarkMode}
              className={`btn ${
                darkMode ? "btn-dark" : "btn-light"
              } ms-2 rounded-circle`}
              style={{
                width: "40px",
                height: "40px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <>{darkMode ? <Sun /> : <Moon />}</>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
