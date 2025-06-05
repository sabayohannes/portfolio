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
        <h2>More Info</h2>
        <ul className='links'>
          <li><Link to='/projects'>projects</Link></li>
          <li><Link to='/contact'>contact</Link></li>
          <li><Link to='/Writing'>writing</Link></li>
        </ul>
        <p>Hi, I’m Saba!<br /><br />

I’m a passionate Full-Stack Developer who loves building seamless web experiences.

From crafting sleek user interfaces with React to building powerful backends with Node.js and MongoDB, I enjoy turning ideas into reality.

When I’m not coding, you might find me exploring new tech, sharing fun facts, or enjoying a good cup of coffee ☕.

Let’s build something amazing together!</p>
      </div>
    </div>
  );
};

export default About;
