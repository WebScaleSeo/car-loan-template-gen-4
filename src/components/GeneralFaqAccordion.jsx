import React, { useState } from 'react';
import './GeneralFaqAccordion.css';

export default function GeneralFaqAccordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section data-component="generalFaqAccordion" className="gfa-section">
      {/* Decorative mesh gradient blobs */}
      <div className="gfa-blob gfa-blob-1" aria-hidden="true" />
      <div className="gfa-blob gfa-blob-2" aria-hidden="true" />
      <div className="gfa-blob gfa-blob-3" aria-hidden="true" />

      {/* Dot pattern overlay */}
      <div className="gfa-pattern" aria-hidden="true" />

      <div className="gfa-container">
        {/* Section Header with offset decorative block */}
        <div className="gfa-header">
          <div className="gfa-header-tag-row">
            <span className="gfa-tag">FAQ</span>
            <div className="gfa-tag-line" />
          </div>
          {data.sectionTitle && (
            <h2 className="gfa-title font-heading">{data.sectionTitle}</h2>
          )}
          <div className="gfa-header-deco" aria-hidden="true">
            <span className="gfa-deco-q">?</span>
          </div>
        </div>

        {/* FAQ Accordion List */}
        {data.faqs && Array.isArray(data.faqs) && (
          <div className="gfa-list">
            {data.faqs.map((item, i) => {
              const isOpen = openIndex === i;
              const isOffset = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`gfa-item${isOpen ? ' gfa-item--open' : ''}${isOffset ? ' gfa-item--offset' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {/* Question Number Badge */}
                  <span className="gfa-num font-heading" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <button
                    className="gfa-question font-body"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`gfa-answer-${i}`}
                  >
                    <span className="gfa-question-text">{item.question}</span>
                    <span className={`gfa-indicator${isOpen ? ' gfa-indicator--open' : ''}`} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="gfa-icon-vert" />
                        <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`gfa-answer-${i}`}
                    className="gfa-answer"
                    style={{ display: isOpen ? 'block' : 'none' }}
                    role="region"
                  >
                    <p className="gfa-answer-text font-body">{item.answer}</p>
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
