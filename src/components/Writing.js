import React from 'react'
import Name from './Name'
import './Writing.css'
const Writing = ({ isDarkMode,toggleTheme }) => {
  return (
    <div className={`toggel-dark-light ${isDarkMode ? 'dark' : ''}`}>

       <button onClick={toggleTheme} className="theme-toggle-button">
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      <Name/>
      <p>
      You can download my resume here:{" "}
      <a href="/resume.pdf" download>
        Download Resume (PDF)
      </a>
    </p>
      
    </div>
  )
}

export default Writing
