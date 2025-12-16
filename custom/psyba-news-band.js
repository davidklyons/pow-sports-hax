class PsybaNewsBand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="
        display:block;
        padding:32px 24px;
        background:#f1f5f9;
        border-radius:16px;
        margin-bottom:24px;
      ">
        <h2>Latest News</h2>

        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));
          gap:16px;
          margin-top:16px;
        ">
          ${this._card("Winter League Registration Open", "Sign-ups are now open for the upcoming winter season.")}
          ${this._card("Coaching Applications", "We are accepting applications for volunteer coaches.")}
          ${this._card("Community Fundraiser", "Join us for our annual fundraiser to support youth programs.")}
        </div>
      </section>
    `;
  }

  _card(title, body) {
    return `
      <div style="padding:16px; border:1px solid #1e40af; border-radius:12px;">
        <h3 style="margin-top:0;">${title}</h3>
        <p style="margin:0;">${body}</p>
      </div>
    `;
  }
}

customElements.define("psyba-news-band", PsybaNewsBand);
