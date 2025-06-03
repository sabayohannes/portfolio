import React from 'react';  
import { Link } from 'react-router-dom';
import './About.css';
import Name from './Name.js';

const About = ({ isDarkMode }) => {
  return (
    <div className="two-column-container">
      <div className={`left-column ${isDarkMode ? 'dark' : 'light'}`}>
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
        <p>This side could show a photo, skills, or fun facts.</p>
      </div>
    </div>
  );
};

export default About;
