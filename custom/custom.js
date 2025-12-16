console.log("CUSTOM.JS LOADED ✅", document.baseURI);

// MENU API
fetch(`/api/menu.json`)
  .then(res => res.json())
  .then(data => {
    console.log("MENU DATA:", data);
  });

// SCHEDULE API
fetch(`/api/schedule.json`)
  .then(res => res.json())
  .then(data => {
    console.log("SCHEDULE DATA:", data);
  });

// COMPONENT IMPORTS
import "./psyba-hero-banner.js";
import "./psyba-announcement-band.js";
import "./psyba-about-band.js";
import "./psyba-stats-band.js";
import "./psyba-news-band.js";
import "./psyba-site-footer.js";
import "./psyba-schedule-band.js";
import "../psyba-nav.js";


console.log("PSYBA custom components registered");
