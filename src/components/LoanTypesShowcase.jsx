import React from 'react';
import './LoanTypesShowcase.css';

const IconMap = {
  car: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 14l2.5-7h15l2.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="14" width="26" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="9" cy="24" r="2.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="23" cy="24" r="2.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 19h26" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'percent': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 26L26 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'refresh': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 16C4 9.37 9.37 4 16 4c4.04 0 7.62 1.92 9.9 4.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 16c0 6.63-5.37 12-12 12-4.04 0-7.62-1.92-9.9-4.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 4l1.9 4.9L23 9.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 28l-1.9-4.9L9 22.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'shield': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3l11 4v8c0 6-4.5 11-11 13C5.5 26 5 21 5 15V7l11-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'star': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3l3.4 7L28 11.2l-6 5.8 1.4 8.2L16 21l-7.4 4.2 1.4-8.2-6-5.8 8.6-1.2L16 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  'dollar': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 4v24M11 9.5C11 7 13.2 6 16 6s5 1 5 3.5c0 5-10 4-10 9 0 2.8 2.2 4.5 5 4.5s5-1.7 5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'clock': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 9v7l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

function getIcon(name) {
  if (!name) return IconMap.car;
  const lower = name.toLowerCase();
  return IconMap[lower] || IconMap.car;
}

export default function LoanTypesShowcase({ data }) {
  if (!data) return null;

  const loans = data.loanTypes || [];

  return (
    <section data-component="loanTypesShowcase" className="lts-section">
      {/* Aurora background layers */}
      <div className="lts-aurora-base" aria-hidden="true"></div>
      <div className="lts-aurora-layer1" aria-hidden="true"></div>
      <div className="lts-aurora-layer2" aria-hidden="true"></div>

      {/* Floating decorative orbs */}
      <div className="lts-orb lts-orb-1" aria-hidden="true"></div>
      <div className="lts-orb lts-orb-2" aria-hidden="true"></div>
      <div className="lts-orb lts-orb-3" aria-hidden="true"></div>

      {/* Ribbon banner accent */}
      <div className="lts-ribbon-top" aria-hidden="true">
        <span className="lts-ribbon-text">PREMIUM FINANCING</span>
      </div>

      {/* Dot grid pattern overlay */}
      <div className="lts-dot-grid" aria-hidden="true"></div>

      <div className="lts-inner">
        {/* Section header */}
        <div className="lts-header">
          <div className="lts-header-badge">
            <span>Finance Solutions</span>
          </div>
          {data.sectionTitle && (
            <h2 className="lts-title font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="lts-subtitle font-body">{data.sectionSubtitle}</p>
          )}
          <div className="lts-header-line" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
        </div>

        {/* Loan cards — offset vertical rhythm layout */}
        {loans.length > 0 && (
          <div className="lts-cards-track">
            {loans.map((loan, i) => (
              <div
                key={i}
                className={`lts-card lts-card--${i % 2 === 0 ? 'right' : 'left'}`}
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}
              >
                {/* Card accent ribbon */}
                <div className="lts-card-ribbon" aria-hidden="true">
                  <span>0{i + 1}</span>
                </div>

                {/* Glow halo behind icon */}
                <div className="lts-icon-halo" aria-hidden="true"></div>

                {/* Icon block */}
                {loan.iconName && (
                  <div className="lts-icon-wrap">
                    <div className="lts-icon-ring" aria-hidden="true"></div>
                    <div className="lts-icon">{getIcon(loan.iconName)}</div>
                  </div>
                )}

                {/* Card body */}
                <div className="lts-card-body">
                  {loan.title && (
                    <h3 className="lts-card-title font-heading">{loan.title}</h3>
                  )}
                  {loan.description && (
                    <p className="lts-card-desc font-body">{loan.description}</p>
                  )}

                  {/* Rate if present */}
                  {loan.rate && (
                    <div className="lts-card-rate">
                      <span className="lts-rate-val">{loan.rate}</span>
                      {loan.rateLabel && (
                        <span className="lts-rate-label">{loan.rateLabel}</span>
                      )}
                    </div>
                  )}

                  {/* Features list if present */}
                  {loan.features && Array.isArray(loan.features) && (
                    <ul className="lts-features">
                      {loan.features.map((f, j) => (
                        <li key={j} className="lts-feature-item font-body">
                          <span className="lts-feature-dot" aria-hidden="true"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA link */}
                  {loan.ctaText && (
                    <a
                      href={loan.ctaUrl || '/contact'}
                      className="lts-card-cta font-body"
                    >
                      {loan.ctaText}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Glowing border accent */}
                <div className="lts-card-glow-border" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom decorative ribbon */}
        <div className="lts-ribbon-bottom" aria-hidden="true">
          <div className="lts-ribbon-inner">
            {['Low Rates', 'Fast Approval', 'Flexible Terms', 'No Hidden Fees', 'Trusted Service'].map((t, i) => (
              <React.Fragment key={i}>
                <span className="lts-ribbon-tag">{t}</span>
                {i < 4 && <span className="lts-ribbon-sep" aria-hidden="true">◆</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
