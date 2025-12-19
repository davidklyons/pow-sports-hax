class PsybaStatsBand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="
        display:block;
        padding:32px 24px;
        border:2px solid #1e40af;
        border-radius:16px;
        margin-bottom:24px;
        text-align:center;
      ">
        <h2>Program Highlights</h2>

        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));
          gap:16px;
          margin-top:16px;
        ">
          ${this._stat("250+", "Athletes")}
          ${this._stat("18", "Teams")}
          ${this._stat("12", "Coaches")}
          ${this._stat("10+", "Years Active")}
        </div>
      </section>
    `;
  }

  _stat(value, label) {
    return `
      <div>
        <div style="font-size:1.5rem; font-weight:bold;">${value}</div>
        <div style="font-size:.9rem; opacity:.75;">${label}</div>
      </div>
    `;
  }
}

customElements.define("psyba-stats-band", PsybaStatsBand);
