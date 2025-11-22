import React from 'react';
import { FaMoon, FaSun, FaArrowUp } from 'react-icons/fa';

const Navbar = ({ theme = 'dark', onToggleTheme }) => {
  const isDark = theme === 'dark';
  const handleBackToTop = () => {
    const prefersReduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduce ? 'auto' : 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <span className="brand">{"< Hello World ! >"}</span>
        <div className="nav-actions">
          <button
            type="button"
            onClick={handleBackToTop}
            className="action-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <FaArrowUp />
            <span className="toggle-text">Top</span>
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle"
            aria-label={`Activate ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
            <span className="toggle-text">{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
