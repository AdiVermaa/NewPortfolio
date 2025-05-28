import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const text = "Building digital experiences one pixel at a time";
      let i = 0;
      typewriterRef.current.textContent = '';

      const typeText = () => {
        if (i < text.length) {
          typewriterRef.current.textContent += text.charAt(i);
          i++;
          setTimeout(typeText, 100);
        }
      };

      typeText();
    }
  }, []);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        <div className="profile-pic-container">
          <img 
            src="./src/assets/photo.jpeg" 
            alt="Aditya Verma" 
            className="profile-pic"
          />
        </div>

        <h1 className="text-glitch" data-text="Aditya Verma">
          Aditya Verma
        </h1>

        <div className="subtitle">Frontend Developer & AI Enthusiast</div>
        
        <div className="typewriter" ref={typewriterRef}>
          Building digital experiences one pixel at a time
        </div>

        <div className="cta-container">
          <a href="/resume.pdf" className="btn primary-btn" download>
            <FontAwesomeIcon icon={faDownload} /> Resume
          </a>
          <a href="#contact" className="btn secondary-btn">
            <FontAwesomeIcon icon={faPaperPlane} /> Contact
          </a>
        </div>

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
        </div>
      </div>
    </section>
  );
};

export default Hero;