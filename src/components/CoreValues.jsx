import React from 'react';
import './CoreValues.css';

const ICONS = {
  'shield-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  'users': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  'star': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  'heart': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  'zap': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  'award': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  'trending-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  'lock': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
};

function ValueIcon({ name }) {
  const icon = ICONS[name] || ICONS['star'];
  return icon;
}

export default function CoreValues({ data }) {
  if (!data) return null;

  const { sectionTitle, sectionSubtitle, values = [] } = data;

  return (
    <section data-component="coreValues" className="cv-section">
      {/* Background pattern layer */}
      <div className="cv-bg-dots" aria-hidden="true" />
      <div className="cv-bg-grid" aria-hidden="true" />

      {/* Decorative cinematic orbs */}
      <div className="cv-orb cv-orb-1" aria-hidden="true" />
      <div className="cv-orb cv-orb-2" aria-hidden="true" />
      <div className="cv-orb cv-orb-3" aria-hidden="true" />

      {/* Decorative accent bars */}
      <div className="cv-bar cv-bar-top" aria-hidden="true" />
      <div className="cv-bar cv-bar-bottom" aria-hidden="true" />

      <div className="cv-container">
        {/* Section header */}
        <header className="cv-header">
          <div className="cv-eyebrow">
            <span className="cv-eyebrow-line" />
            <span className="cv-eyebrow-text">Our Principles</span>
            <span className="cv-eyebrow-line" />
          </div>

          {sectionTitle && (
            <h2 className="cv-title font-heading">{sectionTitle}</h2>
          )}

          {sectionSubtitle && (
            <p className="cv-subtitle font-body">{sectionSubtitle}</p>
          )}
        </header>

        {/* Values grid — floating panels */}
        {values.length > 0 && (
          <div className="cv-grid">
            {values.map((value, i) => (
              <div
                key={i}
                className="cv-card-wrapper"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Gradient border glow frame */}
                <div className="cv-card-glow-frame" aria-hidden="true" />

                <div className="cv-card">
                  {/* Holographic icon badge */}
                  <div className="cv-icon-outer">
                    <div className="cv-icon-holo" aria-hidden="true" />
                    <div className="cv-icon-inner">
                      <ValueIcon name={value.iconName} />
                    </div>
                  </div>

                  {/* Index number — cinematic detail */}
                  <span className="cv-card-index font-heading">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {value.title && (
                    <h3 className="cv-value-title font-heading">{value.title}</h3>
                  )}

                  {value.description && (
                    <p className="cv-value-desc font-body">{value.description}</p>
                  )}

                  {/* Accent line at bottom */}
                  <div className="cv-card-accent-line" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
