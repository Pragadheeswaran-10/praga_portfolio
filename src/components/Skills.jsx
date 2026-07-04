import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaTerminal, FaJs, FaReact, FaHtml5, FaCss3Alt, 
  FaDatabase, FaServer, FaBrain, FaCogs, FaTools, FaLightbulb 
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C++",            icon: <FaTerminal /> },
        { name: "C",              icon: <FaTerminal /> },
        { name: "JavaScript",     icon: <FaJs /> },
        { name: "Java (Basic)",   icon: <FaCode /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML5",    icon: <FaHtml5 /> },
        { name: "CSS3",     icon: <FaCss3Alt /> },
      ]
    },
    {
      title: "Database Systems",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL",            icon: <FaDatabase /> },
        { name: "MongoDB (Basic)",  icon: <FaServer /> },
      ]
    },
    {
      title: "Core Concepts",
      icon: <FaBrain />,
      skills: [
        { name: "Data Structures & Algorithms",       icon: <FaBrain /> },
        { name: "Object-Oriented Programming (OOP)",  icon: <FaCogs /> },
        { name: "Standard Template Library (STL)",    icon: <FaTools /> },
        { name: "Problem Solving",                    icon: <FaLightbulb /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">A detailed overview of my technical expertise, programming competencies, and engineering foundations.</p>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid grid-2">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="skills-category-card glass-card"
            >
              <div className="skills-category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              {/* Icon-only pill grid — no bars, no percentages */}
              <div className="skills-pill-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <span className="skill-pill-icon">{skill.icon}</span>
                    <span className="skill-pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
