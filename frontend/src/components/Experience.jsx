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
            <div className="time-head">
              <h3>
                {e.role} <span className="at-symbol">@</span> {e.company}
              </h3>
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
