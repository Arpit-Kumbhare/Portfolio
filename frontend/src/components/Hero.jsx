import React, { useEffect } from 'react';
import { intro } from '../data/content';

const Hero = () => {
  useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.hero-card', '.blur-light');
    });
  }, []);

  let summaryAnimIndex = 0;
  const summaryNodes = Array.from(intro.summary).map((ch, idx) => {
    if (ch === ' ') {
      return (
        <span key={idx} className="drop-space">&nbsp;</span>
      );
    }

    const charIndex = summaryAnimIndex;
    summaryAnimIndex += 1;

    return (
      <span
        key={idx}
        className="drop-char"
        style={{ '--i': charIndex }}
      >
        {ch}
      </span>
    );
  });
  return (
    <section id="home" className="hero">
      <h1 className="hero-title hero-title-outside hero-title-animate">Hi,<br />I am Arpit</h1>
      <div className="hero-card-wrap hero-card-wrap-animate">
        <div className="hero-card" style={{ position: 'relative' }}>
          <div className="blur-light" style={{position:'absolute',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(0,180,255,0.25)',filter:'blur(40px)',pointerEvents:'none',left:'50%',top:'50%',transform:'translate(-50%,-50%)',transition:'left 0.2s, top 0.2s'}}></div>
          <p className="hero-desc hero-summary-drop">{summaryNodes}</p>
        </div>
      </div>
      <p className="hero-tagline hero-tagline-animate">{intro.tagline}</p>
    </section>
  );
};

export default Hero;
