import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);

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

  const projects = [
    {
      id: 1,
      title: "AI-Powered Text-To-Speach",
      description: "A web application that uses AI to read and convert it into natural speech using speech synthesis .",
      image: "./src/assets/text-to-speech.png",
      category: ["ai", "frontend"],
      githubUrl: "https://github.com/AdiVermaa/text-to-speech",
      liveUrl: "https://adivermaa.github.io/text-to-speech/",
      technologies: ["HTML","CSS","JavaScript"]
    },
    {
      id: 2, 
      title: "Movie Search App",
      description: "The Movie Search App enables users to search for movies, browse by genre, manage a watchlist, and receive personalised recommendations based on their choices.",
      image: "./src/assets/movie.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/Movie-Search",
      liveUrl: "https://movie-search-lac-ten.vercel.app/",
      technologies: ["React", "HTML","CSS","JS"]
    },
    {
      id: 3,
      title: "Fitness App",
      description: "Inspired by the popular manhwa/novel 'Solo Leveling', this application helps you track your real-life 'leveling up' through daily quests and challenges.",
      image: "./src/assets/Fitness.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/Fitness-App",
      liveUrl: "https://capstone-2-coral.vercel.app/",
      technologies: ["React","HTML","CSS","JS"]
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "A financial management application that helps users track expenses, and visualize spending patterns.",
      image: "./src/assets/Finance.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/Budget-Tracker",
      liveUrl: "https://adivermaa.github.io/Budget-Tracker/",
      technologies: ["HTML","CSS","JS"]
    },
    {
      id: 5,
      title: "Rock Paper Scissors",
      description: "A modern take on the classic game with animated interactions and score tracking.",
      image: "./src/assets/stone paper scissor game.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/project1",
      liveUrl: "https://adivermaa.github.io/project1/",
      technologies: ["HTML","CSS","JS"]
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "The website serves as a digital space to showcase my skills, achievements, and projects",
      image: "./src/assets/portfolio.png",
      category: ["fullstack"],
      githubUrl: "https://github.com/AdiVermaa/NewPortfolio",
      liveUrl: "https://collab.verma.dev",
      technologies: ["React","HTML","CSS","JS"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title reveal">My Projects</h2>
        
        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card reveal" 
              key={project.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-img-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Demo"
                    >
                      <FontAwesomeIcon icon={faChrome} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                
                <a 
                  href={project.liveUrl}
                  className="project-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta reveal">
          <p>Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/AdiVermaa" 
            className="btn primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;