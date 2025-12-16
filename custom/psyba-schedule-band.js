class PsybaScheduleBand extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<section style="padding:16px;max-width:1000px;margin:0 auto;">
      <h2>Upcoming Games</h2>
      <div>Loading schedule...</div>
    </section>`;

    try {
      const res = await fetch("/api/schedule.json");
      const games = await res.json();

      // ✅ ensure the custom element is registered before we inject it
      await customElements.whenDefined("psyba-game-card");

      this.innerHTML = `
        <section style="padding:16px;max-width:1000px;margin:0 auto;">
          <h2>Upcoming Games</h2>
          ${games.map(g => `
            <psyba-game-card
              date="${g.date}"
              time="${g.time}"
              home="${g.home}"
              away="${g.away}"
              location="${g.location}"
            ></psyba-game-card>
          `).join("")}
        </section>
      `;
    } catch (e) {
      this.innerHTML += `<div style="color:red;">Error loading schedule</div>`;
      console.error(e);
    }
  }
}
customElements.define("psyba-schedule-band", PsybaScheduleBand);
