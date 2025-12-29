import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Dock from './components/Dock.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

// Placeholder; implemented in next step.
const BlogsPage = React.lazy(() => import('./pages/Blogs.jsx'));

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Let route render before scrolling.
    const t = setTimeout(() => {
      const hash = location.hash?.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      // When navigating between top-level routes without a hash, reset to top.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Always load in DARK mode for every visitor/session.
    setTheme('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <ScrollToHash />
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </React.Suspense>
      <Dock />
    </>
  );
}

export default App;
