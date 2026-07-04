import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: "Developer Portfolio Website",
      description: "A premium, fully responsive portfolio website built with React.js and CSS3. Designed from scratch following glassmorphism principles. Implemented dark mode by default with light mode toggle, and smooth animations using Framer Motion.",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Framer Motion"],
      github: "https://github.com/Pragadheeswaran-10/portfolio-website",
      demo: "https://YOUR-VERCEL-URL.vercel.app", // Set to null since no active live deployment exists yet (triggers 'Coming Soon')
      featured: true
    },
    {
      title: "Marathon Event Website",
      description: "A responsive website dedicated to a marathon event. Features event guidelines, scheduling, participant registration interfaces, and dynamic sections built using vanilla web technologies.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Pragadheeswaran-10",
      demo: null, // Set to null
      featured: false
    },
    {
      title: "Railway Reservation System",
      description: "A database-driven backend management console implementing a railway booking workflow. Designed schemas, normalized tables, and optimized queries for booking operations, seat allocation, and passenger records.",
      tags: ["MySQL", "Database Design", "Relational Model", "SQL Queries"],
      github: "https://github.com/Pragadheeswaran-10",
      demo: null, // Set to null
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A collection of academic and personal projects demonstrating developer competencies in frontend development and database design.</p>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid grid-3">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`project-card glass-card ${project.featured ? 'featured-card' : ''}`}
            >
              {project.featured && <div className="featured-badge">Featured</div>}
              
              <div className="project-icon-wrapper">
                <FaCode />
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-pill">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  aria-label={`View code for ${project.title} on GitHub`}
                >
                  <FaGithub /> Code
                </a>
                
                {project.demo ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn primary"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <button 
                    className="project-link-btn disabled" 
                    disabled 
                    aria-label={`Live demo of ${project.title} is coming soon`}
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
