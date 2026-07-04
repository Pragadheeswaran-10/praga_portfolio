import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaArrowDown, FaFileDownload } from 'react-icons/fa';

// Updated roles list as requested
const roles = [
  "Aspiring Software Developer",
  "React Developer",
  "C++ Programmer",
  "DSA Enthusiast"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false); // State to handle profile photo fallback

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];
    
    // Typing effect logic
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(activeRole.slice(0, displayedText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedText === activeRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-left"
        >
          <div className="hero-welcome">Hello, I'm</div>
          <h1 className="hero-name">
            <span className="gradient-text">Pragadheeswaran S</span>
          </h1>
          
          <div className="hero-role-wrapper">
            <span className="hero-role-text">{displayedText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-description">
            Third-Year B.Tech Information Technology student at Madras Institute of Technology (MIT), Anna University, with a strong foundation in C++, Data Structures & Algorithms, React.js, and Web Development. Actively seeking Software Development Internship opportunities.
          </p>

          <div className="hero-ctas">
            {/* 
              DEVELOPER NOTICE: 
              To configure your resume download, place your 'resume.pdf' file 
              directly inside the 'public/' directory of this project.
            */}
            <a href="/resume.pdf" download="Pragadheeswaran_S_Resume.pdf" className="btn btn-primary">
              <FaFileDownload /> Download Resume
            </a>
            <a href="#projects" onClick={handleScrollToProjects} className="btn btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Pragadheeswaran-10" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pragadheeswaran-s-2a0a34324" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/2024506049-3/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LeetCode">
              <FaCode />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-right"
        >
          <div className="hero-visual">
            <div className="hero-visual-inner">
              <div className="glowing-circle circle-1"></div>
              <div className="glowing-circle circle-2"></div>
              <div className="glowing-circle circle-3"></div>
              
              {/* 
                DEVELOPER NOTICE: 
                To display your photo, place your profile image inside the 'public/' 
                folder of this project and name it 'profile.jpeg'.
              */}
              <div className="profile-photo-container">
                {!imgError ? (
                  <img 
                    src="/profile.jpeg" 
                    alt="Pragadheeswaran S" 
                    className="profile-photo" 
                    onError={() => setImgError(true)} 
                  />
                ) : (
                  <div className="profile-placeholder">
                    <span className="placeholder-initials">PS</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.a 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          href="#about"
          aria-label="Scroll down to about"
        >
          <FaArrowDown />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
