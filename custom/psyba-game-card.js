class PsybaGameCard extends HTMLElement {
  static get observedAttributes() {
    return ["date", "time", "home", "away", "location"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const date = this.getAttribute("date") || "";
    const time = this.getAttribute("time") || "";
    const home = this.getAttribute("home") || "";
    const away = this.getAttribute("away") || "";
    const location = this.getAttribute("location") || "";

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        .card{
          display:block;
          border:1px solid rgba(0,0,0,.12);
          border-radius:14px;
          padding:14px 16px;
          background:#fff;
          color: #000;
          box-shadow: 0 1px 2px rgba(0,0,0,.05);
          margin: 10px 0;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        .top{ font-weight:700; margin:0 0 6px; }
        .mid{ margin:0 0 6px; }
        .loc{ margin:0; font-style:italic; opacity:.9; }
        
        @media (prefers-color-scheme: dark) {
          .card {
            background: #1e293b;
            color: #e5e7eb;
            border: 1px solid rgba(255,255,255,.12);
            box-shadow: 0 1px 2px rgba(0,0,0,.2);
          }
        }
      </style>

      <section class="card" aria-label="Game">
        <p class="top">${escapeHTML(date)} — ${escapeHTML(time)}</p>
        <p class="mid">${escapeHTML(home)} vs ${escapeHTML(away)}</p>
        <p class="loc">${escapeHTML(location)}</p>
      </section>
    `;
  }
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

customElements.define("psyba-game-card", PsybaGameCard);