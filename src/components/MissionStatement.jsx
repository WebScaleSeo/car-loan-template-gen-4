import React from 'react';
import './MissionStatement.css';

export default function MissionStatement({ data }) {
  if (!data) return null;

  return (
    <section data-component="missionStatement" className="mission-section">
      {/* Decorative depth layers */}
      <div className="mission-bg-layer mission-bg-layer--grid" aria-hidden="true"></div>
      <div className="mission-bg-layer mission-bg-layer--radial" aria-hidden="true"></div>
      <div className="mission-blob mission-blob--1" aria-hidden="true"></div>
      <div className="mission-blob mission-blob--2" aria-hidden="true"></div>
      <div className="mission-blob mission-blob--3" aria-hidden="true"></div>

      {/* Rotating gradient ring */}
      <div className="mission-gradient-ring" aria-hidden="true"></div>

      <div className="mission-inner">
        {/* Sidebar panel */}
        <aside className="mission-sidebar">
          <div className="mission-sidebar__accent-line"></div>
          <div className="mission-sidebar__tag">
            <span className="mission-sidebar__tag-dot"></span>
            <span className="font-heading mission-sidebar__tag-text">Our Purpose</span>
          </div>

          {data.sectionTitle && (
            <h2 className="mission-sidebar__title font-heading">{data.sectionTitle}</h2>
          )}

          <div className="mission-sidebar__geo">
            <div className="mission-geo-diamond"></div>
            <div className="mission-geo-diamond mission-geo-diamond--sm"></div>
          </div>

          <div className="mission-sidebar__divider"></div>

          <div className="mission-sidebar__label font-body">
            <span>DriveRight Auto Loans</span>
          </div>

          {/* Vertical stacked decorative lines */}
          <div className="mission-sidebar__deco-lines" aria-hidden="true">
            <div className="mission-sidebar__deco-line"></div>
            <div className="mission-sidebar__deco-line mission-sidebar__deco-line--sm"></div>
            <div className="mission-sidebar__deco-line mission-sidebar__deco-line--xs"></div>
          </div>
        </aside>

        {/* Main content panel */}
        <div className="mission-content">
          {/* Geometric accent top bar */}
          <div className="mission-content__topbar">
            <div className="mission-topbar__line"></div>
            <div className="mission-topbar__diamond"></div>
            <div className="mission-topbar__line"></div>
          </div>

          {data.missionText && (
            <div className="mission-body">
              <div className="mission-body__quote-mark" aria-hidden="true">"</div>
              <p className="mission-body__text font-body">{data.missionText}</p>
            </div>
          )}

          {data.visionText && (
            <div className="mission-vision">
              <div className="mission-vision__label font-heading">Vision</div>
              <p className="mission-vision__text font-body">{data.visionText}</p>
            </div>
          )}

          {/* Geometric grid decorations */}
          <div className="mission-content__geo-grid" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="mission-grid-dot"></div>
            ))}
          </div>

          <div className="mission-content__bottombar">
            <div className="mission-bottombar__bracket">[ </div>
            <div className="mission-bottombar__text font-body">Empowering Every Driver</div>
            <div className="mission-bottombar__bracket"> ]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
