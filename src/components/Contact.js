import React from 'react'
import Name from './Name'
import './Contact.css'
const Contact = ({ isDarkMode,toggleTheme }) => {
  return (
    <div className={`left-column ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    <section>
  <Name/>

      <h1>Contact</h1>
      <p><strong>Email</strong><a href='mailto:makidaqueens2@gmail.com'>makidaqueens2@gmail.com</a></p>
      <p><strong>LinkedIn</strong><a href='https://linkedin.com/in/saba-egziyariya-060171185'  target="_blank" rel="noopener noreferrer">linkedin.com</a></p>
      
    </section>
    </div>
  )
}

export default Contact
