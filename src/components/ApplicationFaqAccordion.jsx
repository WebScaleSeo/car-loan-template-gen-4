import React, { useState, useEffect, useRef } from 'react';
import './ApplicationFaqAccordion.css';

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const duration = 1200;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ApplicationFaqAccordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const faqs = data.faqs || [];

  return (
    <section data-component="applicationFaqAccordion" className="afaq-section">
      {/* Decorative background layers */}
      <div className="afaq-bg-grid" aria-hidden="true" />
      <div className="afaq-orb afaq-orb-1" aria-hidden="true" />
      <div className="afaq-orb afaq-orb-2" aria-hidden="true" />
      <div className="afaq-beam" aria-hidden="true" />

      <div className="afaq-inner">
        {/* Left column — broken grid header with overlap */}
        <div className="afaq-left">
          <div className="afaq-eyebrow">
            <span className="afaq-eyebrow-line" />
            <span className="afaq-eyebrow-text">Need Answers?</span>
          </div>

          <h2 className="afaq-title font-heading">
            {data.sectionTitle || 'Application & Approval'}
          </h2>

          <p className="afaq-subtitle font-body">
            Everything you need to know about applying for financing — clear, direct, no jargon.
          </p>

          {/* Stats ticker — number animation */}
          <div className="afaq-stats">
            <div className="afaq-stat">
              <div className="afaq-stat-number font-heading">
                <AnimatedNumber target={faqs.length} />
              </div>
              <div className="afaq-stat-label font-body">Questions Answered</div>
            </div>
            <div className="afaq-stat-divider" aria-hidden="true" />
            <div className="afaq-stat">
              <div className="afaq-stat-number font-heading">
                <AnimatedNumber target={3} suffix=" min" />
              </div>
              <div className="afaq-stat-label font-body">To Apply Online</div>
            </div>
            <div className="afaq-stat-divider" aria-hidden="true" />
            <div className="afaq-stat">
              <div className="afaq-stat-number font-heading">
                <AnimatedNumber target={100} suffix="%" />
              </div>
              <div className="afaq-stat-label font-body">Secure Process</div>
            </div>
          </div>

          {/* Decorative oversized label — breaks grid */}
          <div className="afaq-deco-label font-heading" aria-hidden="true">FAQ</div>
        </div>

        {/* Right column — accordion stack */}
        <div className="afaq-right">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`afaq-item ${isOpen ? 'afaq-item--open' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Holographic iridescent border top */}
                <div className="afaq-item-iridescent" aria-hidden="true" />

                <button
                  className="afaq-question font-body"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="afaq-num font-heading">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="afaq-question-text">{faq.question}</span>
                  <span className="afaq-chevron" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="afaq-answer-wrapper"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <p className="afaq-answer font-body">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
