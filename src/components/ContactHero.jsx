import React, { useEffect, useState } from 'react';
import './ContactHero.css';

const BENEFITS = [
  { text: 'Competitive rates starting as low as 2.99% APR' },
  { text: 'Fast approvals — decisions in minutes, not days' },
  { text: 'Flexible terms from 24 to 84 months' },
  { text: 'No hidden fees or prepayment penalties' },
];

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

function useScramble(text, delay = 400) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!text) return;
    let timeout;
    timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iteration) return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('')
        );
        iteration += 0.6;
        if (iteration > text.length) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 28);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return display;
}

export default function ContactHero({ data }) {
  if (!data) return null;

  const scrambledHeadline = useScramble(data.headline || '', 400);

  return (
    <section data-component="contactHero" className="contactHero-section">
      {/* Background layers */}
      <div className="ch-dot-grid" aria-hidden="true" />
      <div className="ch-grain" aria-hidden="true" />
      <div className="ch-radial-wash" aria-hidden="true" />

      <div className="ch-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="ch-left">
          <span className="ch-eyebrow font-body">DriveRight Auto Loans</span>

          <h1 className="ch-headline font-heading" aria-label={data.headline}>
            {scrambledHeadline}
          </h1>

          <p className="ch-subheadline font-body">{data.subheadline}</p>

          <a href="/contact" className="ch-cta font-heading">
            <span className="ch-cta-text">Get Started Today</span>
            <span className="ch-cta-arrow" aria-hidden="true">→</span>
            <span className="ch-cta-glow" aria-hidden="true" />
          </a>

          {/* Key benefit checklist */}
          <div className="ch-benefits">
            <p className="ch-benefits-title font-heading">Why Choose DriveRight?</p>
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="ch-benefit-item"
                style={{ '--item-delay': `${0.85 + i * 0.14}s` }}
              >
                <span className="ch-check" aria-hidden="true" />
                <span className="ch-benefit-text font-body">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="ch-right">
          {/* Spotlight beam */}
          <div className="ch-spotlight" aria-hidden="true" />
          <div className="ch-beam" aria-hidden="true" />

          {/* Glow card with gradient border */}
          <div className="ch-glow-card">
            <div className="ch-card-border-glow" aria-hidden="true" />

            <span className="ch-card-tag font-body">Speak With Us</span>
            <h2 className="ch-card-heading font-heading">Ready to Apply?</h2>
            <p className="ch-card-body font-body">
              Our loan specialists are standing by to help you find the perfect financing
              solution for your next vehicle.
            </p>

            <div className="ch-card-stats">
              <div className="ch-stat">
                <span className="ch-stat-number font-heading">5<span className="ch-stat-unit">min</span></span>
                <span className="ch-stat-label font-body">Quick Apply</span>
              </div>
              <div className="ch-stat-divider" aria-hidden="true" />
              <div className="ch-stat">
                <span className="ch-stat-number font-heading">98<span className="ch-stat-unit">%</span></span>
                <span className="ch-stat-label font-body">Satisfaction</span>
              </div>
              <div className="ch-stat-divider" aria-hidden="true" />
              <div className="ch-stat">
                <span className="ch-stat-number font-heading">$0</span>
                <span className="ch-stat-label font-body">Hidden Fees</span>
              </div>
            </div>

            <a href="/contact" className="ch-card-link font-body">
              Talk to a Specialist <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Decorative floating orbs */}
          <div className="ch-orb ch-orb-1" aria-hidden="true" />
          <div className="ch-orb ch-orb-2" aria-hidden="true" />
          <div className="ch-orb ch-orb-3" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
