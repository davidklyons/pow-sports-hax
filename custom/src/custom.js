// Write whatever additional code you want to be included
// This could be webcomponents added directly here or using import statements
// to pull in and reference other web components / ES module compliant libraries.

// custom/src/custom.js
// Single source of truth for component registration + theme vars.

import "@haxtheweb/d-d-d/d-d-d.js";

// REGISTER COMPONENTS (keep both menus for now — page content decides which one shows)
import "./cli/psyba-nav.js";
import "./cli/psyba-menu-drawer.js";

import "./cli/psyba-site-header.js";
import "./cli/psyba-site-footer.js";
import "./cli/psyba-hero-banner.js";

import "./cli/psyba-announcement-band.js";
import "./cli/psyba-about-band.js";
import "./cli/psyba-stats-band.js";
import "./cli/psyba-news-band.js";

import "./cli/psyba-schedule-band.js";
import "./cli/psyba-game-card.js";

import "./cli/psyba-standings-band.js";
import "./cli/psyba-section-title.js";
import "./cli/psyba-cta-band.js";
import "./cli/psyba-link-card.js";

console.log("custom/src/custom.js loaded (components registered)");

// ---- PSYBA THEME VARS (LIGHT + DARK) ----
// Keep these explicit so your cards always have readable contrast.
const style = document.createElement("style");
style.textContent = `
:root{
  color-scheme: light dark;

  --psyba-surface: #ffffff;
  --psyba-on-surface: #111827;
  --psyba-muted: rgba(17, 24, 39, 0.80);
  --psyba-border: rgba(0,0,0,.12);
  --psyba-border-soft: rgba(0,0,0,.08);
}

@media (prefers-color-scheme: dark) {
  :root{
    --psyba-surface: #0f172a;
    --psyba-on-surface: #e5e7eb;
    --psyba-muted: rgba(229,231,235,0.85);
    --psyba-border: rgba(148,163,184,0.35);
    --psyba-border-soft: rgba(148,163,184,0.25);
  }
}

body{
  background: var(--psyba-surface);
  color: var(--psyba-on-surface);
}

/* keep footer clickable */
psyba-site-footer{
  position: relative;
  z-index: 10;
}
`;
document.head.appendChild(style);
