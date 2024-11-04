import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm [Your Name], a passionate web developer with experience in building modern, responsive web applications. I love creating interactive and dynamic user experiences. In my free time, I enjoy learning about new technologies and working on personal projects.
          </p>
        </div>
        <div className="about-photo">
          <img src="path-to-your-photo.jpg" alt="Your Name" />
        </div>
      </div>
    </section>
  );
}

export default About;
