import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.body.className = next ? "bg-dark" : "bg-light";
      return next;
    });
  };

  return (
    <div
      className={`min-vh-100 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ transition: "all 0.3s ease" }}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main style={{ minHeight: "100vh", paddingTop: "72px" }}>
        <Home darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
