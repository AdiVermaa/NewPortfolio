import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
      description: "A full-stack MERN application for finance dashboard management with JWT authentication, role-based access control, analytics APIs, and a clean React frontend.",
      image: "/Finance_Dashboard.png",
      githubUrl: "https://github.com/AdiVermaa/Finance-Dashboard.git",
      liveUrl: "https://finance-dashboard-taupe-two.vercel.app/login",
      technologies: ["Node.JS","React","MONGO","Express.js","Vanilla CSS"],
      year: "2026",
      results: [
        "Secure JWT authentication",
        "Analytics APIs",
        "Role-based access control"
      ]
    },
    {
      id: 2,
      title: "Campus Connect",
      description: "A secure, university-only Reddit-style platform with admin moderation and activity tracking, built using the MERN stack.",
      image: "/Campus-Connect.png",
      githubUrl: "https://github.com/AdiVermaa/CampusConnect.git",
      liveUrl: "https://campus-connect-six-liard.vercel.app/",
      technologies: ["Node.JS","React","MONGO","Tailwind"],
      year: "2025",
      results: [
        "Secure, university-only Reddit-style platform",
        "Admin moderation and activity tracking",
        "Full proof messaging using websocket.io"
      ]
    },
    {
      id: 3,
      title: "Solar System Explorer",
      description: "A 3D interactive Solar System simulation built with Three.js, showcasing realistic planetary orbits and scaling.",
      image: "/Solar-sytem.png",
      githubUrl: "https://github.com/AdiVermaa/SolarSystem",
      liveUrl: "https://adivermaa.github.io/SolarSystem/",
      technologies: ["HTML","CSS","JavaScript","Three.JS"],
      year: "2025",
      results: [
        "Interactive 3D visualization of the solar system",
        "Realistic planetary orbits and scaling",
        "Smooth camera controls and animations"
      ]
    },
    {
      id: 4, 
      title: "Movie Search App",
      description: "The Movie Search App enables users to search for movies, browse by genre, manage a watchlist, and receive personalised recommendations.",
      image: "/movie.png",
      githubUrl: "https://github.com/AdiVermaa/Movie-Search",
      liveUrl: "https://movie-search-lac-ten.vercel.app/",
      technologies: ["React", "HTML","CSS","JS"],
      year: "2024",
      results: [
        "Movie search and filtering functionality",
        "Personalized watchlist management",
        "Genre-based browsing and recommendations"
      ]
    },
    {
      id: 5,
      title: "Fitness App",
      description: "Inspired by 'Solo Leveling', this application helps you track your real-life 'leveling up' through daily quests and challenges.",
      image: "/Fitness.png",
      githubUrl: "https://github.com/AdiVermaa/Fitness-App",
      liveUrl: "https://capstone-2-coral.vercel.app/",
      technologies: ["React","HTML","CSS","JS"],
      year: "2024",
      results: [
        "Daily quest and challenge tracking",
        "Progress visualization and statistics",
        "Gamified fitness experience"
      ]
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "The website serves as a digital space to showcase my skills, achievements, and projects",
      image: "/portfolio.png",
      githubUrl: "https://github.com/AdiVermaa/NewPortfolio",
      liveUrl: "https://collab.verma.dev",
      technologies: ["React","HTML","CSS","JS"],
      year: "2024",
      results: [
        "Modern and responsive design",
        "Interactive project showcase",
        "Smooth animations and transitions"
      ]
    },
    {
      id: 7,
      title: "AI-Powered Text-To-Speech",
      description: "A web application that uses AI to read and convert it into natural speech using speech synthesis.",
      image: "/text-to-speech.png",
      githubUrl: "https://github.com/AdiVermaa/text-to-speech",
      liveUrl: "https://adivermaa.github.io/text-to-speech/",
      technologies: ["HTML","CSS","JavaScript"],
      year: "2024",
      results: [
        "AI-powered text-to-speech conversion",
        "Natural voice synthesis",
        "Customizable voice settings"
      ]
    },
    {
      id: 8,
      title: "Personal Finance Tracker",
      description: "A financial management application that helps users track expenses and visualize spending patterns.",
      image: "./Finance.png",
      githubUrl: "https://github.com/AdiVermaa/Budget-Tracker",
      liveUrl: "https://adivermaa.github.io/Budget-Tracker/",
      technologies: ["HTML","CSS","JS"],
      year: "2024",
      results: [
        "Expense tracking and categorization",
        "Spending pattern visualization",
        "Budget planning and management"
      ]
    },
    {
      id: 9,
      title: "Rock Paper Scissors",
      description: "A modern take on the classic game with animated interactions and score tracking.",
      image: "./stone paper scissor game.png",
      githubUrl: "https://github.com/AdiVermaa/project1",
      liveUrl: "https://adivermaa.github.io/project1/",
      technologies: ["HTML","CSS","JS"],
      year: "2024",
      results: [
        "Animated game interactions",
        "Score tracking and statistics",
        "Responsive design for all devices"
      ]
    },
    {
      id: 10,
      title: "Task Manager",
      description: "TaskFlow is a robust, full-stack task orchestration platform engineered for high-performance productivity. This repository implements a high-availability architecture using the MERN stack",
      image: "./Task.png",
      githubUrl: "https://github.com/AdiVermaa/Global-Trend.git",
      liveUrl: "https://global-trend-omega.vercel.app/",
      technologies: ["Node.JS","React","MONGO","Express.js"],
      year: "2026",
      results: [
        "Full-stack task management platform built using the MERN stack for scalable productivity.",
        "Secure system with JWT authentication, validation, and MongoDB cloud integration.",
        "Modern UI with React, Tailwind, and efficient API-driven task operations."
      ]
    },
    {
      id: 11,
      title: "Mini Social Media",
      description: "A full-stack social media platform with post sharing and following capabilities.",
      image: "./Mini_SS.png",
      githubUrl: "https://github.com/AdiVermaa/SocialMedia.git",
      liveUrl: "https://social-media-beige-nu.vercel.app/",
      technologies: ["Node.JS","React","MONGO","Express.js","Multer",],
      year: "2026",
      results: [
        "Full-stack social media platform",
        "Post sharing and following capabilities",
        "Responsive design for all devices"
      ]
    },
    {
      id: 12,
      title: "Github Analyzer",
      description: "AI-powered student GitHub repository analysis and feedback system using Langraph and Groq API.",
      image: "./Github.png",
      githubUrl: "https://github.com/AdiVermaa/student-github-reviewer.git",
      liveUrl: "https://github-reviewer-ui-56uj.onrender.com/",
      technologies: ["Python","Streamlit","Langraph","Groq API","Github API"],
      year: "2026",
      results: [
        "AI-powered student GitHub repository analysis and feedback system using Langraph and Groq API.",
        "Automated code quality assessment, best practice validation, and detailed improvement suggestions.",
        "Interactive Streamlit interface for seamless repository submission and result visualization."
      ]
    },
  ];

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <p className="projects-subtitle">Real-world Results</p>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-description">
            See how I transform concepts into engaging digital experiences.
          </p>
        </div>

        <div className="card-deck-container">
          <div className="card-deck">
            {projects.map((project, index) => {
              // Determine card position relative to current index
              let position = 'hidden';
              
              if (index === currentIndex) {
                position = 'active';
              } else if (index === (currentIndex - 1 + projects.length) % projects.length) {
                position = 'prev';
              } else if (index === (currentIndex + 1) % projects.length) {
                position = 'next';
              }

              return (
                <div
                  key={project.id}
                  className={`project-card-deck ${position}`}
                  style={{
                    zIndex: position === 'active' ? 3 : position === 'hidden' ? 0 : 1
                  }}
                >
                  <div className="project-content-wrapper">
                    <div className="project-info">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-year">{project.year}</span>
                      </div>

                      <div className="project-tech">
                        {project.technologies.map((tech, i) => (
                          <span className="tech-tag" key={i}>{tech}</span>
                        ))}
                      </div>

                      <hr className="project-divider" />

                      <ul className="project-results">
                        {project.results.map((result, i) => (
                          <li key={i} className="result-item">
                            <span className="check-icon">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          <span>View Code</span>
                          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faChrome} />
                          <span>Live Demo</span>
                          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        </a>
                      </div>
                    </div>

                    <div className="project-image-container">
                      <div className="image-overlay"></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            className="nav-arrow prev-arrow" 
            onClick={handlePrev}
            aria-label="Previous project"
          >
            ‹
          </button>
          <button 
            className="nav-arrow next-arrow" 
            onClick={handleNext}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <div className="card-navigation">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;