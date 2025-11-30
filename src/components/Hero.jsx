import React from 'react';
import { intro } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1 className="hero-title hero-title-outside">Hi,<br />I am Arpit K.</h1>
      <div className="hero-card">
        <p className="hero-sub">{intro.tagline}</p>
        <p className="hero-desc">{intro.summary}</p>
      </div>
    </section>
  );
};

export default Hero;
