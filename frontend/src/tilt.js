// tilt.js
// Utility for 3D tilt and blur light effect

export function applyTiltEffect(cardSelector, blurSelector) {
  document.querySelectorAll(cardSelector).forEach(card => {
    let blurLight;
    if (blurSelector) {
      blurLight = card.querySelector(blurSelector);
      if (!blurLight) {
        blurLight = document.createElement('div');
        blurLight.className = 'blur-light';
        card.appendChild(blurLight);
      }
    }
    card.style.perspective = '1000px';
    card.style.position = 'relative';
    card.addEventListener('mouseenter', (e) => {
      if (blurLight) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        blurLight.style.transition = 'opacity 0.3s';
        blurLight.style.left = `${x}px`;
        blurLight.style.top = `${y}px`;
        blurLight.style.opacity = '1';
      }
    });
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 30; // Lower intensity
      const rotateY = (x - centerX) / 30;  // Lower intensity
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
      card.style.transition = 'transform 0.12s cubic-bezier(.03,.98,.52,.99)';
      if (blurLight) {
        blurLight.style.transition = 'left 0.08s, top 0.08s, opacity 0.3s';
        blurLight.style.left = `${x}px`;
        blurLight.style.top = `${y}px`;
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      card.style.transition = 'transform 0.5s cubic-bezier(.03,.98,.52,.99)';
      if (blurLight) {
        blurLight.style.transition = 'opacity 0.3s';
        blurLight.style.opacity = '0';
      }
    });
  });
}
