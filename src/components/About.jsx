import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "Third-year B.Tech IT student at Madras Institute of Technology (MIT), Anna University. Exceptional CGPA: 9.80/10."
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Avid C++ programmer focused on solving Data Structures & Algorithms (DSA) problems to build deep engineering skills."
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Passionate about building responsive modern user interfaces in React.js and learning full-stack system architecture."
    },
    {
      icon: <FaDatabase />,
      title: "Core Engineering",
      desc: "Actively studying Object-Oriented Programming (OOP), STL, and backend systems like MySQL and basic MongoDB."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A glimpse into my academic journey, core interests, and what drives me as a developer.</p>
          <div className="section-line"></div>
        </div>

        <div className="about-content grid-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-left"
          >
            <h3 className="about-greet">
              Passionate about building software that makes an impact.
            </h3>
            <p className="about-text">
              I am a Third-Year B.Tech Information Technology student at <strong>Madras Institute of Technology (MIT), Anna University</strong>. 
              With a current CGPA of <strong>9.80/10</strong>, I combine a rigorous theoretical foundation in computer science with hands-on building. I am actively seeking Software Development Internship opportunities.
            </p>
            <p className="about-text">
              My engineering journey is centered around learning how to write efficient, clean, and scalable code. 
              Currently, I am diving deep into Full Stack Web Development and active problem solving in Data Structures and Algorithms.
            </p>
            
            <div className="about-stats-grid">
              <div className="about-stat-card glass-card">
                <span className="stat-number">9.80</span>
                <span className="stat-label">Current CGPA</span>
              </div>
              <div className="about-stat-card glass-card">
                <span className="stat-number">3rd</span>
                <span className="stat-label">Year IT Student</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-right grid-2"
          >
            {highlights.map((item, idx) => (
              <div key={idx} className="about-card glass-card">
                <div className="about-card-icon">{item.icon}</div>
                <h4 className="about-card-title">{item.title}</h4>
                <p className="about-card-desc">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
