import React, { useEffect } from 'react';
import { intro } from '../data/content';

const Hero = () => {
  useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.hero-card', '.blur-light');
    });
  }, []);

  const shouldHighlightWord = (word, wordIndex) => {
    const w = String(word || '').toLowerCase();
    const stop = new Set([
      'a', 'an', 'the', 'and', 'or', 'to', 'in', 'of', 'for', 'on', 'with', 'at',
      'i', "i'm", 'im', 'am', 'is', 'are', 'as', 'my', 'your', 'you'
    ]);

    // Avoid highlighting tiny/common connector words.
    if (!w || w.length <= 3 || stop.has(w)) return false;

    // Deterministic hash so highlights look random but stay stable across renders.
    let h = 2166136261;
    const s = `${w}:${wordIndex}`;
    for (let i = 0; i < s.length; i += 1) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }

    // Roughly ~35-40% of eligible words.
    return (h >>> 0) % 8 < 3;
  };

  let summaryAnimIndex = 0;
  const words = String(intro.summary ?? '').split(' ');
  const summaryNodes = words.flatMap((word, wordIndex) => {
    const isHighlight = shouldHighlightWord(word, wordIndex);
    const wordNode = (
      <span
        key={`w-${wordIndex}`}
        className={isHighlight ? 'drop-word drop-word-highlight' : 'drop-word'}
      >
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
