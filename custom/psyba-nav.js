import { LitElement, html, css } from "lit";

export class PsybaNav extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    items: { type: Array },
    activePath: { type: String },
  };

  constructor() {
    super();
    this.open = false;
    this.items = [];
    this.activePath = window.location.pathname || "/";
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._onPop);
  }
  disconnectedCallback() {
    window.removeEventListener("popstate", this._onPop);
    super.disconnectedCallback();
  }

  _onPop = () => {
    this.activePath = window.location.pathname || "/";
    this.requestUpdate();
  };

  async firstUpdated() {
    try {
      const res = await fetch("/api/menu.json");
      this.items = await res.json();
    } catch (e) {
      this.items = [];
    }
  }

  static styles = css`
    :host {
      display: block;
      margin: 16px 0 24px;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    }

    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 16px;
      background: #0b1220;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .brand {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    .brand strong {
      font-size: 14px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      opacity: 0.9;
    }
    .brand span {
      font-size: 12px;
      opacity: 0.75;
    }

    button {
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(255, 255, 255, 0.06);
      color: #fff;
      padding: 10px 12px;
      border-radius: 12px;
      cursor: pointer;
      font-size: 13px;
    }

    nav {
      display: none;
      margin-top: 10px;
      padding: 10px 14px;
      border-radius: 16px;
      background: #0b1220;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    :host([open]) nav {
      display: block;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 8px;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 14px;
    }
    a:last-child {
      border-bottom: none;
    }
    a[aria-current="page"] {
      font-weight: 700;
      text-decoration: underline;
    }
    .hint {
      font-size: 12px;
      opacity: 0.7;
      margin-top: 8px;
    }
  `;

  render() {
    return html`
      <div class="bar">
        <div class="brand">
          <strong>PSYBA</strong>
          <span>Pow Sports Youth Basketball Academy</span>
        </div>
        <button @click=${() => (this.open = !this.open)}>
          ${this.open ? "Close" : "Menu"}
        </button>
      </div>

      <nav aria-label="Site menu">
        ${this.items.map(
          (i) => html`
            <a
              href="${i.slug}"
              aria-current="${this.activePath === i.slug ? "page" : "false"}"
              @click=${() => (this.open = false)}
              >${i.title} <span aria-hidden="true">→</span></a
            >
          `
        )}
        <div class="hint">Menu loads from <code>/api/menu.json</code></div>
      </nav>
    `;
  }
}

customElements.define("psyba-nav", PsybaNav);
