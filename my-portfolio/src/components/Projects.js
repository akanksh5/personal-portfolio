import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Project 1 */}
        <div className="project">
          <h3>Project Name 1</h3>
          <p>Brief description of the project.</p>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          <a href="https://project1-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        
        {/* Project 2 */}
        <div className="project">
          <h3>Project Name 2</h3>
          <p>Brief description of the project.</p>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
