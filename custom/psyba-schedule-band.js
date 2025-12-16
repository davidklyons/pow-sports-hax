class PsybaScheduleBand extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <section style="padding:16px;max-width:1000px;margin:0 auto;">
        <h2>Upcoming Games</h2>
        <div>Loading schedule...</div>
      </section>
    `;

    try {
      const res = await fetch("/api/schedule.json");
      const games = await res.json();

      const hasGameCard = !!customElements.get("psyba-game-card");

      this.innerHTML = `
        <section style="padding:16px;max-width:1000px;margin:0 auto;">
          <h2>Upcoming Games</h2>
          ${
            hasGameCard
              ? games.map(g => `
                  <psyba-game-card
                    date="${g.date}"
                    time="${g.time}"
                    home="${g.home}"
                    away="${g.away}"
                    location="${g.location}"
                  ></psyba-game-card>
                `).join("")
              : games.map(g => `
                  <div style="padding:12px;margin:8px 0;border:1px solid rgba(0,0,0,.2);border-radius:12px;background:#fff;">
                    <strong>${g.date} — ${g.time}</strong><br/>
                    ${g.home} vs ${g.away}<br/>
                    <em>${g.location}</em>
                  </div>
                `).join("")
          }
        </section>
      `;
    } catch (e) {
      this.innerHTML = `
        <section style="padding:16px;max-width:1000px;margin:0 auto;">
          <h2>Upcoming Games</h2>
          <div style="color:red;">Error loading schedule.</div>
        </section>
      `;
      console.error(e);
    }
  }
}

customElements.define("psyba-schedule-band", PsybaScheduleBand);
