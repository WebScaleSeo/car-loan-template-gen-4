import React, { useState, useEffect } from 'react';
import './ContactFaqPreview.css';

export default function ContactFaqPreview({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [displayCount, setDisplayCount] = useState(0);

  if (!data) return null;

  const faqCount = data.faqs?.length || 0;

  useEffect(() => {
    let current = 0;
    const target = faqCount;
    if (target === 0) return;
    const step = () => {
      current++;
      setDisplayCount(current);
      if (current < target) {
        setTimeout(step, 280);
      }
    };
    const init = setTimeout(step, 600);
    return () => clearTimeout(init);
  }, [faqCount]);

  return (
    <section data-component="contactFaqPreview" className="cfp-section">
      {/* Geometric wireframe decorations */}
      <div className="cfp-wire cfp-wire-1" aria-hidden="true" />
      <div className="cfp-wire cfp-wire-2" aria-hidden="true" />
      <div className="cfp-wire cfp-wire-3" aria-hidden="true" />
      <div className="cfp-wire cfp-wire-4" aria-hidden="true" />
      <div className="cfp-grid-bg" aria-hidden="true" />
      <div className="cfp-diagonal-stripe" aria-hidden="true" />

      <div className="cfp-l-layout">
        {/* LEFT PANEL — vertical arm of the L */}
        <aside className="cfp-left-panel">
          <div className="cfp-eyebrow">
            <span className="cfp-eyebrow-rule" />
            <span className="cfp-eyebrow-text">Help Center</span>
          </div>

          <h2 className="cfp-title font-heading">{data.sectionTitle}</h2>
          <p className="cfp-subtitle font-body">{data.sectionSubtitle}</p>

          {/* Animated counter ticker */}
          <div className="cfp-counter-block">
            <div className="cfp-counter-frame">
              <span className="cfp-counter-num font-heading">
                {String(displayCount).padStart(2, '0')}
              </span>
              <div className="cfp-counter-scan" aria-hidden="true" />
            </div>
            <div className="cfp-counter-meta">
              <span className="cfp-counter-label font-body">answers<br />ready now</span>
              <div className="cfp-counter-dots">
                {Array.from({ length: faqCount }).map((_, i) => (
                  <span
                    key={i}
                    className={`cfp-dot ${i < displayCount ? 'cfp-dot--active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Geometric bracket decorations */}
          <div className="cfp-bracket cfp-bracket--tl" aria-hidden="true" />
          <div className="cfp-bracket cfp-bracket--br" aria-hidden="true" />
        </aside>

        {/* RIGHT PANEL — FAQ accordion */}
        <div className="cfp-right-panel">
          <div className="cfp-faq-list">
            {data.faqs &&
              data.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`cfp-faq-item ${openIndex === i ? 'is-open' : ''}`}
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                >
                  <button
                    className="cfp-faq-trigger"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="cfp-faq-num font-heading">0{i + 1}</span>
                    <span className="cfp-faq-question font-heading">{faq.question}</span>
                    <span className="cfp-faq-toggle" aria-hidden="true">
                      <span className="cfp-toggle-bar cfp-toggle-bar--h" />
                      <span className={`cfp-toggle-bar cfp-toggle-bar--v`} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="cfp-faq-answer"
                    style={{ display: openIndex === i ? 'block' : 'none' }}
                  >
                    <p className="font-body">{faq.answer}</p>
                  </div>
                </div>
              ))}
          </div>

          {data.viewAllText && (
            <a
              href={data.viewAllUrl || '/contact'}
              className="cfp-view-all font-body"
            >
              <span>{data.viewAllText}</span>
              <span className="cfp-view-all-arrow">→</span>
            </a>
          )}
        </div>

        {/* BOTTOM BAR — horizontal arm of the L */}
        <div className="cfp-bottom-bar">
          <div className="cfp-bottom-inner">
            <div className="cfp-bottom-geo" aria-hidden="true">
              <div className="cfp-bottom-geo-square" />
              <div className="cfp-bottom-geo-square cfp-bottom-geo-square--2" />
            </div>
            <p className="cfp-bottom-text font-body">
              Didn't find your answer? Our team responds within one business day.
            </p>
            <a href="/contact" className="cfp-contact-btn font-heading">
              Contact Our Team
              <span className="cfp-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
