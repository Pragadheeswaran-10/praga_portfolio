import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling changes when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].name.toLowerCase());
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          Pragadheeswaran<span className="logo-dot">.S</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-item ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <motion.span
                  layoutId="activeIndicator"
                  className="active-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
          </button>
        </div>

        {/* Mobile menu toggle & theme toggle */}
        <div className="nav-controls-mobile">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn" aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="navbar-mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-item ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
