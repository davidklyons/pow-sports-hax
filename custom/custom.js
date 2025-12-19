// IMPORTS MUST BE FIRST
import "./src/cli/psyba-hero-band.js";
import "./src/cli/psyba-cta-band.js";
import "./src/cli/psyba-section-title.js";
import "./src/cli/psyba-site-header.js";
import "./src/cli/psyba-site-footer.js";
import "./src/cli/psyba-menu-drawer.js";
import "./src/cli/psyba-link-card.js";
import "./src/cli/psyba-standings-band.js";
import "./src/cli/psyba-game-card.js";
import "./src/cli/psyba-schedule-band.js";

console.log("CUSTOM.JS LOADED", document.baseURI);

// MENU API
fetch("/api/menu.json")
  .then((res) => res.json())
  .then((data) => console.log("MENU DATA:", data))
  .catch((e) => console.error("MENU FETCH FAILED:", e));

// SCHEDULE API
fetch("/api/schedule.json")
  .then((res) => res.json())
  .then((data) => console.log("SCHEDULE DATA:", data))
  .catch((e) => console.error("SCHEDULE FETCH FAILED:", e));

console.log("PSYBA custom components registered");