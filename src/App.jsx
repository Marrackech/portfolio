// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './SASS/Background.css';

const App = () => {
  const [spaceMode, setSpaceMode] = useState(false);

  const toggleSpaceMode = () => {
    setSpaceMode(!spaceMode);
  };

  return (
    <Router>
      <div className={spaceMode ? 'space-mode' : 'default-mode'}>
        {spaceMode && (
          <div className="stars-wrapper" aria-hidden="true">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
        )}
        <Navbar toggleSpaceMode={toggleSpaceMode} spaceMode={spaceMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
