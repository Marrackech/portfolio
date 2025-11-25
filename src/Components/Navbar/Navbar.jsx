// src/Components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../SASS/Navbar.css';

const Navbar = ({ toggleSpaceMode, spaceMode }) => {
  const modeText = spaceMode ? 'Land Mode' : 'Space Mode';

  return (
    <nav aria-label="Main navigation">
      <div className="logo">
        <img src="/images/HLogo.png" alt="mon-Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="space-mode-button">
        <button onClick={toggleSpaceMode}>
          <span>{modeText}</span>
          <img src="/images/nasa.jpg" alt="Toggle space mode icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
