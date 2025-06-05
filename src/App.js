
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Writing from './components/Writing';
import { useEffect, useState } from 'react';

function App() {
  const[isDarkMode,setIsDarkMode]=useState(false)
  useEffect(()=>{
    const storedThem=localStorage.getItem('theme')
    if(storedThem==='dark'){
      setIsDarkMode(true)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("theme",isDarkMode?'dark':'light')
  },[isDarkMode])


  const toggleTheme = () => setIsDarkMode(prev => !prev);
   const themeStyles = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#e6e6fa',
    color: isDarkMode ? 'white' : 'black',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
    fontFamily: 'sans-serif',
  };
  return (
    <div className="App">
     
      
    <BrowserRouter>
    
 <Routes>
  <Route element={<About isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>}path='/'/>
  <Route element={<Contact isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>}path='/contact'/>
  <Route element={<Projects isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>} path='/projects'/>
  <Route element={<Writing isDarkMode={isDarkMode}toggleTheme={toggleTheme}/>}path="/Writing"  />
 </Routes>
 </BrowserRouter>
      </div>

  );
}

export default App;
