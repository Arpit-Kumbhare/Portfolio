import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/content.js';

const Projects = () => {
  React.useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.card', '.blur-light');
    });
  }, []);
  return (
    <section id="projects" className="section">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid">
        {projects.map(p => (
          <div key={p.name} className="card" style={{ position: 'relative' }}>
            <div className="blur-light" style={{position:'absolute',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(0,180,255,0.25)',filter:'blur(40px)',pointerEvents:'none',left:'50%',top:'50%',transform:'translate(-50%,-50%)',transition:'left 0.2s, top 0.2s'}}></div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
            {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="ext">Visit 7</a>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
