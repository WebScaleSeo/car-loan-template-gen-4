import React from 'react';
import './AboutCta.css';

export default function AboutCta({ data }) {
  if (!data) return null;
  return (
    <section data-component="aboutCta" className="aboutCta-section">
      {/* Layered backgrounds: image + scrim + rotating gradient */}
      <div className="aboutCta-image-bg" />
      <div className="aboutCta-dark-scrim" />
      <div className="aboutCta-rotating-gradient" />

      {/* Angled clip divider at bottom */}
      <div className="aboutCta-angled-bottom" />

      {/* Decorative orbs */}
      <div className="aboutCta-orb aboutCta-orb--1" />
      <div className="aboutCta-orb aboutCta-orb--2" />

      {/* Masked shape accent */}
      <div className="aboutCta-shape-mask" />

      <div className="aboutCta-container">
        <div className="aboutCta-broken-grid">

          {/* Column 1: oversized headline block */}
          <div className="aboutCta-headline-col">
            <div className="aboutCta-eyebrow">
              <span className="aboutCta-eyebrow-line" />
              <span className="aboutCta-eyebrow-text font-body">Auto Financing Experts</span>
            </div>
            <h2 className="aboutCta-headline font-heading">
              {data.headline}
            </h2>
            {/* Decorative big number watermark */}
            <span className="aboutCta-watermark font-heading" aria-hidden="true">CTA</span>
          </div>

          {/* Column 2: frosted glass panel — overlaps grid */}
          <div className="aboutCta-glass-panel">
            <div className="aboutCta-panel-accent" />
            <p className="aboutCta-description font-body">{data.description}</p>
            <a
              href={data.ctaButtonUrl || '/contact'}
              className="aboutCta-cta-btn font-heading"
            >
              <span className="aboutCta-btn-text">{data.ctaButtonText}</span>
              <span className="aboutCta-btn-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
