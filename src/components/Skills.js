import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

export default Skills;
