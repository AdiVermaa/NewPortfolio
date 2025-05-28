import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-branding">
              <a href="/" className="footer-logo">
                AV
              </a>
              <p className="footer-description">
                Creating modern digital experiences with a focus on performance,
                accessibility, and beautiful UI/UX design.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-group">
                <h4 className="footer-heading">Navigation</h4>
                <ul className="footer-links-list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-links-group">
                <h4 className="footer-heading">Connect</h4>
                <ul className="footer-links-list">
                  <li><a href="mailto:contact@adityaverma.dev">Email</a></li>
                  <li><a href="https://github.com/AdiVermaa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/aditya-verma-379869250" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="/resume.pdf" download>Resume</a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Aditya Verma. All rights reserved.
            </p>
            
            <div className="social-links">
              <a
                href="https://github.com/AdiVermaa"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-verma-379869250"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/adi_vermaa_56/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            
            <button 
              className="back-to-top" 
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;