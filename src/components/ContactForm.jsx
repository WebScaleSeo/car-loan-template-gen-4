import React, { useState } from 'react';
import './ContactForm.css';

const FIELD_OPTIONS = {
  loanType: ['New Car Loan', 'Used Car Loan', 'Refinancing', 'Lease Buyout', 'Motorcycle Loan'],
  vehicleType: ['New Vehicle', 'Used Vehicle', 'Certified Pre-Owned'],
};

export default function ContactForm({ data }) {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderField = (field, index) => {
    const commonProps = {
      id: field.fieldName,
      name: field.fieldName,
      required: field.isRequired,
      placeholder: field.placeholder,
      className: 'cf-input',
    };

    let input;
    if (field.type === 'select') {
      const options = field.options || FIELD_OPTIONS[field.fieldName] || [];
      input = (
        <select {...commonProps} className="cf-input cf-select">
          <option value="">{field.placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    } else if (field.type === 'textarea') {
      input = (
        <textarea {...commonProps} rows={4} className="cf-input cf-textarea" />
      );
    } else if (field.type === 'tel') {
      input = (
        <input
          {...commonProps}
          type="tel"
          maxLength={14}
          pattern="[\d\s\-\(\)\+]{10,14}"
        />
      );
    } else {
      input = <input {...commonProps} type={field.type} />;
    }

    return (
      <div
        key={field.fieldName}
        className="cf-field"
        style={{ animationDelay: `${0.25 + index * 0.07}s` }}
      >
        <label htmlFor={field.fieldName} className="cf-label">
          {field.label}
          {field.isRequired && <span className="cf-required">*</span>}
        </label>
        {input}
      </div>
    );
  };

  return (
    <section data-component="contactForm" className="cf-section">
      {/* Aurora background blobs */}
      <div className="cf-orb cf-orb--a" aria-hidden="true" />
      <div className="cf-orb cf-orb--b" aria-hidden="true" />
      <div className="cf-orb cf-orb--c" aria-hidden="true" />

      <div className="cf-inner">
        {/* Left: Form card — heavier side */}
        <div className="cf-form-col">
          <div className="cf-card-border">
            <div className="cf-card">
              {submitted ? (
                <div className="cf-success">
                  <div className="cf-success-icon" aria-hidden="true">✓</div>
                  <h3 className="cf-success-title font-heading">Message Sent!</h3>
                  <p className="cf-success-msg">{data.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="cf-fields-grid">
                    {data.fields && data.fields.map((field, i) => renderField(field, i))}
                  </div>
                  <div
                    className="cf-submit-wrap"
                    style={{ animationDelay: `${0.25 + (data.fields?.length || 0) * 0.07}s` }}
                  >
                    <button type="submit" className="cf-submit font-heading">
                      <span>{data.submitButtonText || 'Send Inquiry'}</span>
                      <svg className="cf-submit-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Right: Heading & info panel */}
        <div className="cf-info-col">
          <div className="cf-info-badge font-body">Get Financed Today</div>
          <h2 className="cf-title font-heading">{data.formTitle}</h2>
          <p className="cf-desc font-body">{data.formDescription}</p>

          <div className="cf-trust-list">
            {[
              { icon: '⚡', label: 'Fast Response', note: 'Within 1 business day' },
              { icon: '🔒', label: 'Secure & Private', note: 'Your data is protected' },
              { icon: '🎯', label: 'Matched Options', note: 'Tailored to your needs' },
            ].map((t, i) => (
              <div
                key={t.label}
                className="cf-trust-item"
                style={{ animationDelay: `${0.45 + i * 0.1}s` }}
              >
                <span className="cf-trust-icon" aria-hidden="true">{t.icon}</span>
                <div>
                  <span className="cf-trust-label font-heading">{t.label}</span>
                  <span className="cf-trust-note font-body">{t.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative ring */}
          <div className="cf-deco-ring" aria-hidden="true">
            <div className="cf-deco-ring-inner" />
          </div>
        </div>
      </div>
    </section>
  );
}
