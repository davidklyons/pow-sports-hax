if (!customElements.get("psyba-news-band")) {
  // existing code below stays the same



class PsybaNewsBand extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          display: block;
          padding: 32px 24px;
          background: #f1f5f9;
          border-radius: 16px;
          margin-bottom: 24px;
        }
        
        h2 {
          margin: 0 0 16px 0;
          color: #111827;
        }
        
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        
        .card {
          padding: 16px;
          border: 1px solid #1e40af;
          border-radius: 12px;
          background: #fff;
          color: #1f2937;
        }
        
        .card h3 {
          margin-top: 0;
          margin-bottom: 8px;
          color: #111827;
        }
        
        .card p {
          margin: 0;
          line-height: 1.5;
        }
        
        @media (prefers-color-scheme: dark) {
          section {
            background: #1e293b;
          }
          
          h2 {
            color: #f8fafc;
          }
          
          .card {
            background: #0f172a;
            border: 1px solid #3b82f6;
            color: #f1f5f9;
          }
          
          .card h3 {
            color: #f8fafc;
          }
        }
      </style>
      
      <section>
        <h2>Latest News</h2>

        <div class="news-grid">
          ${this._card("Winter League Registration Open", "Sign-ups are now open for the upcoming winter season.")}
          ${this._card("Coaching Applications", "We are accepting applications for volunteer coaches.")}
          ${this._card("Community Fundraiser", "Join us for our annual fundraiser to support youth programs.")}
        </div>
      </section>
    `;
  }

  _card(title, body) {
    return `
      <div class="card">
        <h3>${title}</h3>
        <p>${body}</p>
      </div>
    `;
  }
}

customElements.define("psyba-news-band", PsybaNewsBand);
}