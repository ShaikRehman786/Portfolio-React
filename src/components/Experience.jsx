import React from 'react';
import './styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Internship at G-Tech</h3>
          <p><strong>Role:</strong> Python Intern</p>
          <p><strong>Duration:</strong> July 2023 - August 2023</p>
        </div>
        <div className="experience-item">
          <h3>Internship at SkilldZire</h3>
          <p><strong>Role:</strong> Artificial Intelligence Intern</p>
          <p><strong>Duration:</strong> Jan 2024 - Mar 2024</p>
        </div>
        <div className="experience-item">
          <h3>Internship at CodSoft</h3>
          <p><strong>Role:</strong> Web Development Intern</p>
          <p><strong>Duration:</strong> Oct 2024 - Nov 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
