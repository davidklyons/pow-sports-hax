// IMPORTS MUST BE FIRST

// IMPORTS MUST BE FIRST

import "./src/cli/psyba-nav.js";
import "./src/cli/psyba-menu-drawer.js";
import "./src/cli/psyba-site-header.js";
import "./src/cli/psyba-site-footer.js";

import "./src/cli/psyba-hero-banner.js";
import "./src/cli/psyba-announcement-band.js";
import "./src/cli/psyba-about-band.js";
import "./src/cli/psyba-stats-band.js";
import "./src/cli/psyba-news-band.js";

// schedule (order matters: game-card first)
import "./src/cli/psyba-game-card.js";
import "./src/cli/psyba-schedule-band.js";

console.log("CUSTOM.JS LOADED", document.baseURI);

// MENU API (optional)
fetch(`/api/menu.json`)
  .then((res) => res.json())
  .then((data) => console.log("MENU DATA:", data))
  .catch((e) => console.error("MENU FETCH FAILED:", e));

// SCHEDULE API (optional)
fetch(`/api/schedule.json`)
  .then((res) => res.json())
  .then((data) => console.log("SCHEDULE DATA:", data))
  .catch((e) => console.error("SCHEDULE FETCH FAILED:", e));
