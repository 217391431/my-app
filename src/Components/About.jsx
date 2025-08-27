import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate <strong>Full-Stack Developer</strong> with 
            hands-on experience building modern web applications. I enjoy 
            turning ideas into interactive, user-friendly, and scalable 
            digital solutions.
          </p>
          <p>
            My journey in tech has led me to work with <strong>React, 
            JavaScript, HTML, CSS</strong> on the frontend and <strong>Python 
            (Django), SQL, and C#</strong> on the backend. I thrive on 
            learning new technologies and solving real-world problems.
          </p>

          <div className="skills">
            <h3>Skills & Tools</h3>
            <ul>
              <li>⚡ React, JavaScript, HTML, CSS</li>
              <li>⚡ Python (Django), SQL</li>
              <li>⚡ C# Backend APIs</li>
              <li>⚡ Git & GitHub</li>
              <li>⚡ Responsive UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
