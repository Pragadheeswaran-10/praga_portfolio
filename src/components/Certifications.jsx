import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaRegCheckCircle, FaLaptopCode } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: "Full Stack Development Workshop",
      issuer: "Coordinated Training Program",
      icon: <FaLaptopCode />,
      date: "2025",
      details: "Comprehensive hands-on training on complete stack mechanics, covering dynamic UI development, API integrations, and database operations."
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL (SWAYAM)",
      icon: <FaCertificate />,
      date: "2025",
      details: "Successfully completed the NPTEL course covering Python programming, data analysis, visualization, and fundamental data science concepts."
    },
    {
      title: "Basic Computer Course",
      issuer: "Certified Institute Program",
      icon: <FaCertificate />,
      date: "2024",
      details: "Foundational training in computer operations, operating systems, networking fundamentals, and office productivity tools."
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Credential checkpoints validating core knowledge, engineering workshops, and system skills.</p>
          <div className="section-line"></div>
        </div>

        <div className="certs-grid grid-2">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="cert-card glass-card"
            >
              <div className="cert-top">
                <div className="cert-badge-icon">{cert.icon}</div>
                <div className="cert-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
              <p className="cert-details">{cert.details}</p>
              <div className="cert-footer">
                <span className="cert-date">Issued: {cert.date}</span>
                <span className="cert-verified"><FaRegCheckCircle /> Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
