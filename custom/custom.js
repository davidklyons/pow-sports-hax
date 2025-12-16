// IMPORTS MUST BE FIRST
import "@haxtheweb/simple-cta/simple-cta.js";
import "./psyba-hero-banner.js";
import "./psyba-announcement-band.js";
import "./psyba-about-band.js";
import "./psyba-stats-band.js";
import "./psyba-news-band.js";
import "./psyba-site-footer.js";
import "./psyba-nav.js";

import "./psyba-game-card.js";     // BEFORE schedule band
import "./psyba-news-card.js";     // (fine here too)

import "./psyba-schedule-band.js"; // AFTER game-card

//norm JS can run
console.log("CUSTOM.JS LOADED", document.baseURI);

// MENU API
fetch(`/api/menu.json`)
  .then((res) => res.json())
  .then((data) => console.log("MENU DATA:", data))
  .catch((e) => console.error("MENU FETCH FAILED:", e));

// SCHEDULE API
fetch(`/api/schedule.json`)
  .then((res) => res.json())
  .then((data) => console.log("SCHEDULE DATA:", data))
  .catch((e) => console.error("SCHEDULE FETCH FAILED:", e));

console.log("PSYBA custom components registered");
