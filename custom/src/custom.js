// Write whatever additional code you want to be included
// This could be webcomponents added directly here or using import statements
// to pull in and reference other web components / ES module compliant libraries.
// utilize bare imports like import "@things/stuff/stuff.js"; and ensure you reference the js file directly
// to make a custom theme see the following for a well documented fully working example
// https://github.com/haxtheweb/webcomponents/blob/master/elements/example-haxcms-theme/example-haxcms-theme.js
// don't import that directory, we'd recommend copy and pasting it in here or
// creating your own theme based on it

/// ===============================
// REGISTER CUSTOM COMPONENTS
// ===============================
import "./cli/psyba-site-header.js";
import "./cli/psyba-site-footer.js";
import "./cli/psyba-menu-drawer.js";
import "./cli/psyba-hero-band.js";
import "./cli/psyba-section-title.js";
import "./cli/psyba-cta-band.js";
import "./cli/psyba-schedule-band.js";
import "./cli/psyba-game-card.js";
import "./cli/psyba-standings-band.js";
import "./cli/psyba-link-card.js";

console.log("SRC CUSTOM.JS LOADED");

/// ===============================
// GLOBAL DARK MODE (HAXCMS SAFE)
// ===============================
const darkStyle = document.createElement("style");
darkStyle.textContent = `
@media (prefers-color-scheme: dark) {

  /* Base page */
  html, body {
    background: #0b1220 !important;
    color: #e5e7eb !important;
  }

  /* Make common text readable even when pages hard-code light colors */
  h1, h2, h3, h4, h5, h6,
  p, li, span, strong, em, a,
  td, th, label, small {
    color: #e5e7eb !important;
  }

  /* Links */
  a {
    text-decoration-color: rgba(229, 231, 235, 0.6) !important;
  }

  /* Generic borders so dashed / outlined sections still show */
  section, article, main, header, footer, div {
    border-color: rgba(148, 163, 184, 0.35) !important;
  }

  /* Tables (Roster) */
  table {
    background: #0f172a !important;
    color: #e5e7eb !important;
  }

  thead, th {
    background: #1e293b !important;
    color: #f8fafc !important;
  }

  td {
    background: transparent !important;
    color: #e5e7eb !important;
  }

  /* Fix light cards / sections that use inline styles */
  [style*="background:#fff"],
  [style*="background: #fff"],
  [style*="background:white"],
  [style*="background: white"],
  [style*="background:#f8fafc"],
  [style*="background: #f8fafc"],
  [style*="background:#f1f5f9"],
  [style*="background: #f1f5f9"] {
    background: #0f172a !important;
    color: #e5e7eb !important;
  }
}
`;
document.head.appendChild(darkStyle);
