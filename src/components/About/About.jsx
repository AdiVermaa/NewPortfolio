import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faMobileAlt, faRobot } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const skills = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'HTML/CSS' },
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'MongoDB' },
    { name: 'Tailwind CSS' },
    { name: 'ExpressJS' },
    { name: 'MYSQL' },
    { name: 'Prisma ORM' },
    { name: 'Pandas' }
  ];



  return (
    <section id="about" className="section about-section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="about-content">
          <div className="about-info reveal">
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="about-text">
              Hi there! I'm Aditya Verma, a passionate Fullstack developer and AI enthusiast based in Navi Mumbai, India. 
              With 2 years of experience in Fullstack development, I specialize in creating engaging, 
              user-friendly digital experiences that combine aesthetic appeal with technical excellence.
            </p>
        
            <p className="about-text">
              My journey in tech began with a quriosity and now I am pursuing Btech in CS and AI.
              When I'm not coding, you can find me experimenting with new technologies, contributing 
              to open source projects, or exploring the outdoors. I believe in continuous learning and 
              staying at the forefront of technological innovations.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Aditya Verma</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">adityavermaa2006@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Navi Mumbai, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">2 Years</span>
              </div>
            </div>
          </div>
          
          <div className="skills-container reveal">
            <h3 className="about-subtitle">My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-tag" key={index}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;