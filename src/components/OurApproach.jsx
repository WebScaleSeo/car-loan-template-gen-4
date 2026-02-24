import React from 'react';
import './OurApproach.css';

// Step titles derived from paragraph content — data doesn't include titles
const STEP_TITLES = [
  'Reimagined Process',
  'Holistic Guidance',
  'Competitive Options',
  'Lasting Commitment',
];

export default function OurApproach({ data }) {
  if (!data) return null;

  return (
    <section data-component="ourApproach" className="oa-section">
      {/* Decorative orbs — no layout impact */}
      <div className="oa-orb oa-orb-1" aria-hidden="true" />
      <div className="oa-orb oa-orb-2" aria-hidden="true" />

      {/* Top editorial rule strip */}
      <div className="oa-rule-strip" aria-hidden="true">
        <div className="oa-rule-accent" />
        <div className="oa-rule-thick" />
        <div className="oa-rule-thin" />
      </div>

      <div className="oa-inner">
        {/* Left: editorial title column */}
        <div className="oa-title-col">
          <div className="oa-eyebrow">
            <span className="oa-eyebrow-line" aria-hidden="true" />
            <span className="oa-eyebrow-label font-body">Our Approach</span>
          </div>

          {data.sectionTitle && (
            <h2 className="oa-heading font-heading">
              {data.sectionTitle}
            </h2>
          )}

          {/* Decorative stacked rule bars */}
          <div className="oa-deco-rules" aria-hidden="true">
            <div className="oa-deco-r1" />
            <div className="oa-deco-r2" />
            <div className="oa-deco-r3" />
          </div>

          {/* Oversized ghost numeral — editorial decoration */}
          <div className="oa-ghost-num font-heading" aria-hidden="true">04</div>
        </div>

        {/* Right: sidebar panel overlay */}
        <div className="oa-sidebar-panel">
          <div className="oa-panel-top-bar" aria-hidden="true" />

          {data.paragraphs && Array.isArray(data.paragraphs) && data.paragraphs.map((para, i) => (
            <div key={i} className="oa-step-block">
              {i > 0 && <div className="oa-step-divider" aria-hidden="true" />}
              <div className="oa-step-header">
                <span className="oa-step-num font-heading">0{i + 1}</span>
                <div className="oa-step-title-wrap">
                  <h3 className="oa-step-title font-heading">
                    {STEP_TITLES[i] || `Step ${i + 1}`}
                  </h3>
                  <span className="oa-step-rule" aria-hidden="true" />
                </div>
              </div>
              {para.text && (
                <p className="oa-step-text font-body">{para.text}</p>
              )}
            </div>
          ))}

          <div className="oa-panel-corner" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom rule strip */}
      <div className="oa-rule-strip oa-rule-strip--bottom" aria-hidden="true">
        <div className="oa-rule-thin" />
        <div className="oa-rule-accent" />
      </div>
    </section>
  );
}
