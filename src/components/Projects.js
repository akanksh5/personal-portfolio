import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Project Name 1</h3>
          <p>A brief description of the project, highlighting its purpose and key features.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://project1-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="project-card">
          <h3>Project Name 2</h3>
          <p>A brief description of the project, highlighting its purpose and key features.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
