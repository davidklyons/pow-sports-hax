/**
 * Copyright 2025 davidklyons
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `psyba-schedule-band`
 *
 * @demo index.html
 * @element psyba-schedule-band
 */
export class PsybaScheduleBand extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "psyba-schedule-band";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/psyba-schedule-band.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });

    // schedule data state
    this.games = [];
    this.loading = true;
    this.error = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      games: { type: Array },
      loading: { type: Boolean },
      error: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(
            --psyba-schedule-band-label-font-size,
            var(--ddd-font-size-s)
          );
        }

        .grid {
          display: grid;
          gap: var(--ddd-spacing-3);
          margin-top: var(--ddd-spacing-3);
        }

        .error {
          color: var(--ddd-theme-error, #b91c1c);
          margin-top: var(--ddd-spacing-2);
        }
      `,
    ];
  }

  async firstUpdated() {
    try {
      const res = await fetch("/api/schedule.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.games = await res.json();
    } catch (e) {
      console.error(e);
      this.error = "Error loading schedule.";
    } finally {
      this.loading = false;
    }
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h3>
          <span>${this.t.title}:</span>
          ${this.title || "Upcoming Games"}
        </h3>

        ${this.loading ? html`<div>Loading schedule...</div>` : ""}

        ${this.error ? html`<div class="error">${this.error}</div>` : ""}

        ${!this.loading && !this.error
          ? html`
              <div class="grid">
                ${this.games.map(
                  (g) => html`
                    <psyba-game-card
                      date="${g.date}"
                      time="${g.time}"
                      home="${g.home}"
                      away="${g.away}"
                      location="${g.location}"
                    ></psyba-game-card>
                  `
                )}
              </div>
            `
          : ""}

        <slot></slot>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PsybaScheduleBand.tag, PsybaScheduleBand);
