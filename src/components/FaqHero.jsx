import React from 'react';
import './FaqHero.css';

export default function FaqHero({ data }) {
  if (!data) return null;

  return (
    <section data-component="faqHero" className="faqHero-section">
      {/* Noise texture overlay */}
      <div className="faqHero-noise" aria-hidden="true" />

      {/* Floating decorative orbs — positioned away from text content */}
      <div className="faqHero-orb faqHero-orb--1" aria-hidden="true" />
      <div className="faqHero-orb faqHero-orb--2" aria-hidden="true" />

      {/* Decorative corner accent */}
      <div className="faqHero-corner-accent" aria-hidden="true" />

      <div className="faqHero-inner">
        {/* Small label badge */}
        <div className="faqHero-badge faqHero-anim faqHero-anim--1">
          <span className="faqHero-badge-dot" />
          <span className="font-body">Support &amp; Help Center</span>
        </div>

        {/* Editorial grid: heavy left headline, rich right content */}
        <div className="faqHero-grid">
          {/* Left — oversized headline + decorative stroke glyph below */}
          <div className="faqHero-headline-col">
            {data.headline && (
              <h1 className="faqHero-headline faqHero-anim faqHero-anim--2 font-heading">
                {data.headline}
              </h1>
            )}
            {/* Decorative stroke "?" — below headline, not overlapping */}
            <div className="faqHero-deco-glyph" aria-hidden="true">?</div>
          </div>

          {/* Right — subtitle + pull-quote + CTA */}
          <div className="faqHero-content-col">
            {data.subheadline && (
              <p className="faqHero-subheadline faqHero-anim faqHero-anim--3 font-body">
                {data.subheadline}
              </p>
            )}

            {/* Pull-quote block (mandatory secondary element) */}
            <blockquote className="faqHero-pullquote faqHero-anim faqHero-anim--4">
              <div className="faqHero-pullquote-mark" aria-hidden="true">"</div>
              <p className="font-heading">
                Clear answers, no jargon. Just the information you need to make confident decisions about your auto loan.
              </p>
              <cite className="font-body">— The DriveRight Promise</cite>
            </blockquote>

            {/* Animated CTA */}
            <div className="faqHero-cta faqHero-anim faqHero-anim--5">
              <a href="/contact" className="faqHero-btn font-body">
                <span>Browse All Questions</span>
                <svg className="faqHero-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ribbon banner accent — at the BOTTOM, below all content */}
      <div className="faqHero-ribbon" aria-hidden="true">
        <div className="faqHero-ribbon-track">
          <span>FAQ</span><span className="faqHero-ribbon-sep">•</span>
          <span>HELP CENTER</span><span className="faqHero-ribbon-sep">•</span>
          <span>KNOWLEDGE BASE</span><span className="faqHero-ribbon-sep">•</span>
          <span>AUTO LOANS</span><span className="faqHero-ribbon-sep">•</span>
          <span>FAQ</span><span className="faqHero-ribbon-sep">•</span>
          <span>HELP CENTER</span><span className="faqHero-ribbon-sep">•</span>
          <span>KNOWLEDGE BASE</span><span className="faqHero-ribbon-sep">•</span>
          <span>AUTO LOANS</span><span className="faqHero-ribbon-sep">•</span>
        </div>
      </div>
    </section>
  );
}
