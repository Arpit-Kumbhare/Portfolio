import React, { useEffect } from 'react';
import { intro } from '../data/content';

const Hero = () => {
  useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.hero-card', '.blur-light');
    });
  }, []);

  let summaryAnimIndex = 0;
  const words = String(intro.summary ?? '').split(' ');
  const summaryNodes = words.flatMap((word, wordIndex) => {
    const wordNode = (
      <span key={`w-${wordIndex}`} className="drop-word">
        {Array.from(word).map((ch, charInWordIndex) => {
          const charIndex = summaryAnimIndex;
          summaryAnimIndex += 1;
          return (
            <span
              key={`w-${wordIndex}-c-${charInWordIndex}`}
              className="drop-char"
              style={{ '--i': charIndex }}
            >
              {ch}
            </span>
          );
        })}
      </span>
    );

    // Insert a single breakable space between words (but never split a word).
    if (wordIndex === words.length - 1) return [wordNode];
    return [wordNode, <span key={`s-${wordIndex}`} className="drop-space">&nbsp;</span>];
  });
  return (
    <section id="home" className="hero">
      <h1 className="hero-title hero-title-outside hero-title-animate">Hi,<br />I am Arpit</h1>
      <div className="hero-card-wrap hero-card-wrap-animate">
        <div className="hero-card" style={{ position: 'relative' }}>
          <p className="hero-desc hero-summary-drop">{summaryNodes}</p>
        </div>
      </div>
      <p className="hero-tagline hero-tagline-animate">{intro.tagline}</p>
    </section>
  );
};

export default Hero;
