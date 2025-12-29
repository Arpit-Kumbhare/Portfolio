import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { about } from '../data/content.js';

const About = () => {
  const categories = [
    { title: 'Languages', items: new Set(['JavaScript', 'Python']) },
    { title: 'Frontend', items: new Set(['HTML5', 'React.js', 'Redux', 'Tailwind CSS', 'Framer Motion']) },
    { title: 'Backend', items: new Set(['Node.js', 'Express.js', 'RESTful APIs', 'JSON Server']) },
    { title: 'Databases', items: new Set(['MongoDB', 'MySQL']) },
    { title: 'Tools & Deployment', items: new Set(['Git', 'GitHub', 'Vercel', 'GitHub Pages', 'Postman']) },
    { title: 'Libraries & Services', items: new Set(['Axios', 'EmailJS']) },
  ];

  const grouped = new Map(categories.map(c => [c.title, []]));
  const other = [];

  (about.skills || []).forEach((skill) => {
    const cat = categories.find(c => c.items.has(skill));
    if (!cat) {
      other.push(skill);
      return;
    }
    grouped.get(cat.title).push(skill);
  });

  if (other.length) grouped.set('Other', other);

  return (
    <section id="about" className="section">
      <SectionTitle>About</SectionTitle>
      <p className="body-text">{about.bio}</p>
      <div className="about-subsections">
        <div className="sub-block">
          <h3 className="sub-title">Technologies</h3>
          <div className="tech-categories">
            {Array.from(grouped.entries()).map(([title, items]) => (
              items.length ? (
                <div key={title} className="tech-category">
                  <h4 className="tech-category-title">{title}</h4>
                  <ul className="pill-list tech-list">
                    {items.map(s => <li key={`${title}-${s}`}>{s}</li>)}
                  </ul>
                </div>
              ) : null
            ))}
          </div>
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
};

export default About;
