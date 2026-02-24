import React from 'react';
import './ContactExpectations.css';

const ICONS = {
  inbox: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
};

export default function ContactExpectations({ data }) {
  if (!data) return null;
  const steps = data.steps || [];

  return (
    <section data-component="contactExpectations" className="ce-section">
      {/* Layered background: dot pattern + noise grain */}
      <div className="ce-pattern" aria-hidden="true" />
      <div className="ce-noise" aria-hidden="true" />

      {/* Split-tone ambient glows for cinematic depth */}
      <div className="ce-glow ce-glow--left" aria-hidden="true" />
      <div className="ce-glow ce-glow--right" aria-hidden="true" />

      {/* Decorative oversized vertical text bleeding out of section */}
      <div className="ce-decor-word" aria-hidden="true">PROCESS</div>

      <div className="ce-container">
        {/* Section header */}
        {data.sectionTitle && (
          <div className="ce-header">
            <div className="ce-eyebrow">
              <span className="ce-eyebrow-line" />
              <span className="ce-eyebrow-text">Our Process</span>
              <span className="ce-eyebrow-line" />
            </div>
            <h2 className="ce-title">
              {data.sectionTitle}
            </h2>
            <div className="ce-title-underline" aria-hidden="true" />
          </div>
        )}

        {/* Steps grid with staggered offset layout */}
        {steps.length > 0 && (
          <div className="ce-grid">
            {steps.map((step, i) => {
              const icon = ICONS[step.iconName] || ICONS.check;
              const isOffset = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`ce-step ${isOffset ? 'ce-step--offset' : ''}`}
                  style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                >
                  {/* Gradient border glow wrapper */}
                  <div className="ce-step-glow-ring" aria-hidden="true" />
                  <div className="ce-step-card">
                    {/* Decorative step number — visible accent watermark */}
                    <span className="ce-step-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Top accent bar */}
                    <div className="ce-step-topbar" aria-hidden="true" />

                    {/* Icon badge */}
                    <div className="ce-step-icon">
                      {icon}
                    </div>

                    {/* Content */}
                    <div className="ce-step-body">
                      {step.title && (
                        <h3 className="ce-step-title">{step.title}</h3>
                      )}
                      {step.name && (
                        <h3 className="ce-step-title">{step.name}</h3>
                      )}
                      {step.label && (
                        <span className="ce-step-label">{step.label}</span>
                      )}
                      {step.description && (
                        <p className="ce-step-desc">{step.description}</p>
                      )}
                      {step.text && (
                        <p className="ce-step-desc">{step.text}</p>
                      )}
                      {step.answer && (
                        <p className="ce-step-desc">{step.answer}</p>
                      )}
                      {step.quote && (
                        <blockquote className="ce-step-quote">{step.quote}</blockquote>
                      )}
                      {step.value && (
                        <span className="ce-step-value">{step.value}</span>
                      )}
                    </div>

                    {/* Connector indicator */}
                    {i < steps.length - 1 && (
                      <div className="ce-step-connector" aria-hidden="true">
                        <span className="ce-connector-dot" />
                        <span className="ce-connector-dot" />
                        <span className="ce-connector-dot" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
