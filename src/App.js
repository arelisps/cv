// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.js";
import About from "./General/about_me.js";
import Resume from "./Resume/resume.js";
import Projects from "./Projects/index.js";
import Contact from "./General/contact_me.js"; // Importa la nueva página
import "./css/App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div>
        <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="about">
                  <h2>About this site</h2>
                  <p>Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, or contact me.</p>
                </section>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
