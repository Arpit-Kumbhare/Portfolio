import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { about } from '../data/content.js';

const About = () => (
  <section id="about" className="section">
    <SectionTitle>About</SectionTitle>
    <p className="body-text">{about.bio}</p>
    <div className="about-subsections">
      <div className="sub-block">
        <h3 className="sub-title">Technologies</h3>
        <ul className="pill-list tech-list">
          {about.skills.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>
      <div className="sub-block">
        <h3 className="sub-title">Certificates</h3>
        <ul className="cert-list">
          {about.certifications.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </div>
    {about.education && (
      <div className="education-block">
        <h3 className="sub-title">Education</h3>
        <ul className="education-list">
          {about.education.map(e => (
            <li key={e.institution} className="education-item">
              <span className="edu-degree">{e.degree}</span>
              <span className="edu-inst">{e.institution}</span>
              <span className="edu-period">{e.period}</span>
              {e.grade && <span className="edu-grade">{e.grade}</span>}
            </li>
          ))}
        </ul>
      </div>
    )}
  </section>
);

export default About;
