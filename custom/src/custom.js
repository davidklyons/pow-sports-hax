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
// custom/src/custom.js

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

const style = document.createElement("style");
style.textContent = `
/* LIGHT DEFAULTS */
:root{
  --psyba-surface: #ffffff;
  --psyba-on-surface: #111827;
  --psyba-muted: rgba(17, 24, 39, 0.8);
  --psyba-border: rgba(0,0,0,.12);
  --psyba-border-soft: rgba(0,0,0,.08);
}

/* OS / browser dark mode */
@media (prefers-color-scheme: dark) {
  :root{
    --psyba-surface: #0f172a;
    --psyba-on-surface: #e5e7eb;
    --psyba-muted: rgba(229,231,235,0.85);
    --psyba-border: rgba(148,163,184,0.35);
    --psyba-border-soft: rgba(148,163,184,0.25);
  }
}

/* HAXcms / app-driven dark mode (covers most toggles) */
html.dark, body.dark,
:root[data-theme="dark"], body[data-theme="dark"],
:root[theme="dark"], body[theme="dark"],
:root[color-scheme="dark"], body[color-scheme="dark"],
[data-theme="dark"], [theme="dark"], [color-scheme="dark"]{
  --psyba-surface: #0f172a;
  --psyba-on-surface: #e5e7eb;
  --psyba-muted: rgba(229,231,235,0.85);
  --psyba-border: rgba(148,163,184,0.35);
  --psyba-border-soft: rgba(148,163,184,0.25);
}
`;
document.head.appendChild(style);