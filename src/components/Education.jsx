import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Madras Institute of Technology (MIT), Anna University",
      degree: "B.Tech Information Technology",
      duration: "2024 - 2028",
      scoreType: "CGPA",
      score: "9.80 / 10",
      description: "Undergoing core engineering coursework including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering. Maintained a top academic record with active participation in tech communities."
    },
    {
      institution: "Kingston Matric Higher Secondary School",
      degree: "Higher Secondary Education (HSC)",
      duration: "Completed 2024",
      scoreType: "Percentage",
      score: "97.5%",
      description: "Completed higher secondary education with a major in Computer Science, Mathematics, Physics, and Chemistry. Secured excellent marks in board examinations."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic foundations and scholastic achievements that shape my technical perspective.</p>
          <div className="section-line"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-bar"></div>
          
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot">
                <FaGraduationCap />
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <span className="edu-tag"><FaCalendarAlt /> {edu.duration}</span>
                  <span className="score-tag"><FaAward /> {edu.scoreType}: {edu.score}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-inst">{edu.institution}</h4>
                <p className="edu-desc">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
