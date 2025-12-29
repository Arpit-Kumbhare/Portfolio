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
    const normalized = w.replace(/[^\p{L}\p{N}]+/gu, '');

    const forceHighlight = new Set(['focus', 'performance', 'usability', 'clean']);
    const neverHighlight = new Set(['architecture']);

    if (forceHighlight.has(normalized)) return true;
    if (neverHighlight.has(normalized)) return false;

    const stop = new Set([
      'a', 'an', 'the', 'and', 'or', 'to', 'in', 'of', 'for', 'on', 'with', 'at',
      'i', "i'm", 'im', 'am', 'is', 'are', 'as', 'my', 'your', 'you'
    ]);

    // Avoid highlighting tiny/common connector words.
    if (!normalized || normalized.length <= 3 || stop.has(w)) return false;

    // Deterministic hash so highlights look random but stay stable across renders.
    let h = 2166136261;
    const s = `${normalized}:${wordIndex}`;
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

  const tagline = String(intro.tagline ?? '');

  const wrapPhrases = (text, phrases) => {
    const nodes = [];
    let pos = 0;

    while (pos < text.length) {
      let next = null;

      for (const p of phrases) {
        const i = text.indexOf(p.phrase, pos);
        if (i === -1) continue;
        if (!next || i < next.index) next = { index: i, phrase: p.phrase, className: p.className };
      }

      if (!next) {
        nodes.push(text.slice(pos));
        break;
      }

      if (next.index > pos) nodes.push(text.slice(pos, next.index));
      nodes.push(
        <span key={`${next.className}-${next.index}`} className={next.className}>
          {next.phrase}
        </span>
      );
      pos = next.index + next.phrase.length;
    }

    return nodes;
  };

  const taglineNode = wrapPhrases(tagline, [
    { phrase: 'Full Stack', className: 'tagline-accent-blue' },
    { phrase: 'Web Developer', className: 'tagline-accent-red' },
  ]);
  return (
    <section id="home" className="hero">
      <h1 className="hero-title hero-title-outside hero-title-animate">Hi,<br />I am Arpit</h1>
      <p className="hero-tagline hero-tagline-animate">{taglineNode}</p>
      <div className="hero-card-wrap hero-card-wrap-animate">
        <div className="hero-card" style={{ position: 'relative' }}>
          <p className="hero-desc hero-summary-drop">{summaryNodes}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
