import React, { useState } from 'react';
import './RatesFaqAccordion.css';

export default function RatesFaqAccordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [rippleItem, setRippleItem] = useState(null);

  if (!data) return null;

  const handleToggle = (i) => {
    const next = openIndex === i ? null : i;
    if (next !== null) {
      setRippleItem(i);
      setTimeout(() => setRippleItem(null), 700);
    }
    setOpenIndex(next);
  };

  return (
    <section data-component="ratesFaqAccordion" className="rfa-section">
      {/* Layered background: gradient mesh + noise + geometric shapes */}
      <div className="rfa-bg" aria-hidden="true">
        <div className="rfa-bg-gradient"></div>
        <div className="rfa-bg-noise"></div>
        <div className="rfa-geo rfa-geo--circle-lg"></div>
        <div className="rfa-geo rfa-geo--circle-sm"></div>
        <div className="rfa-geo rfa-geo--rect"></div>
        <div className="rfa-geo rfa-geo--dot-grid"></div>
        <div className="rfa-wave-bar rfa-wave-bar--1"></div>
        <div className="rfa-wave-bar rfa-wave-bar--2"></div>
      </div>

      <div className="rfa-container">
        {/* Section Header */}
        <header className="rfa-header">
          <div className="rfa-header-tag font-body">FAQ</div>
          <h2 className="rfa-title font-heading">
            <span className="rfa-title-outline">Rates</span>
            {' & '}
            <span className="rfa-title-solid">Repayment</span>
          </h2>
          <div className="rfa-header-rule" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <p className="rfa-subtitle font-body">
            Everything you need to know about your car loan — transparent, clear, and straightforward.
          </p>
        </header>

        {/* Accordion */}
        {data.faqs && Array.isArray(data.faqs) && (
          <div className="rfa-accordion" role="list">
            {data.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const hasRipple = rippleItem === i;
              return (
                <article
                  key={i}
                  className={`rfa-item${isOpen ? ' rfa-item--open' : ''}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                  role="listitem"
                >
                  {/* Ripple overlay */}
                  {hasRipple && <span className="rfa-ripple" aria-hidden="true"></span>}

                  <button
                    className="rfa-question"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`rfa-answer-${i}`}
                  >
                    <span className="rfa-num font-heading" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="rfa-question-text font-body">{faq.question}</span>
                    <span className={`rfa-chevron${isOpen ? ' rfa-chevron--open' : ''}`} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`rfa-answer-${i}`}
                    className="rfa-answer-wrap"
                    style={{ display: isOpen ? 'block' : 'none' }}
                    role="region"
                  >
                    <div className="rfa-answer font-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
