class PsybaNewsCard extends HTMLElement {
  static get observedAttributes() {
    return ["title", "date", "blurb", "href"];
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
    const title = this.getAttribute("title") || "Update";
    const date = this.getAttribute("date") || "";
    const blurb = this.getAttribute("blurb") || "";
    const href = this.getAttribute("href") || "";

    const linkHTML = href
      ? `<a href="${escapeAttr(href)}">Read more →</a>`
      : "";

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        article{
          border:1px solid rgba(0,0,0,.12);
          border-radius:14px;
          padding:14px 16px;
          background:#fff;
          color: #1f2937;
          margin: 10px 0;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        h3{ margin:0 0 6px; font-size:16px; color: #111827; }
        .date{ margin:0 0 8px; opacity:.75; font-size:12px; }
        p{ margin:0 0 10px; line-height:1.5; }
        a{ font-weight:700; text-decoration: underline; color: #1d4ed8; }
        a:hover { color: #1e40af; }
        a:focus-visible { outline: 3px solid #93c5fd; outline-offset: 2px; }
        
        @media (prefers-color-scheme: dark) {
          article {
            background: #0f172a;
            color: #f1f5f9;
            border: 1px solid rgba(255,255,255,.15);
          }
          h3 { color: #f8fafc; }
          .date { opacity: .85; }
          a { color: #60a5fa; }
          a:hover { color: #93c5fd; }
          a:focus-visible { outline: 3px solid #3b82f6; }
        }
      </style>

      <article aria-label="News item">
        <h3>${escapeHTML(title)}</h3>
        ${date ? `<p class="date">${escapeHTML(date)}</p>` : ""}
        ${blurb ? `<p>${escapeHTML(blurb)}</p>` : ""}
        ${linkHTML}
      </article>
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

function escapeAttr(s) {
  // safe enough for href attribute
  return String(s).replaceAll('"', "%22");
}

customElements.define("psyba-news-card", PsybaNewsCard);