import React from 'react';
import './AboutTestimonials.css';

export default function AboutTestimonials({ data }) {
  if (!data) return null;

  return (
    <section data-component="aboutTestimonials" className="at-section">
      {/* Decorative background orbs */}
      <div className="at-bg-orb at-bg-orb--1" aria-hidden="true" />
      <div className="at-bg-orb at-bg-orb--2" aria-hidden="true" />
      <div className="at-bg-orb at-bg-orb--3" aria-hidden="true" />

      {/* Orbital decorative rings */}
      <div className="at-orbital-ring at-orbital-ring--1" aria-hidden="true" />
      <div className="at-orbital-ring at-orbital-ring--2" aria-hidden="true" />

      <div className="at-inner container mx-auto px-6">
        {/* Section header with ribbon/banner accent */}
        {data.sectionTitle && (
          <div className="at-header">
            <div className="at-banner-ribbon" aria-hidden="true">
              <span className="at-banner-ribbon__left" />
              <span className="at-banner-ribbon__right" />
            </div>
            <div className="at-badge font-body">Customer Stories</div>
            <h2 className="at-title font-heading">{data.sectionTitle}</h2>
            <div className="at-title-accent">
              <span className="at-accent-line" />
              <span className="at-accent-dot" />
              <span className="at-accent-line" />
            </div>
          </div>
        )}

        {/* Testimonials in staggered column grid */}
        {data.testimonials && Array.isArray(data.testimonials) && (
          <div className="at-grid">
            {data.testimonials.map((item, i) => (
              <article
                key={i}
                className={`at-card ${i % 2 === 1 ? 'at-card--stagger' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}
              >
                {/* Top ribbon accent */}
                <div className="at-card-ribbon" aria-hidden="true">
                  <span className="at-card-ribbon__tail" />
                </div>

                {/* Decorative quote mark */}
                <div className="at-quote-deco" aria-hidden="true">&ldquo;</div>

                {/* Quote body */}
                {item.quote && (
                  <blockquote className="at-quote font-body">{item.quote}</blockquote>
                )}

                {/* Star rating decoration */}
                <div className="at-stars" aria-label="5 stars">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="at-star">★</span>
                  ))}
                </div>

                {/* Author row */}
                <div className="at-author">
                  <div className="at-author-avatar" aria-hidden="true">
                    {item.authorName ? item.authorName.charAt(0).toUpperCase() : '?'}
                  </div>
                  <div className="at-author-info">
                    {item.authorName && (
                      <span className="at-author-name font-heading">{item.authorName}</span>
                    )}
                    {item.authorDetail && (
                      <span className="at-author-detail font-body">{item.authorDetail}</span>
                    )}
                  </div>
                  <div className="at-verified-badge font-body">Verified</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
