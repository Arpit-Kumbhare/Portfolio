import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaBriefcase, FaEnvelope, FaPenNib } from 'react-icons/fa';

const items = [
  { id: 'home', icon: <FaHome />, label: 'Home', to: '/' },
  { id: 'about', icon: <FaUser />, label: 'About' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'projects', icon: <FaFolderOpen />, label: 'Projects' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  { id: 'blogs', icon: <FaPenNib />, label: 'Blogs', to: '/blogs' },
];

const Dock = () => {
  const iconRefs = useRef([]);
  const [scales, setScales] = useState(items.map(() => 1));
  const [isHover, setIsHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouching, setIsTouching] = useState(false);

  const updateScales = (x) => {
    const sigma = 95; // smoother, slightly wider spread
    const amp = 0.6;  // increase peak scale for larger hover growth
    
    let closestIndex = null;
    let minDistance = Infinity;

    const next = iconRefs.current.map((el, idx) => {
      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const d = Math.abs(cx - x);
      
      if (d < minDistance) {
        minDistance = d;
        closestIndex = idx;
      }

      const s = 1 + amp * Math.exp(-(d * d) / (2 * sigma * sigma));
      return s;
    });
    
    setScales(next);
    // Only set active if within a reasonable distance (e.g., 150px)
    setActiveIndex(minDistance < 150 ? closestIndex : null);
  };

  const handleMouseMove = (e) => {
    updateScales(e.clientX);
  };

  const handleTouchMove = (e) => {
    // Prevent default to stop scrolling while dragging on dock if desired, 
    // but usually for a dock you might want to allow scrolling if not interacting.
    // However, for this specific "drag to scale" effect, we likely want to capture the move.
    // e.preventDefault(); // Optional: decide if we want to block scroll. 
    // For now, let's just update scales.
    if (e.touches[0]) {
      updateScales(e.touches[0].clientX);
    }
  };

  const handleTouchStart = (e) => {
    setIsHover(true);
    setIsTouching(true);
    if (e.touches[0]) {
      updateScales(e.touches[0].clientX);
    }
  };

  const handleMouseLeave = () => {
    setScales(items.map(() => 1));
    setIsHover(false);
    setActiveIndex(null);
    setIsTouching(false);
  };

  const totalDelta = scales.reduce((acc, s) => acc + (s - 1), 0);
  // Slightly reduce how much the dock widens on hover
  const padDelta = Math.min(90, Math.max(0, totalDelta * 10)) + (isHover ? 8 : 0);

  return (
    <div
      className="dock"
      onMouseEnter={() => setIsHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{ 
        padding: `0.6rem calc(0.85rem + ${padDelta}px)`, 
        touchAction: 'none',
        // Disable padding transition during interaction for instant follow, enable it on leave for smooth reset
        transitionProperty: isTouching ? 'background, border-color, transform' : undefined
      }}
    >
      {items.map((item, idx) => {
        const scale = scales[idx] ?? 1;
        const lift = -(scale - 1) * 16; // lift proportional to scale
        const isActive = idx === activeIndex;
        const to = item.to ?? `/#${item.id}`;
        return (
          <Link key={item.id} to={to} className="dock-item" aria-label={item.label}>
            <span
              className="dock-icon"
              ref={(el) => (iconRefs.current[idx] = el)}
              style={{ transform: `translateY(${lift}px) scale(${scale})` }}
            >
              {item.icon}
            </span>
            <span 
              className="dock-tip"
              style={{ 
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease'
              }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Dock;
