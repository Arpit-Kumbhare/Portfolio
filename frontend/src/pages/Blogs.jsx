import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { blogs } from '../data/blogs.js';

function formatDateTime(isoString) {
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return isoString;
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(d);
}

export default function Blogs() {
  const cardRefs = useRef(new Map());
  const [activeId, setActiveId] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const [animPhase, setAnimPhase] = useState('idle'); // 'idle' | 'opening' | 'open' | 'closing'
  const [contentVisible, setContentVisible] = useState(false);

  const activePost = useMemo(
    () => blogs.find(b => b.id === activeId) || null,
    [activeId]
  );

  useEffect(() => {
    import('../tilt').then(({ applyTiltEffect }) => {
      applyTiltEffect('.blog-card', '.blur-light');
    });
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeId]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && activeId) requestClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeId]);

  const openPost = (id) => {
    if (animPhase !== 'idle') return;
    const el = cardRefs.current.get(id);
    setContentVisible(false);
    if (!el) {
      setActiveId(id);
      return;
    }
    const rect = el.getBoundingClientRect();
    setOriginRect(rect);
    setAnimPhase('opening');
    setActiveId(id);
  };

  // FLIP-style animation for modal card: start at origin rect, then transition to centered target.
  useLayoutEffect(() => {
    const modal = document.querySelector('.blog-modal');
    const overlay = document.querySelector('.blog-overlay');
    if (!modal || !overlay || !activeId) return;

    const origin = originRect;
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const targetW = Math.min(860, Math.max(320, Math.round(viewportW * 0.9)));
    const targetH = Math.min(Math.round(viewportH * 0.82), 720);
    const targetLeft = Math.round((viewportW - targetW) / 2);
    const targetTop = Math.round((viewportH - targetH) / 2);

    const applyRect = (r) => {
      modal.style.left = `${Math.round(r.left)}px`;
      modal.style.top = `${Math.round(r.top)}px`;
      modal.style.width = `${Math.round(r.width)}px`;
      modal.style.height = `${Math.round(r.height)}px`;
    };

    overlay.classList.add('is-visible');
    modal.classList.remove('is-closing');
    modal.classList.add('is-opening');

    if (origin) applyRect(origin);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        applyRect({ left: targetLeft, top: targetTop, width: targetW, height: targetH });
      });
    });
  }, [activeId, originRect]);

  // When closing: animate modal back to origin, then clear state.
  useEffect(() => {
    if (!activeId) return;

    const modal = document.querySelector('.blog-modal');
    const overlay = document.querySelector('.blog-overlay');
    if (!modal || !overlay) return;

    const handleTransitionEnd = (e) => {
      if (e.target !== modal) return;

      if (animPhase === 'opening') {
        modal.classList.remove('is-opening');
        setAnimPhase('open');
        // Show content only after geometry animation ends.
        setContentVisible(true);
        return;
      }

      if (animPhase === 'closing') {
        overlay.classList.remove('is-visible');
        modal.classList.remove('is-closing');
        setActiveId(null);
        setOriginRect(null);
        setAnimPhase('idle');
        setContentVisible(false);
      }
    };

    modal.addEventListener('transitionend', handleTransitionEnd);
    return () => modal.removeEventListener('transitionend', handleTransitionEnd);
  }, [activeId, animPhase]);

  const requestClose = () => {
    if (!activeId) return;
    if (animPhase !== 'open') return;

    const modal = document.querySelector('.blog-modal');
    const overlay = document.querySelector('.blog-overlay');
    if (!modal || !overlay) {
      setActiveId(null);
      setOriginRect(null);
      setAnimPhase('idle');
      setContentVisible(false);
      return;
    }

    // Recompute origin rect so close animation returns to the correct card position even after scroll.
    const cardEl = cardRefs.current.get(activeId);
    const origin = cardEl ? cardEl.getBoundingClientRect() : originRect;
    if (origin) {
      setContentVisible(false);
      setAnimPhase('closing');
      modal.classList.remove('is-opening');
      modal.classList.add('is-closing');
      modal.style.left = `${Math.round(origin.left)}px`;
      modal.style.top = `${Math.round(origin.top)}px`;
      modal.style.width = `${Math.round(origin.width)}px`;
      modal.style.height = `${Math.round(origin.height)}px`;
    } else {
      overlay.classList.remove('is-visible');
      setActiveId(null);
      setOriginRect(null);
      setAnimPhase('idle');
      setContentVisible(false);
    }
  };

  return (
    <main>
      <section className="section">
        <SectionTitle>Blogs</SectionTitle>
        <div className="grid">
          {blogs.map((b) => (
            <button
              key={b.id}
              type="button"
              className="card blog-card blog-card-btn"
              onClick={() => openPost(b.id)}
              ref={(el) => {
                if (el) cardRefs.current.set(b.id, el);
                else cardRefs.current.delete(b.id);
              }}
            >
              <h3>{b.topic}</h3>
              <p>{b.excerpt}</p>
              <div className="tags">
                <span>Created: {formatDateTime(b.createdAt)}</span>
              </div>
              <span className="ext">Read</span>
            </button>
          ))}
        </div>
      </section>

      {activePost && (
        <div
          className="blog-overlay"
          role="presentation"
          onMouseDown={(e) => {
            // Click outside closes
            if (e.target === e.currentTarget) {
              requestClose();
            }
          }}
        >
          <article
            className="card blog-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activePost.topic}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="blog-modal-header">
              <h3>{activePost.topic}</h3>
              <button
                type="button"
                className="action-btn blog-close"
                onClick={requestClose}
                disabled={animPhase !== 'open'}
              >
                Close
              </button>
            </div>
            <div className="tags">
              <span>Created: {formatDateTime(activePost.createdAt)}</span>
            </div>
            <div className="blog-modal-body">
              <div className={contentVisible ? 'blog-content is-visible' : 'blog-content'}>
                {Array.isArray(activePost.content)
                  ? activePost.content.map((para, i) => (
                      <p key={i} className="body-text blog-paragraph">
                        {para}
                      </p>
                    ))
                  : (
                      <p className="body-text blog-paragraph">{activePost.content}</p>
                    )}
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
