import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
} from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+91 8124944259',
    href: 'tel:+918124944259',
    color: 'var(--color-primary)',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'muthueaswaran17@gmail.com',
    href: 'mailto:muthueaswaran17@gmail.com',
    color: 'var(--color-accent)',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Tiruvannamalai, Tamil Nadu, India',
    href: null, // not a link
    color: 'var(--color-secondary)',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pragadheeswaran-s-2a0a34324',
    href: 'https://www.linkedin.com/in/pragadheeswaran-s-2a0a34324',
    color: '#0077b5',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/Pragadheeswaran-10',
    href: 'https://github.com/Pragadheeswaran-10',
    color: 'var(--text-primary)',
  },
  {
    icon: <FaCode />,
    label: 'LeetCode',
    value: 'leetcode.com/u/2024506049-3',
    href: 'https://leetcode.com/u/2024506049-3/',
    color: '#ffa116',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to internship opportunities, collaborations, and professional connections.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="section-line"></div>
        </div>

        <div className="contact-cards-grid">
          {contactItems.map((item, idx) => {
            const CardContent = (
              <>
                <div className="contact-card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">{item.label}</span>
                  <span className="contact-card-value">{item.value}</span>
                </div>
                {item.href && (
                  <span className="contact-card-arrow">&rarr;</span>
                )}
              </>
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-info-card glass-card"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div className="contact-info-card glass-card contact-info-card--static">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
