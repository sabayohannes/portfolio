import React from 'react';  
import { Link } from 'react-router-dom';
import './About.css';
import Name from './Name.js';

const About = ({ isDarkMode,toggleTheme }) => {
  return (
    <div className="two-column-container">
      
      <div className={`left-column ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Name />
  
        <p>I’m a creative developer who loves animation and playful layouts.</p>
      </div>
      <div className="right-column light">
        <h2>A Bit About Me</h2>
        <ul className='links'>
          <li><Link to='/projects'>projects</Link></li>
          <li><Link to='/contact'>contact</Link></li>
          <li><Link to='/Writing'>writing</Link></li>
        </ul>
        <div className="card-wrapper">
  <div className="info-card">
    <div className="card-front">
      <p>
        Hi, I’m Saba!<br /><br />
        I’m a passionate Full-Stack Developer who loves building seamless web experiences.
      </p>
    </div>
    <div className="card-back">
      <p>
        From React UIs to Node.js backends, I enjoy turning ideas into reality.<br /><br />
        When not coding, I explore tech, share fun facts, or sip coffee ☕.<br /><br />
        Let’s build something amazing together!
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default About;
