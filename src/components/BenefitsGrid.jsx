import React from 'react';
import './BenefitsGrid.css';

const ICONS = {
  'dollar-sign': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  'clock': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  'shield': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'star': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  'thumbs-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  ),
  'trending-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

function getIcon(name) {
  return ICONS[name] || ICONS['star'];
}

export default function BenefitsGrid({ data }) {
  if (!data) return null;

  return (
    <section data-component="benefitsGrid" className="bg-section">
      {/* Noise grain overlay */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Decorative radial glows */}
      <div className="bg-orb bg-orb--tl" aria-hidden="true" />
      <div className="bg-orb bg-orb--br" aria-hidden="true" />
      <div className="bg-orb bg-orb--center" aria-hidden="true" />

      {/* Diagonal ribbon banner across section */}
      <div className="section-banner-ribbon" aria-hidden="true">
        <span className="font-heading">DRIVE RIGHT — SMART FINANCING — DRIVE RIGHT — SMART FINANCING — DRIVE RIGHT — SMART FINANCING —</span>
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 3 }}>
        {/* Header */}
        <div className="section-header">
          <div className="header-badge font-heading">
            <span className="badge-dash" aria-hidden="true" />
            WHY DRIVE RIGHT
            <span className="badge-dash" aria-hidden="true" />
          </div>

          {data.sectionTitle && (
            <h2 className="section-heading font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="section-subheading font-body">{data.sectionSubtitle}</p>
          )}
        </div>

        {/* Benefits grid */}
        {data.benefits && Array.isArray(data.benefits) && (
          <div className="benefits-grid">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className={`benefit-card benefit-card--mod${i % 3} font-body`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Top ribbon accent */}
                <div className={`card-top-ribbon card-top-ribbon--${i % 3}`} aria-hidden="true" />

                {/* Corner ribbon */}
                <div className="card-corner-badge font-heading" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="card-icon-container">
                  <div className="card-icon">
                    {getIcon(benefit.iconName)}
                  </div>
                  <div className="card-icon-glow" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="card-body">
                  {benefit.title && (
                    <h3 className="card-title font-heading">{benefit.title}</h3>
                  )}
                  {benefit.description && (
                    <p className="card-desc">{benefit.description}</p>
                  )}
                </div>

                {/* Hover arrow indicator */}
                <div className="card-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
