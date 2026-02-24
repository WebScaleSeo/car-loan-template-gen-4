import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ navigation, branding }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = navigation?.items?.filter((item) => item.type === 'link') || [];
  const cta = navigation?.items?.find((item) => item.type === 'cta');

  return (
    <header data-component="header" className="header-root">
      <div className={`header-pill${scrolled ? ' header-pill--scrolled' : ''}`}>
        {/* Logo / Branding */}
        <a href="/" className="header-logo" aria-label="Home">
          <span className="header-logo-mark">
            <span className="header-logo-inner" />
          </span>
          <span className="header-logo-text font-heading">
            {branding?.siteName || 'Brand'}
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="header-nav" aria-label="Primary navigation">
          {links.map((item) => (
            <a key={item.label} href={item.url} className="header-nav-link font-body">
              <span className="header-nav-link-text">{item.label}</span>
              <span className="header-nav-underline" aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        {cta && (
          <a href={cta.url || '/contact'} className="header-cta font-heading">
            {cta.label}
          </a>
        )}
      </div>
    </header>
  );
}
