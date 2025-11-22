import React, { useRef, useState } from 'react';
import { FaUser, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const items = [
  { id: 'about', icon: <FaUser />, label: 'About' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'projects', icon: <FaFolderOpen />, label: 'Projects' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Dock = () => {
  const iconRefs = useRef([]);
  const [scales, setScales] = useState(items.map(() => 1));
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const sigma = 95; // smoother, slightly wider spread
    const amp = 0.6;  // increase peak scale for larger hover growth
    const next = iconRefs.current.map((el) => {
      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const d = Math.abs(cx - x);
      const s = 1 + amp * Math.exp(-(d * d) / (2 * sigma * sigma));
      return s;
    });
    setScales(next);
  };

  const handleMouseLeave = () => {
    setScales(items.map(() => 1));
    setIsHover(false);
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
      style={{ padding: `0.6rem calc(0.85rem + ${padDelta}px)` }}
    >
      {items.map((item, idx) => {
        const scale = scales[idx] ?? 1;
        const lift = -(scale - 1) * 16; // lift proportional to scale
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="dock-item"
            aria-label={item.label}
          >
            <span
              className="dock-icon"
              ref={(el) => (iconRefs.current[idx] = el)}
              style={{ transform: `translateY(${lift}px) scale(${scale})` }}
            >
              {item.icon}
            </span>
            <span className="dock-tip">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Dock;
