import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs({ data }) {
  if (!data) return null;

  return (
    <section data-component="whyChooseUs" className="wcu-section">
      {/* Noise/grain texture overlay */}
      <div className="wcu-noise" aria-hidden="true" />

      {/* Floating decorative orbs */}
      <div className="wcu-orb wcu-orb--1" aria-hidden="true" />
      <div className="wcu-orb wcu-orb--2" aria-hidden="true" />
      <div className="wcu-orb wcu-orb--3" aria-hidden="true" />

      {/* Iridescent light beam */}
      <div className="wcu-beam" aria-hidden="true" />

      <div className="wcu-inner">
        {/* Editorial left column */}
        <div className="wcu-editorial">
          <div className="wcu-label-strip">
            <span className="wcu-label-line" aria-hidden="true" />
            <span className="wcu-label-text">Why DriveRight</span>
          </div>

          {data.sectionTitle && (
            <h2 className="wcu-heading font-heading">
              {data.sectionTitle}
            </h2>
          )}

          <div className="wcu-heading-accent" aria-hidden="true">
            <span className="wcu-iridescent-bar" />
          </div>

          {data.description && (
            <p className="wcu-description font-body">{data.description}</p>
          )}

          {/* Decorative editorial element */}
          <div className="wcu-editorial-deco" aria-hidden="true">
            <span className="wcu-deco-number">0{data.differentiators?.length || 0}</span>
            <span className="wcu-deco-caption font-body">key differentiators</span>
          </div>
        </div>

        {/* Right column — differentiator cards */}
        {data.differentiators && Array.isArray(data.differentiators) && (
          <div className="wcu-cards">
            {data.differentiators.map((item, i) => (
              <div
                key={i}
                className="wcu-card"
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              >
                {/* Card index badge */}
                <div className="wcu-card-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Iridescent top border glow */}
                <div className="wcu-card-shimmer" aria-hidden="true" />

                <div className="wcu-card-body">
                  {(item.title || item.name) && (
                    <h3 className="wcu-card-title font-heading">
                      {item.title || item.name}
                    </h3>
                  )}
                  {(item.description || item.text) && (
                    <p className="wcu-card-desc font-body">
                      {item.description || item.text}
                    </p>
                  )}
                  {item.label && (
                    <span className="wcu-card-label font-body">{item.label}</span>
                  )}
                  {item.value && (
                    <span className="wcu-card-value font-heading">{item.value}</span>
                  )}
                  {item.answer && (
                    <p className="wcu-card-desc font-body">{item.answer}</p>
                  )}
                  {item.quote && (
                    <blockquote className="wcu-card-quote font-body">{item.quote}</blockquote>
                  )}
                </div>

                {/* Corner accent */}
                <div className="wcu-card-corner" aria-hidden="true" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
