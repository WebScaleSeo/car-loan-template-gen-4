import React from 'react';
import './Footer.css';

export default function Footer({ footer }) {
  const branding = footer?.branding || {};
  const links = footer?.links || [];
  const legal = footer?.legal || [];
  const social = footer?.social || [];
  const copyright = footer?.copyright || `© ${new Date().getFullYear()} ${branding.name || 'DriveRight Auto Loans'}. All rights reserved.`;

  return (
    <footer data-component="footer" className="footer-root">
      {/* Mesh gradient background blobs */}
      <div className="footer-mesh-bg" aria-hidden="true">
        <div className="footer-blob footer-blob-1" />
        <div className="footer-blob footer-blob-2" />
        <div className="footer-blob footer-blob-3" />
        <div className="footer-iridescent-stripe" />
      </div>

      <div className="footer-inner">
        {/* Sidebar branding panel */}
        <div className="footer-sidebar-panel">
          <div className="footer-panel-holo-border" aria-hidden="true" />
          <div className="footer-brand-content">
            <div className="footer-brand-monogram" aria-hidden="true">DR</div>
            <h2 className="footer-brand-name font-heading">{branding.name || 'DriveRight Auto Loans'}</h2>
            <p className="footer-brand-desc font-body">{branding.description}</p>
            {social && social.length > 0 && (
              <div className="footer-social-row">
                {social.map((item, i) => (
                  <a key={i} href={item.url} className="footer-social-link" aria-label={item.label} target="_blank" rel="noopener noreferrer">
                    <span className="footer-social-icon">{item.icon || item.label?.charAt(0)}</span>
                  </a>
                ))}
              </div>
            )}
            {/* Decorative pulsing orb */}
            <div className="footer-pulse-orb" aria-hidden="true" />
          </div>
        </div>

        {/* Main links content */}
        <div className="footer-main-content">
          {/* Navigation links */}
          <div className="footer-links-block">
            <h3 className="footer-links-heading font-heading">
              <span className="footer-heading-holo">Navigation</span>
            </h3>
            <ul className="footer-links-list">
              {links.map((link, i) => (
                <li key={i} className="footer-link-item">
                  <a href={link.url} className="footer-link font-body">
                    <span className="footer-link-arrow" aria-hidden="true">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links if present */}
          {legal && legal.length > 0 && (
            <div className="footer-links-block">
              <h3 className="footer-links-heading font-heading">
                <span className="footer-heading-holo">Legal</span>
              </h3>
              <ul className="footer-links-list">
                {legal.map((link, i) => (
                  <li key={i} className="footer-link-item">
                    <a href={link.url} className="footer-link font-body">
                      <span className="footer-link-arrow" aria-hidden="true">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact / Info block */}
          <div className="footer-contact-block">
            <h3 className="footer-links-heading font-heading">
              <span className="footer-heading-holo">Get Financed</span>
            </h3>
            <div className="footer-cta-card">
              <p className="footer-cta-text font-body">Ready to drive away with the perfect loan?</p>
              <a href="/apply" className="footer-cta-btn font-heading">Apply Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-holo-line" aria-hidden="true" />
        <div className="footer-bottom-inner">
          <span className="footer-copyright font-body">{copyright}</span>
          {legal && legal.length > 0 && (
            <div className="footer-bottom-links">
              {legal.map((link, i) => (
                <a key={i} href={link.url} className="footer-bottom-link font-body">{link.label}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
