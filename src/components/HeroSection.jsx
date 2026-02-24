import React from 'react';
import './HeroSection.css';

const trustBadges = [
  { icon: '★', label: 'Top Rated', value: '4.9/5' },
  { icon: '⚡', label: 'Fast Approval', value: '24hrs' },
  { icon: '🔒', label: 'Secure & Safe', value: '256-bit SSL' },
  { icon: '✓', label: 'Loans Funded', value: '$2B+' },
];

export default function HeroSection({ data }) {
  if (!data) return null;

  return (
    <section data-component="heroSection" className="hero-section">
      {/* Background layers */}
      <div className="hero-bg-image" />
      <div className="hero-bg-gradient" />
      <div className="hero-bg-rotating-gradient" />

      {/* Brutalist border frame */}
      <div className="hero-brutalist-frame" />

      {/* Decorative oversized type in background */}
      <div className="hero-deco-text" aria-hidden="true">DRIVE</div>

      {/* Decorative geometric shapes */}
      <div className="hero-shape-1" aria-hidden="true" />
      <div className="hero-shape-2" aria-hidden="true" />
      <div className="hero-shape-3" aria-hidden="true" />

      {/* Main content — stacked cinematic */}
      <div className="hero-content">

        {/* Tag label */}
        <div className="hero-tag hero-anim-0">
          <span className="hero-tag-dot" />
          Auto Financing Specialists
        </div>

        {/* Headline */}
        <h1 className="hero-headline hero-anim-1">
          {data.headline}
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline hero-anim-2">
          {data.subheadline}
        </p>

        {/* CTA row */}
        <div className="hero-cta-row hero-anim-3">
          <a href={data.ctaButtonUrl || '/contact'} className="hero-cta-primary">
            <span className="hero-cta-glow" />
            <span className="hero-cta-text">{data.ctaButtonText}</span>
            <span className="hero-cta-arrow">→</span>
          </a>
          <a href={data.secondaryCtaUrl || '/about'} className="hero-cta-secondary">
            {data.secondaryCtaText}
          </a>
        </div>

        {/* Trust badges row */}
        <div className="hero-badges hero-anim-4">
          {trustBadges.map((badge, i) => (
            <div key={i} className="hero-badge-flip-wrapper">
              <div className="hero-badge-inner">
                {/* Front face */}
                <div className="hero-badge hero-badge-front">
                  <span className="hero-badge-icon">{badge.icon}</span>
                  <span className="hero-badge-value">{badge.value}</span>
                  <span className="hero-badge-label">{badge.label}</span>
                </div>
                {/* Back face */}
                <div className="hero-badge hero-badge-back">
                  <span className="hero-badge-back-text">{badge.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom mosaic divider */}
        <div className="hero-mosaic-divider hero-anim-5" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="hero-mosaic-cell" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
