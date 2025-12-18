/**
 * Copyright 2025 davidklyons
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `psyba-game-card`
 *
 * @demo index.html
 * @element psyba-game-card
 */
export class PsybaGameCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "psyba-game-card";
  }

  constructor() {
    super();
    this.title = "";
    this.date = "";
    this.time = "";
    this.home = "";
    this.away = "";
    this.location = "";

    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
      when: "When",
      matchup: "Matchup",
      location: "Location",
    };

    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/psyba-game-card.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      date: { type: String, reflect: true },
      time: { type: String, reflect: true },
      home: { type: String, reflect: true },
      away: { type: String, reflect: true },
      location: { type: String, reflect: true },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .card {
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-l, 16px);
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-surface, #fff);
          color: var(--ddd-theme-primary);
        }

        .top {
          font-weight: 700;
          font-size: var(--ddd-font-size-s);
          margin-bottom: var(--ddd-spacing-2);
        }

        .matchup {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-2);
        }

        .meta {
          font-size: var(--ddd-font-size-xs, 0.85rem);
          opacity: 0.85;
        }

        .label {
          font-weight: 700;
          margin-right: 6px;
        }
      `,
    ];
  }

  render() {
    const when = [this.date, this.time].filter(Boolean).join(" — ");
    const matchup =
      this.home && this.away ? `${this.home} vs ${this.away}` : "";

    return html`
      <div class="card">
        ${this.title
          ? html`<div class="top">${this.title}</div>`
          : when
          ? html`<div class="top">${when}</div>`
          : ""}

        ${matchup ? html`<div class="matchup">${matchup}</div>` : ""}

        ${this.location
          ? html`<div class="meta">
              <span class="label">${this.t.location}:</span>${this.location}
            </div>`
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

globalThis.customElements.define(PsybaGameCard.tag, PsybaGameCard);
