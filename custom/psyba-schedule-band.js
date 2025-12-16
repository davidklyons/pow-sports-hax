class PsybaScheduleBand extends HTMLElement {
  async connectedCallback() {
    this.attachShadow({ mode: "open" });
    
    this.shadowRoot.innerHTML = `
      <style>
        section {
          padding: 16px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        h2 {
          color: #111827;
          margin: 0 0 16px 0;
        }
        
        .loading {
          color: #4b5563;
        }
        
        .error {
          color: #dc2626;
        }
        
        @media (prefers-color-scheme: dark) {
          h2 {
            color: #f8fafc;
          }
          
          .loading {
            color: #9ca3af;
          }
          
          .error {
            color: #fca5a5;
          }
        }
      </style>
      
      <section>
        <h2>Upcoming Games</h2>
        <div class="loading">Loading schedule...</div>
      </section>
    `;

    try {
      const res = await fetch("/api/schedule.json");
      const games = await res.json();

      const hasGameCard = !!customElements.get("psyba-game-card");

      const gamesHTML = hasGameCard
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
            <div class="fallback-card">
              <strong>${g.date} — ${g.time}</strong><br/>
              ${g.home} vs ${g.away}<br/>
              <em>${g.location}</em>
            </div>
          `).join("");

      this.shadowRoot.innerHTML = `
        <style>
          section {
            padding: 16px;
            max-width: 1000px;
            margin: 0 auto;
          }
          
          h2 {
            color: #111827;
            margin: 0 0 16px 0;
          }
          
          .fallback-card {
            padding: 12px;
            margin: 8px 0;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 12px;
            background: #fff;
            color: #1f2937;
          }
          
          @media (prefers-color-scheme: dark) {
            h2 {
              color: #f8fafc;
            }
            
            .fallback-card {
              background: #0f172a;
              border: 1px solid rgba(255,255,255,.15);
              color: #f1f5f9;
            }
          }
        </style>
        
        <section>
          <h2>Upcoming Games</h2>
          ${gamesHTML}
        </section>
      `;
    } catch (e) {
      this.shadowRoot.innerHTML = `
        <style>
          section {
            padding: 16px;
            max-width: 1000px;
            margin: 0 auto;
          }
          
          h2 {
            color: #111827;
            margin: 0 0 16px 0;
          }
          
          .error {
            color: #dc2626;
          }
          
          @media (prefers-color-scheme: dark) {
            h2 {
              color: #f8fafc;
            }
            
            .error {
              color: #fca5a5;
            }
          }
        </style>
        
        <section>
          <h2>Upcoming Games</h2>
          <div class="error">Error loading schedule.</div>
        </section>
      `;
      console.error(e);
    }
  }
}

customElements.define("psyba-schedule-band", PsybaScheduleBand);