import React from 'react';
import './HomeCta.css';

export default function HomeCta({ data }) {
  if (!data) return null;

  return (
    <section data-component="homeCta" className="homeCta-section">
      {/* Decorative orbital rings — purely decorative, not content */}
      <div className="homeCta-orbit-ring ring-outer" aria-hidden="true"></div>
      <div className="homeCta-orbit-ring ring-inner" aria-hidden="true"></div>
      <div className="homeCta-orbit-dot dot-a" aria-hidden="true"></div>
      <div className="homeCta-orbit-dot dot-b" aria-hidden="true"></div>
      <div className="homeCta-orbit-dot dot-c" aria-hidden="true"></div>

      {/* Blend mode overlay panel */}
      <div className="homeCta-blend-overlay" aria-hidden="true"></div>

      {/* Grid noise texture */}
      <div className="homeCta-grid-texture" aria-hidden="true"></div>

      <div className="homeCta-container">
        {/* Editorial column layout: label + stroke headline | description + CTA */}
        <div className="homeCta-editorial-grid">

          {/* Left editorial column */}
          <div className="homeCta-left-col">
            <span className="homeCta-eyebrow">DriveRight Financing</span>
            <h2 className="homeCta-headline">
              <span className="headline-stroke">Your Next Car</span>
              <span className="headline-solid">Is Closer Than</span>
              <span className="headline-stroke headline-stroke--accent">You Think</span>
            </h2>
          </div>

          {/* Right editorial column */}
          <div className="homeCta-right-col">
            <div className="homeCta-content-card">
              <div className="homeCta-accent-bar" aria-hidden="true"></div>
              {data.description && (
                <p className="homeCta-description">{data.description}</p>
              )}
              {data.ctaButtonText && data.ctaButtonUrl && (
                <a
                  href={data.ctaButtonUrl}
                  className="homeCta-btn"
                >
                  <span className="btn-text">{data.ctaButtonText}</span>
                  <span className="btn-arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              )}
              <p className="homeCta-footnote">No credit impact to check your rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
