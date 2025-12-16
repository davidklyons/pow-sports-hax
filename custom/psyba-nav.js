class PsybaNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.items = [];
    this.open = false;
  }

  connectedCallback() {
    this.render();
    fetch("/api/menu.json")
      .then((r) => r.json())
      .then((data) => {
        this.items = data;
        this.render();
      })
      .catch(() => {
        this.shadowRoot.innerHTML = "<p>Menu failed to load</p>";
      });
  }

  toggle() {
    this.open = !this.open;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .bar {
          display: flex;
          justify-content: space-between;
          padding: 14px;
          background: #0b1220;
          color: white;
          border-radius: 16px;
        }
        button {
          background: #1e293b;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
        }
        nav {
          display: ${this.open ? "block" : "none"};
          background: #0b1220;
          margin-top: 8px;
          border-radius: 12px;
        }
        a {
          display: block;
          padding: 10px;
          color: white;
          text-decoration: none;
          border-bottom: 1px solid #334155;
        }
      </style>

      <div class="bar">
        <strong>PSYBA</strong>
        <button id="toggle">Menu</button>
      </div>

      <nav>
        ${this.items
          .map((i) => `<a href="${i.slug}">${i.title}</a>`)
          .join("")}
      </nav>
    `;

    this.shadowRoot
      .querySelector("#toggle")
      ?.addEventListener("click", () => this.toggle());
  }
}

customElements.define("psyba-nav", PsybaNav);
