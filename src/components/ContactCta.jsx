import React, { useEffect, useRef, useState } from 'react';
import './ContactCta.css';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  );
}

export default function ContactCta({ data }) {
  if (!data) return null;

  return (
    <section data-component="contactCta" className="contactCta-section">
      {/* Aurora background */}
      <div className="cta-aurora-layer" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
        <div className="aurora-blob aurora-blob-4"></div>
      </div>

      {/* Subtle grid texture */}
      <div className="cta-grid-texture" aria-hidden="true"></div>

      <div className="contactCta-inner">
        {/* Left — editorial content block */}
        <div className="contactCta-editorial">
          <div className="cta-label">Financing Made Simple</div>

          {data.headline && (
            <h2 className="cta-headline font-heading">{data.headline}</h2>
          )}

          {data.description && (
            <p className="cta-description font-body">{data.description}</p>
          )}

          {/* Animated counters — decorative motion element */}
          <div className="cta-counters">
            <div className="cta-counter-item">
              <AnimatedCounter target={5} suffix=" min" duration={1500} />
              <span className="counter-label">Avg. Response</span>
            </div>
            <div className="cta-counter-divider" aria-hidden="true"></div>
            <div className="cta-counter-item">
              <AnimatedCounter target={100} suffix="+" duration={2000} />
              <span className="counter-label">Lender Network</span>
            </div>
            <div className="cta-counter-divider" aria-hidden="true"></div>
            <div className="cta-counter-item">
              <AnimatedCounter target={24} suffix="/7" duration={1800} />
              <span className="counter-label">Expert Support</span>
            </div>
          </div>
        </div>

        {/* Right — floating CTA panel */}
        <div className="contactCta-panel-wrapper">
          <div className="contactCta-panel">
            <div className="panel-aurora-glow" aria-hidden="true"></div>

            <div className="panel-header">
              <div className="panel-icon-ring">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span className="panel-eyebrow">Start Today</span>
            </div>

            <h3 className="panel-title font-heading">Drive Away with Confidence</h3>
            <p className="panel-subtext font-body">
              One message connects you with a financing expert ready to build your custom plan.
            </p>

            {data.ctaButtonText && data.ctaButtonUrl && (
              <a href={data.ctaButtonUrl} className="cta-button font-body">
                <span className="cta-button-text">{data.ctaButtonText}</span>
                <span className="cta-button-arrow" aria-hidden="true">→</span>
              </a>
            )}

            <div className="panel-trust-row">
              <span className="trust-chip">No obligation</span>
              <span className="trust-chip">Instant response</span>
              <span className="trust-chip">Secure & private</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
