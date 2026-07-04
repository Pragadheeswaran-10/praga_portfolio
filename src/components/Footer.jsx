import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-left">
          <a href="#home" onClick={handleScrollToTop} className="footer-logo">
            Pragadheeswaran<span className="logo-dot">.S</span>
          </a>
          <p className="footer-tagline">B.Tech IT Student @ MIT, Anna University</p>
        </div>

        <div className="footer-middle">
          <div className="footer-social-links">
            <a href="https://github.com/Pragadheeswaran-10" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pragadheeswaran-s-2a0a34324" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/2024506049-3/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LeetCode">
              <FaCode />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p className="copyright-text">
            Designed &amp; Developed by Pragadheeswaran S
          </p>
          <p className="copyright-text">
            &copy; 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
