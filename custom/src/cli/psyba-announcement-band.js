class PsybaAnnouncementBand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="
        display:block;
        padding:24px;
        border:2px dashed #1e40af;
        border-radius:16px;
        margin-bottom:24px;
      ">
        <h2>Announcements</h2>
        <p>Upcoming tryouts, events, and important updates.</p>
      </section>
    `;
  }
}

customElements.define("psyba-announcement-band", PsybaAnnouncementBand);
