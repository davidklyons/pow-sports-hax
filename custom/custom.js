// IMPORTS MUST BE FIRST

import "./psyba-nav.js";
import "./psyba-menu-drawer.js";
import "./psyba-site-header.js";
import "./psyba-site-footer.js";

import "./psyba-hero-banner.js";
import "./psyba-announcement-band.js";
import "./psyba-about-band.js";
import "./psyba-stats-band.js";
import "./psyba-news-band.js";

// schedule
import "./psyba-game-card.js";
import "./psyba-schedule-band.js";

console.log("CUSTOM.JS LOADED", document.baseURI);

fetch(`/api/menu.json`)
  .then((res) => res.json())
  .then((data) => console.log("MENU DATA:", data))
  .catch((e) => console.error("MENU FETCH FAILED:", e));

fetch(`/api/schedule.json`)
  .then((res) => res.json())
  .then((data) => console.log("SCHEDULE DATA:", data))
  .catch((e) => console.error("SCHEDULE FETCH FAILED:", e));