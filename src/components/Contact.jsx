import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { contact } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
  whatsapp: <FaWhatsapp />,
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <SectionTitle>Contact</SectionTitle>
      <div className="contact-card contact-layout">
        <div className="contact-primary">
          <h3 className="contact-heading">Let's Connect</h3>
          <p className="contact-text">I'm open to opportunities, collaboration, and interesting problems. Reach out via email or any of the platforms below.</p>
          <ul className="contact-details">
            <li><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            {contact.location && <li><strong>Location:</strong> {contact.location}</li>}
          </ul>
        </div>
        <div className="contact-links" aria-label="Social and messaging links">
          {contact.social.map(s => (
            <a
              key={s.label}
              href={s.url}
              target={s.type === 'email' ? '_self' : '_blank'}
              rel={s.type === 'email' ? undefined : 'noreferrer'}
              className="contact-link"
              aria-label={s.label}
            >
              <span className="contact-icon">{iconMap[s.type] || '↗'}</span>
              <span className="contact-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
