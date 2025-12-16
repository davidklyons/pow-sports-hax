class PsybaAboutBand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="
        display:block;
        padding:32px 24px;
        background:#f8fafc;
        color:#111827;
        border-radius:16px;
        margin-bottom:24px;
      ">
        <h2 style="margin-top:0;">About PSYBA</h2>
        <p style="max-width:720px; line-height:1.6;">
          Pow Sports Youth Basketball Academy (PSYBA) is a nonprofit youth
          basketball organization focused on skill development, sportsmanship,
          and community involvement. Our programs are designed to support
          athletes at all levels.
        </p>
      </section>
    `;
  }
}

customElements.define("psyba-about-band", PsybaAboutBand);
