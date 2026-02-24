import React from 'react';
import './FaqCategories.css';

const IconMap = {
  'car': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5h-2"/>
      <circle cx="15" cy="17" r="2"/><circle cx="7" cy="17" r="2"/>
      <polyline points="17 12 17 7 13 7"/>
    </svg>
  ),
  'clipboard-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="m9 14 2 2 4-4"/>
    </svg>
  ),
  'percent': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19"/>
      <circle cx="6.5" cy="6.5" r="2.5"/>
      <circle cx="17.5" cy="17.5" r="2.5"/>
    </svg>
  ),
  'shield-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  'refresh-cw': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  'help-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  'credit-card': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  'file-text': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
};

const DefaultIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

export default function FaqCategories({ data }) {
  if (!data) return null;

  const { sectionTitle, categories } = data;

  return (
    <section data-component="faqCategories" className="faqcat-section">
      {/* Decorative background layers */}
      <div className="faqcat-bg-orb faqcat-bg-orb--a" aria-hidden="true" />
      <div className="faqcat-bg-orb faqcat-bg-orb--b" aria-hidden="true" />
      <div className="faqcat-dot-grid" aria-hidden="true" />

      <div className="faqcat-container">
        {/* Section header */}
        <div className="faqcat-header">
          <div className="faqcat-eyebrow font-body">Quick Navigation</div>
          {sectionTitle && (
            <h2 className="faqcat-title font-heading">{sectionTitle}</h2>
          )}
          <div className="faqcat-rule" aria-hidden="true" />
        </div>

        {/* Staggered column grid — visual offset via nth-child, not margin-top */}
        {categories && Array.isArray(categories) && (
          <div className="faqcat-grid">
            {categories.map((cat, i) => {
              const icon = IconMap[cat.iconName] || DefaultIcon;
              return (
                <div
                  key={i}
                  className={`faqcat-card faqcat-card--col${(i % 3) + 1}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="faqcat-card-glow-border" aria-hidden="true" />
                  <div className="faqcat-card-top">
                    <span className="faqcat-card-num font-heading">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="faqcat-icon-box">
                      <div className="faqcat-icon-pulse" aria-hidden="true" />
                      <div className="faqcat-icon">{icon}</div>
                    </div>
                  </div>
                  <div className="faqcat-card-body">
                    {cat.title && (
                      <h3 className="faqcat-card-title font-heading">{cat.title}</h3>
                    )}
                    {cat.description && (
                      <p className="faqcat-card-desc font-body">{cat.description}</p>
                    )}
                  </div>
                  <div className="faqcat-card-footer">
                    <span className="faqcat-card-cta font-body">Explore topic</span>
                    <svg className="faqcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
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
