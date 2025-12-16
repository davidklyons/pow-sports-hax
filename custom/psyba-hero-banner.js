class PsybaHeroBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="
        display:block;
        padding:48px 24px;
        background:#1e40af;
        color:white;
        border-radius:24px;
        margin-bottom:24px;
      ">
        <h1 style="margin:0 0 12px 0; font-size:2rem;">
          Pow Sports Youth Basketball Academy
        </h1>
        <p style="margin:0; font-size:1.1rem; opacity:.9;">
          Building skills, confidence, and teamwork for young athletes.
        </p>
      </section>
    `;
  }
}

customElements.define("psyba-hero-banner", PsybaHeroBanner);
