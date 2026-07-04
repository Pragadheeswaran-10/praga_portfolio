import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/Pragadheeswaran-10",
      icon: <FaGithub />,
      color: "#333",
      // Fake stat removed — real stats will be added once the profile is active
      notice: "GitHub profile is currently being updated with new projects.",
      desc: "Open source contributions, projects, and custom algorithms repositories. Review codebase structures.",
      themeColor: "var(--color-primary)"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/2024506049-3/",
      icon: <FaCode />,
      color: "#ffa116",
      stat: "Active",
      desc: "Active profile showcasing consistent problem solving in Data Structures and Algorithms using C++.",
      themeColor: "var(--color-accent)"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pragadheeswaran-s-2a0a34324",
      icon: <FaLinkedin />,
      color: "#0077b5",
      stat: "Professional Network",
      desc: "Connect for professional collaborations, internships, and networking on software development fields.",
      themeColor: "var(--color-secondary)"
    }
  ];

  return (
    <section id="coding-profiles" className="profiles-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Coding &amp; Social Profiles</h2>
          <p className="section-subtitle">Connect with me online, explore my codebases, or review my algorithmic problem-solving logs.</p>
          <div className="section-line"></div>
        </div>

        <div className="profiles-grid grid-3">
          {profiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="profile-link-card glass-card"
              style={{ '--profile-color': profile.themeColor }}
            >
              <div className="profile-card-icon" style={{ color: profile.color }}>
                {profile.icon}
              </div>
              <h3 className="profile-card-name">{profile.name}</h3>

              {/* GitHub: show notice instead of fake stat */}
              {profile.notice ? (
                <p className="profile-card-notice">{profile.notice}</p>
              ) : (
                <span className="profile-card-stat">{profile.stat}</span>
              )}

              <p className="profile-card-desc">{profile.desc}</p>
              <div className="profile-card-action">
                View Profile &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
