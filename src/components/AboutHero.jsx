import React from 'react';
import './AboutHero.css';

export default function AboutHero({ data }) {
  if (!data) return null;

  return (
    <section data-component="aboutHero" className="aboutHero-section">

      {/* ── TOP ZONE — dark background, all text is --text-inverse ── */}
      <div className="aboutHero-top-zone">

        {/* Decorative dot-grid overlay on dark zone */}
        <div className="aboutHero-dot-grid" aria-hidden="true" />

        {/* Color-cycling top stripe */}
        <div className="aboutHero-color-stripe" aria-hidden="true" />

        {/* Floating orbs (decorative only) */}
        <div className="aboutHero-orb aboutHero-orb--1" aria-hidden="true" />
        <div className="aboutHero-orb aboutHero-orb--2" aria-hidden="true" />

        {/* Swiss grid vertical lines */}
        <div className="aboutHero-grid-lines" aria-hidden="true">
          <div className="grid-line grid-line--v1" />
          <div className="grid-line grid-line--v2" />
        </div>

        <div className="aboutHero-top-inner">

          {/* Badge row + micro-stat */}
          <div className="aboutHero-top-row">
            <div className="aboutHero-badge">
              <span className="aboutHero-badge-dot" />
              <span>Our Story &amp; Mission</span>
            </div>
            <div className="aboutHero-micro-stat">
              <span className="micro-stat-number">12+</span>
              <span className="micro-stat-label">Years Financing</span>
            </div>
          </div>

          {/* Giant headline */}
          {data.headline && (
            <h1 className="aboutHero-headline font-heading">
              {data.headline}
            </h1>
          )}

          {/* Color-cycling accent rule */}
          <div className="aboutHero-accent-rule" aria-hidden="true" />

        </div>
      </div>

      {/* ── BOTTOM ZONE — light background, all text is --text-primary ── */}
      <div className="aboutHero-bottom-zone">

        <div className="aboutHero-bottom-inner">

          {/* Left column: subheadline + CTAs */}
          <div className="aboutHero-lower-left">
            {data.subheadline && (
              <p className="aboutHero-subheadline font-body">
                {data.subheadline}
              </p>
            )}
            <div className="aboutHero-cta-wrap">
              <a href="/contact" className="aboutHero-cta-btn">
                <span>Start Your Journey</span>
                <svg className="cta-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.75 9H14.25M9 3.75L14.25 9L9 14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/about#mission" className="aboutHero-cta-secondary font-body">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right column: staggered stat boxes */}
          <div className="aboutHero-lower-right">
            <div className="aboutHero-stat-box aboutHero-stat-box--1">
              <span className="stat-box-number font-heading">$2.4B+</span>
              <span className="stat-box-label">Loans Funded</span>
            </div>
            <div className="aboutHero-stat-box aboutHero-stat-box--2">
              <span className="stat-box-number font-heading">98%</span>
              <span className="stat-box-label">Approval Rate</span>
            </div>
            <div className="aboutHero-stat-box aboutHero-stat-box--3">
              <span className="stat-box-number font-heading">150k+</span>
              <span className="stat-box-label">Happy Drivers</span>
            </div>
          </div>

        </div>

        {/* Testimonial strip */}
        <div className="aboutHero-testimonial-strip">
          <div className="testimonial-strip-inner">

            <div className="testimonial-rating">
              <span className="testimonial-stars" aria-label="5 stars">★★★★★</span>
              <span className="testimonial-score">4.9 / 5</span>
              <span className="testimonial-count">2,400+ reviews</span>
            </div>

            <div className="testimonial-divider" />

            <blockquote className="testimonial-quote">
              &ldquo;DriveRight made financing my car completely stress-free — no surprises, no fine print, just a genuinely great rate.&rdquo;
            </blockquote>

            <div className="testimonial-divider" />

            <div className="testimonial-meta">
              <span className="testimonial-author">Sarah M.</span>
              <span className="testimonial-role">Verified Customer</span>
              <span className="testimonial-badge">Trustpilot</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
