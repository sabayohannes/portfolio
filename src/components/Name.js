import React from 'react'
import './Name.css'
import {Link} from 'react-router-dom'
const Name = () => {
  return (
    <div>
      <h2 className='name-animation'>{"Saba".split("").map((letter,index)=>
        (<Link to='/' key={index} style={{animationDelay: `${index * 0.2}s`}}>{letter}</Link>))}</h2>
    </div>
  )
}

export default Name
