import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const dockRef = useRef(null);
  const iconRefs = useRef([]);
  const tipRefs = useRef([]);
  const rafIdRef = useRef(0);
  const lastXRef = useRef(null);
  const hoverRef = useRef(false);
  const touchingRef = useRef(false);
  const vwRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const padConfig = useMemo(() => {
    const vw = vwRef.current;
    const padCap = vw <= 420 ? 22 : vw <= 650 ? 34 : 90;
    const padGain = vw <= 650 ? 6 : 10;
    return { padCap, padGain };
  }, []);

  useEffect(() => {
    const onResize = () => {
      vwRef.current = window.innerWidth;
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const setTipActive = (idx) => {
    tipRefs.current.forEach((el, i) => {
      if (!el) return;
      const active = i === idx;
      el.style.opacity = active ? '1' : '0';
      el.style.visibility = active ? 'visible' : 'hidden';
    });
  };

  const setDockPadding = (totalDelta) => {
    const el = dockRef.current;
    if (!el) return;

    const vw = vwRef.current;
    const padCap = vw <= 420 ? 22 : vw <= 650 ? 34 : 90;
    const padGain = vw <= 650 ? 6 : 10;
    const padDelta = Math.min(padCap, Math.max(0, totalDelta * padGain)) + (hoverRef.current ? 8 : 0);

    el.style.padding = `0.6rem calc(0.85rem + ${padDelta}px)`;
    el.style.touchAction = 'none';
    // Disable padding transition during interaction for instant follow, enable it on leave for smooth reset
    el.style.transitionProperty = touchingRef.current ? 'background, border-color, transform' : '';
  };

  const resetDock = () => {
    hoverRef.current = false;
    touchingRef.current = false;
    lastXRef.current = null;

    iconRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = 'translateY(0px) scale(1)';
    });
    setTipActive(null);
    setDockPadding(0);
  };

  const applyScalesAtX = (x) => {
    const sigma = 95;
    const amp = 0.6;

    let closestIndex = null;
    let minDistance = Infinity;
    let totalDelta = 0;

    iconRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const d = Math.abs(cx - x);

      if (d < minDistance) {
        minDistance = d;
        closestIndex = idx;
      }

      const s = 1 + amp * Math.exp(-(d * d) / (2 * sigma * sigma));
      const lift = -(s - 1) * 16;
      totalDelta += (s - 1);
      el.style.transform = `translateY(${lift}px) scale(${s})`;
    });

    setDockPadding(totalDelta);
    setTipActive(minDistance < 150 ? closestIndex : null);
  };

  const scheduleUpdate = (x) => {
    lastXRef.current = x;
    if (rafIdRef.current) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = 0;
      if (lastXRef.current == null) return;
      applyScalesAtX(lastXRef.current);
    });
  };

  const handleMouseMove = (e) => {
    scheduleUpdate(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      scheduleUpdate(e.touches[0].clientX);
    }
  };

  const handleTouchStart = (e) => {
    hoverRef.current = true;
    touchingRef.current = true;
    if (e.touches[0]) {
      scheduleUpdate(e.touches[0].clientX);
    }
  };

  const handleMouseLeave = () => {
    resetDock();
  };

  const getScrollBehavior = () => {
    const prefersReduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReduce ? 'auto' : 'smooth';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
  };

  const handleDockClick = (e, item) => {
    // Home: always return to the initial landing state (top, no hash)
    if (item.id === 'home') {
      e.preventDefault();

      if (location.pathname !== '/') {
        navigate('/');
      }

      // Ensure hash is cleared so the URL matches first-load state.
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', '/');
      }

      // Scroll after navigation/microtask.
      setTimeout(scrollToTop, 0);
      return;
    }

    // Section anchors: if user clicks the same section again, force scroll.
    if (!item.to) {
      const targetHash = `#${item.id}`;
      if (location.pathname === '/' && location.hash === targetHash) {
        e.preventDefault();
        scrollToId(item.id);
      }
    }
  };

  return (
    <div
      className="dock"
      ref={dockRef}
      onMouseEnter={(e) => { hoverRef.current = true; scheduleUpdate(e.clientX); }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {items.map((item, idx) => {
        const to = item.to ?? `/#${item.id}`;
        return (
          <Link
            key={item.id}
            to={to}
            className="dock-item"
            aria-label={item.label}
            onClick={(e) => handleDockClick(e, item)}
          >
            <span
              className="dock-icon"
              ref={(el) => (iconRefs.current[idx] = el)}
            >
              {item.icon}
            </span>
            <span 
              className="dock-tip"
              ref={(el) => (tipRefs.current[idx] = el)}
              style={{ 
                opacity: 0,
                visibility: 'hidden',
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
