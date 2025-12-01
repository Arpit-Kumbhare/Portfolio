import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/content.js';

const Projects = () => (
  <section id="projects" className="section">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid">
      {projects.map(p => (
        <div key={p.name} className="card">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="ext">Visit ↗</a>}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
