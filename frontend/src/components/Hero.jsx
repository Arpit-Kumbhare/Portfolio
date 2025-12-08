import React, { useEffect } from 'react';
import { intro } from '../data/content';

const Hero = () => {
  useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.hero-card', '.blur-light');
    });
  }, []);
  return (
    <section id="home" className="hero">
      <h1 className="hero-title hero-title-outside">Hi,<br />I am Arpit</h1>
      <div className="hero-card" style={{ position: 'relative' }}>
        <div className="blur-light" style={{position:'absolute',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(0,180,255,0.25)',filter:'blur(40px)',pointerEvents:'none',left:'50%',top:'50%',transform:'translate(-50%,-50%)',transition:'left 0.2s, top 0.2s'}}></div>
        <p className="hero-sub">{intro.tagline}</p>
        <p className="hero-desc">{intro.summary}</p>
      </div>
    </section>
  );
};

export default Hero;
