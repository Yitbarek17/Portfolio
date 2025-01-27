import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Update body class for global theme
    document.body.className = darkMode ? "bg-light" : "bg-dark";
  };

  return (
    <Router>
      <div
        className={`min-vh-100 ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
        style={{ transition: "all 0.3s ease" }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main style={{ minHeight: "100vh", paddingTop: "56px" }}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
