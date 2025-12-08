import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { experience } from '../data/content.js';

const Experience = () => {
  React.useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.timeline-item', '.blur-light');
    });
  }, []);
  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        {experience.map(e => (
          <div key={e.role + e.company} className="timeline-item" style={{ position: 'relative' }}>
            <div className="blur-light" style={{position:'absolute',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(0,180,255,0.25)',filter:'blur(40px)',pointerEvents:'none',left:'50%',top:'50%',transform:'translate(-50%,-50%)',transition:'left 0.2s, top 0.2s'}}></div>
            <div className="time-head">
              <h3>{e.role} @ {e.company}</h3>
              <span className="period">{e.period}</span>
            </div>
            <ul>
              {e.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
            <div className="tags">{e.tech.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
