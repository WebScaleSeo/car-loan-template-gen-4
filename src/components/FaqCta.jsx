import React from 'react';
import './FaqCta.css';

export default function FaqCta({ data }) {
  if (!data) return null;
  return (
    <section data-component="faqCta" className="faqCta-section">

      {/* Layer 1: Stock image background */}
      <div className="faqCta-bg-image" aria-hidden="true" />

      {/* Layer 2: Aurora mesh gradient overlay */}
      <div className="faqCta-gradient-overlay" aria-hidden="true" />

      {/* Layer 3: Dark cinematic scrim */}
      <div className="faqCta-scrim" aria-hidden="true" />

      {/* Layer 4: Oversized decorative "?" as typographic statement */}
      <div className="faqCta-deco-mark" aria-hidden="true">?</div>

      {/* Layer 5: Decorative radial spotlight */}
      <div className="faqCta-spotlight" aria-hidden="true" />

      {/* Layer 6: Decorative pulsing ring accents */}
      <div className="faqCta-ring faqCta-ring--1" aria-hidden="true" />
      <div className="faqCta-ring faqCta-ring--2" aria-hidden="true" />

      {/* Layer 7: Main content */}
      <div className="faqCta-content">
        <div className="faqCta-inner">

          {/* Eyebrow label — tiny vs massive contrast */}
          <span className="faqCta-eyebrow font-body">
            <span className="faqCta-eyebrow-dot" aria-hidden="true" />
            Support &amp; Assistance
            <span className="faqCta-eyebrow-dot" aria-hidden="true" />
          </span>

          {data.headline && (
            <h2 className="faqCta-headline font-heading">
              {data.headline}
            </h2>
          )}

          {data.description && (
            <p className="faqCta-description font-body">{data.description}</p>
          )}

          {data.ctaButtonText && data.ctaButtonUrl && (
            <div className="faqCta-cta-wrapper">
              <div className="faqCta-glow-pulse" aria-hidden="true" />
              <a
                href={data.ctaButtonUrl}
                className="faqCta-cta-button font-heading"
              >
                <span className="faqCta-btn-label">{data.ctaButtonText}</span>
                <span className="faqCta-btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          )}

        </div>
      </div>

      {/* Decorative corner accent lines */}
      <div className="faqCta-corner faqCta-corner--tl" aria-hidden="true" />
      <div className="faqCta-corner faqCta-corner--br" aria-hidden="true" />

    </section>
  );
}
