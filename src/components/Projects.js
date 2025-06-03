import React from 'react'
import { motion } from 'framer-motion';
import Name from './Name.js'
import './Project.css'
const projectList=[
{title: "Employee Management System",
    description:
      "Full-Stack app with user login, admin/user privileges, CRUD operations, and backend using MongoDB.",
    tech: "React, Node.js, Express, MongoDB",
    liveLink: "https://your-vercel-link.vercel.app",
    githubLink: "https://github.com/yourusername/employee-management-system"},
    {
  title: "Role-Based Clothing E-Commerce Store",
  description:
    "A full-stack online store for clothing with role-based authentication (admin vs. user). Admins can manage products and orders, while users can browse, add to cart, and checkout.",
  tech: "React, Node.js, Express, MongoDB, JWT, Context API",
  liveLink: "https://your-clothing-store.vercel.app", // replace with real link
  githubLink: "https://github.com/yourusername/clothing-store" // replace with real link
}
]

const Projects = ({ isDarkMode }) => {

  return (
  <div className='project-page'>
    
    <section>
      <Name/>
      <h1 className='project-title'>Projects</h1>
       <span className="blinking-dot"></span>
      {projectList.map((project, index) => (
        <motion.div
          className='project-card'
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 0.90 }}
          viewport={{ once: true }}
          
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech}</p>
          <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a> |{" "}
          <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
         </motion.div>
      ))}
    </section>
    </div>
  );
}

export default Projects
