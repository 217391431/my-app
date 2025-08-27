import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Superman from "../assets/Superman.jpeg";

const Home = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend (ASP.NET Core)
  useEffect(() => {
    axios
      .get("https://localhost:5001/api/portfolio/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left side content */}
        <div className="home-content">
          <h1>
            Hello, I'm <span className="highlight">Prince Matsekoleng</span> 👋
          </h1>
          <h2>Full-Stack Developer</h2>
          <p>
            I build modern and responsive web applications using{" "}
            <strong>React, JavaScript, HTML, CSS</strong> on the frontend, and{" "}
            <strong>C# (for React backend), Python (Django), and SQL</strong> on
            the backend. I enjoy turning ideas into interactive, user-friendly,
            and scalable digital solutions.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            {/* CV download from backend */}
            <a
              href="https://localhost:5001/api/portfolio/cv"
              className="btn primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download CV
            </a>

            <a href="#projects" className="btn secondary-btn">
              🚀 View Projects
            </a>
          </div>

          {/* Preview of projects fetched from backend */}
          <div className="projects-preview">
            <h3>Latest Projects</h3>
            {projects.length > 0 ? (
              <ul>
                {projects.slice(0, 3).map((project, index) => (
                  <li key={index}>{project.name}</li>
                ))}
              </ul>
            ) : (
              <p>No projects found yet...</p>
            )}
          </div>
        </div>

        {/* Right side image */}
        <div className="home-image">
          <img src={Superman} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
