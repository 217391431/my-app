import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <a
          href="/cv.pdf" // replace with your actual CV path
          download
          className="download-btn"
        >
          Download CV
        </a>
      </div>

      <div className="project-list">
        <div className="project-card">
          <h3>E-commemious Website</h3>
          <p>
            A full-stack e-commerce platform built with <strong>Python, Django, 
            HTML, CSS, JavaScript, and SQL</strong>. Includes user authentication, 
            product management, and payment integration.
          </p>
          <a
            href="https://github.com/yourusername/e-commemious"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>React Project</h3>
          <p>
            A dynamic web app built with <strong>React (JavaScript, CSS)</strong> 
            and integrated with a <strong>C# backend API</strong>. Focused on 
            interactive UI and RESTful services.
          </p>
          <a
            href="https://github.com/yourusername/react-project"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>

        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default Projects;
