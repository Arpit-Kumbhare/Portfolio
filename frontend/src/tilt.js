// tilt.js
// Utility for 3D tilt and blur light effect

export function applyTiltEffect(cardSelector, blurSelector) {
  const prefersReduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll(cardSelector).forEach((card) => {
    // Spotlight defaults
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
    card.style.setProperty('--glow-opacity', '0');
    card.style.setProperty('--border-opacity', '0');
    card.style.setProperty('--edge', '0');

    // Needed for the pseudo-element glow + clipping
    card.style.position = card.style.position || 'relative';

    // Make the transform feel genuinely 3D.
    card.style.transformStyle = 'preserve-3d';
    card.style.transformOrigin = 'center';

    const config = {
      perspective: 900,
      maxRotate: 9, // degrees
      depth: 18, // px
      scale: 1.018,
      shadowAmp: 18, // px
    };

    let rafId = 0;
    let latestPoint = null;

    const apply3d = () => {
      rafId = 0;
      if (!latestPoint) return;

      const rect = card.getBoundingClientRect();
      const x = latestPoint.clientX - rect.left;
      const y = latestPoint.clientY - rect.top;

      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);

      // Edge proximity: 0 (center) -> 1 (near border). Used to boost border reflection.
      const edgeThreshold = 46; // px region near edges to ramp up reflection
      const minToEdge = Math.min(x, y, rect.width - x, rect.height - y);
      const edge = 1 - Math.min(1, Math.max(0, minToEdge / edgeThreshold));
      card.style.setProperty('--edge', String(edge));

      if (prefersReduce) return;

      const nx = rect.width ? (x / rect.width - 0.5) : 0;
      const ny = rect.height ? (y / rect.height - 0.5) : 0;

      const rotateY = nx * config.maxRotate;
      const rotateX = -ny * config.maxRotate;

      // Subtle, dynamic shadow offset sells the depth.
      const isLightTheme =
        typeof document !== 'undefined' &&
        document.documentElement &&
        document.documentElement.getAttribute('data-theme') === 'light';

      const shadowAmp = isLightTheme ? config.shadowAmp * 0.55 : config.shadowAmp;
      const sx = nx * shadowAmp;
      const sy = ny * shadowAmp;

      card.style.transform =
        `perspective(${config.perspective}px) ` +
        `rotateX(${rotateX.toFixed(2)}deg) ` +
        `rotateY(${rotateY.toFixed(2)}deg) ` +
        `translateZ(${config.depth}px) ` +
        `scale3d(${config.scale}, ${config.scale}, ${config.scale})`;
      card.style.transition = 'transform 80ms cubic-bezier(.2,.8,.2,1)';
      const shadowBlur = isLightTheme ? 26 : 42;
      const shadowAlpha = isLightTheme ? 0.14 : 0.32;
      card.style.boxShadow = `${sx.toFixed(1)}px ${sy.toFixed(1)}px ${shadowBlur}px rgba(0,0,0,${shadowAlpha})`;
    };

    const schedule = (e) => {
      latestPoint = { clientX: e.clientX, clientY: e.clientY };
      if (rafId) return;
      rafId = requestAnimationFrame(apply3d);
    };

    const onPointerEnter = (e) => {
      card.style.setProperty('--glow-opacity', '1');
      card.style.setProperty('--border-opacity', '1');
      schedule(e);
    };

    const onPointerMove = (e) => {
      schedule(e);
    };

    const onPointerLeave = () => {
      card.style.setProperty('--glow-opacity', '0');
      card.style.setProperty('--border-opacity', '0');
      if (!prefersReduce) {
        card.style.transform = `perspective(${config.perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 420ms cubic-bezier(.2,.8,.2,1)';
        card.style.boxShadow = '';
      }
    };

    card.addEventListener('pointerenter', onPointerEnter);
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerleave', onPointerLeave);
  });
}
