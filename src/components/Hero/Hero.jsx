import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero = () => {
  const typewriterRef = useRef(null);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Enhanced typewriter effect with cursor
  useEffect(() => {
    if (typewriterRef.current) {
      const text = "Building digital experiences one pixel at a time";
      let i = 0;
      typewriterRef.current.textContent = '';

      const typeText = () => {
        if (i < text.length) {
          typewriterRef.current.textContent += text.charAt(i);
          i++;
          setTimeout(typeText, 80);
        }
      };

      setTimeout(typeText, 500);
    }
  }, []);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic button effect
  const handleButtonHover = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0, 0) scale(1)';
  };

  return (
    <section 
      id="hero" 
      className="section hero-section" 
      ref={heroRef}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
      }}
    >
      <div className="hero-content">
        <div className="profile-pic-container floating">
          <div className="profile-glow"></div>
          <img 
            src="/photo.jpeg" 
            alt="Aditya Verma" 
            className="profile-pic"
          />
        </div>

        <h1 className="text-glitch" data-text="Aditya Verma">
          Aditya Verma
        </h1>

        <div className="subtitle">
          <span className="subtitle-text">Frontend Developer & AI Enthusiast</span>
        </div>
        
        <div className="typewriter" ref={typewriterRef}>
          <span className="cursor">|</span>
        </div>

        <div className="cta-container">
          <a 
            href="/Resume-Aditya Verma.pdf" 
            className="btn primary-btn magnetic-btn" 
            download
            onMouseMove={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span className="btn-content">
              <FontAwesomeIcon icon={faDownload} /> Resume
            </span>
            <span className="btn-shine"></span>
          </a>
          <a 
            href="#contact" 
            className="btn secondary-btn magnetic-btn"
            onMouseMove={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span className="btn-content">
              <FontAwesomeIcon icon={faPaperPlane} /> Contact
            </span>
            <span className="btn-shine"></span>
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
            <span className="social-tooltip">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-verma-379869250"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="social-tooltip">LinkedIn</span>
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;