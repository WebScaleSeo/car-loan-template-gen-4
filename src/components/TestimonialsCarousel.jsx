import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';

export default function TestimonialsCarousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animKey, setAnimKey] = useState(0);

  if (!data) return null;

  const { sectionTitle, sectionSubtitle, testimonials } = data;
  const total = testimonials?.length || 0;

  const goTo = (index, dir = 'next') => {
    setDirection(dir);
    setAnimKey(k => k + 1);
    setActiveIndex(index);
  };

  const goNext = () => {
    goTo((activeIndex + 1) % total, 'next');
  };

  const goPrev = () => {
    goTo((activeIndex - 1 + total) % total, 'prev');
  };

  const current = testimonials?.[activeIndex];

  return (
    <section data-component="testimonialsCarousel" className="tc-section">
      {/* Decorative morphing background blobs */}
      <div className="tc-blob tc-blob-1" aria-hidden="true"></div>
      <div className="tc-blob tc-blob-2" aria-hidden="true"></div>
      <div className="tc-blob tc-blob-3" aria-hidden="true"></div>

      {/* Decorative dot grid */}
      <div className="tc-dot-grid" aria-hidden="true"></div>

      <div className="tc-container">
        {/* Header area */}
        <header className="tc-header">
          <div className="tc-oversize-deco" aria-hidden="true">"</div>
          {sectionTitle && (
            <h2 className="tc-title font-heading">{sectionTitle}</h2>
          )}
          {sectionSubtitle && (
            <p className="tc-subtitle font-body">{sectionSubtitle}</p>
          )}
        </header>

        {/* Carousel */}
        {testimonials && total > 0 && (
          <div className="tc-carousel-wrapper">
            {/* Prev button */}
            <button
              className="tc-nav-btn tc-nav-btn--prev"
              onClick={goPrev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Floating panel */}
            <div className="tc-panel-track">
              <article
                key={`${activeIndex}-${animKey}`}
                className={`tc-panel tc-panel--${direction}`}
              >
                {/* Giant decorative quote */}
                <span className="tc-panel-quote-deco" aria-hidden="true">"</span>

                {/* Stars */}
                <div className="tc-stars" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="tc-star">★</span>
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="tc-quote font-body">
                  {current.quote}
                </blockquote>

                {/* Author */}
                <div className="tc-author">
                  <div className="tc-author-avatar" aria-hidden="true">
                    {current.authorName.charAt(0)}
                  </div>
                  <div className="tc-author-meta">
                    <span className="tc-author-name font-heading">{current.authorName}</span>
                    <span className="tc-author-detail font-body">{current.authorDetail}</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Next button */}
            <button
              className="tc-nav-btn tc-nav-btn--next"
              onClick={goNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Dot indicators */}
        {testimonials && total > 1 && (
          <div className="tc-dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`tc-dot${i === activeIndex ? ' tc-dot--active' : ''}`}
                onClick={() => goTo(i, i > activeIndex ? 'next' : 'prev')}
                aria-label={`Go to testimonial ${i + 1}`}
                role="tab"
                aria-selected={i === activeIndex}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <div className="tc-counter font-body">
          <span className="tc-counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="tc-counter-sep"> / </span>
          <span className="tc-counter-total">{String(total).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
