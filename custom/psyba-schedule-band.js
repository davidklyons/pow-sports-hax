class PsybaScheduleBand extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <div style="padding:16px;border:2px solid red;">
        SCHEDULE BAND LOADED ✅ (vanilla)<br/>
        Loading schedule...
      </div>
    `;

    try {
      const res = await fetch("/api/schedule.json");
      const games = await res.json();

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
      this.innerHTML += `<div style="color:red;">Error loading schedule: ${e}</div>`;
      console.error(e);
    }
  }
}
customElements.define("psyba-schedule-band", PsybaScheduleBand);
