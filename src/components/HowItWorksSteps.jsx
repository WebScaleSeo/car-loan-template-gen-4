import React from 'react';
import './HowItWorksSteps.css';

export default function HowItWorksSteps({ data }) {
  if (!data) return null;

  return (
    <section data-component="howItWorksSteps" className="hiw-section">
      {/* Background dot pattern overlay */}
      <div className="hiw-bg-pattern" aria-hidden="true" />

      <div className="hiw-inner">
        {/* LEFT PANEL — dark, cinematic, bleeds to left edge */}
        <div className="hiw-left-panel">
          <div className="hiw-left-content">
            <div className="hiw-eyebrow font-body">Process</div>
            {data.sectionTitle && (
              <h2 className="hiw-section-title font-heading">{data.sectionTitle}</h2>
            )}
            {data.sectionSubtitle && (
              <p className="hiw-section-subtitle font-body">{data.sectionSubtitle}</p>
            )}
            <div className="hiw-cta-line" aria-hidden="true" />
          </div>

          {/* Decorative mesh orbs */}
          <div className="hiw-orb hiw-orb-1" aria-hidden="true" />
          <div className="hiw-orb hiw-orb-2" aria-hidden="true" />
          <div className="hiw-orb hiw-orb-3" aria-hidden="true" />

          {/* Ghosted background number */}
          <div className="hiw-bg-word font-heading" aria-hidden="true">HOW</div>
        </div>

        {/* RIGHT PANEL — neutral, step cards cascade */}
        <div className="hiw-right-panel">
          <div className="hiw-steps-track">
            {/* Vertical connector line */}
            <div className="hiw-connector-line" aria-hidden="true" />

            {data.steps && Array.isArray(data.steps) && data.steps.map((step, i) => (
              <div
                key={i}
                className="hiw-step-card"
                style={{ animationDelay: `${0.1 + i * 0.18}s` }}
              >
                {/* Giant ghost number behind card */}
                <span className="hiw-ghost-num font-heading" aria-hidden="true">
                  {step.stepNumber}
                </span>

                {/* Step chip */}
                <div className="hiw-step-chip">
                  <span className="hiw-step-num font-heading">{step.stepNumber}</span>
                </div>

                <div className="hiw-step-body">
                  {step.title && (
                    <h3 className="hiw-step-title font-heading">{step.title}</h3>
                  )}
                  {step.description && (
                    <p className="hiw-step-desc font-body">{step.description}</p>
                  )}
                </div>

                {/* Accent corner decoration */}
                <div className="hiw-card-corner" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
