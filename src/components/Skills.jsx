import React from 'react';
import './styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3>HTML</h3>
          <div className="progress-bar html"></div>
        </div>
        <div className="skill-item">
          <h3>CSS</h3>
          <div className="progress-bar css"></div>
        </div>
        <div className="skill-item">
          <h3>JavaScript</h3>
          <div className="progress-bar js"></div>
        </div>
        <div className="skill-item">
          <h3>React</h3>
          <div className="progress-bar react"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
