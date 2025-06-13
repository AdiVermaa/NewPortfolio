import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Solar System Explorer",
      description: "A 3D interactive Solar System simulation built with Three.js, showcasing realistic planetary orbits and scaling.",
      image: "./src/assets/Solar-sytem.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/SolarSystem",
      liveUrl: "https://adivermaa.github.io/SolarSystem/",
      technologies: ["HTML","CSS","JavaScript","Three.JS"],
      year: "2025",
      results: [
        { title: "Interactive 3D visualization of the solar system" },
        { title: "Realistic planetary orbits and scaling" },
        { title: "Smooth camera controls and animations" }
      ]
    },
    {
      id: 2, 
      title: "Movie Search App",
      description: "The Movie Search App enables users to search for movies, browse by genre, manage a watchlist, and receive personalised recommendations based on their choices.",
      image: "./src/assets/movie.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/Movie-Search",
      liveUrl: "https://movie-search-lac-ten.vercel.app/",
      technologies: ["React", "HTML","CSS","JS"],
      year: "2024",
      results: [
        { title: "Movie search and filtering functionality" },
        { title: "Personalized watchlist management" },
        { title: "Genre-based browsing and recommendations" }
      ]
    },
    {
      id: 3,
      title: "Fitness App",
      description: "Inspired by the popular manhwa/novel 'Solo Leveling', this application helps you track your real-life 'leveling up' through daily quests and challenges.",
      image: "./src/assets/Fitness.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/Fitness-App",
      liveUrl: "https://capstone-2-coral.vercel.app/",
      technologies: ["React","HTML","CSS","JS"],
      year: "2024",
      results: [
        { title: "Daily quest and challenge tracking" },
        { title: "Progress visualization and statistics" },
        { title: "Gamified fitness experience" }
      ]
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "The website serves as a digital space to showcase my skills, achievements, and projects",
      image: "./src/assets/portfolio.png",
      category: ["fullstack"],
      githubUrl: "https://github.com/AdiVermaa/NewPortfolio",
      liveUrl: "https://collab.verma.dev",
      technologies: ["React","HTML","CSS","JS"],
      year: "2024",
      results: [
        { title: "Modern and responsive design" },
        { title: "Interactive project showcase" },
        { title: "Smooth animations and transitions" }
      ]
    },
    {
      id: 5,
      title: "AI-Powered Text-To-Speach",
      description: "A web application that uses AI to read and convert it into natural speech using speech synthesis.",
      image: "./src/assets/text-to-speech.png",
      category: ["ai", "frontend"],
      githubUrl: "https://github.com/AdiVermaa/text-to-speech",
      liveUrl: "https://adivermaa.github.io/text-to-speech/",
      technologies: ["HTML","CSS","JavaScript"],
      year: "2024",
      results: [
        { title: "AI-powered text-to-speech conversion" },
        { title: "Natural voice synthesis" },
        { title: "Customizable voice settings" }
      ]
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description: "A financial management application that helps users track expenses, and visualize spending patterns.",
      image: "./src/assets/Finance.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/Budget-Tracker",
      liveUrl: "https://adivermaa.github.io/Budget-Tracker/",
      technologies: ["HTML","CSS","JS"],
      year: "2024",
      results: [
        { title: "Expense tracking and categorization" },
        { title: "Spending pattern visualization" },
        { title: "Budget planning and management" }
      ]
    },
    {
      id: 7,
      title: "Rock Paper Scissors",
      description: "A modern take on the classic game with animated interactions and score tracking.",
      image: "./src/assets/stone paper scissor game.png",
      category: ["frontend"],
      githubUrl: "https://github.com/AdiVermaa/project1",
      liveUrl: "https://adivermaa.github.io/project1/",
      technologies: ["HTML","CSS","JS"],
      year: "2024",
      results: [
        { title: "Animated game interactions" },
        { title: "Score tracking and statistics" },
        { title: "Responsive design for all devices" }
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header Section */}
        <div className="projects-header">
          <p className="projects-subtitle">Real-world Results</p>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-description">
            See how I transform concept into engaging digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                top: `calc(64px + ${index * 40}px)`
              }}
            >
              <div className="project-content-wrapper">
                {/* Left Column - Project Info */}
                <div className="project-info">
                  {/* Project Title and Year */}
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>

                  {/* Divider */}
                  <hr className="project-divider" />

                  {/* Project Results/Features */}
                  <ul className="project-results">
                    {project.results.map((result, i) => (
                      <li key={i} className="result-item">
                        <span className="check-icon">✓</span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Project Links */}
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>View Code</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faChrome} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Right Column - Project Image */}
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;