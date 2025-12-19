/**
 * Copyright 2025 davidklyons
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PsybaMenuDrawer extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "psyba-menu-drawer";
  }

  constructor() {
    super();
    this.open = false;
    this.menu = null;
    this.loading = true;
    this.error = "";

    this.t = this.t || {};
    this.t = { ...this.t, menu: "Menu" };
  }

  static get properties() {
    return {
      ...super.properties,
      open: { type: Boolean, reflect: true },
      menu: { type: Object },
      loading: { type: Boolean },
      error: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        button {
          all: unset;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-m, 12px);
          border: 1px solid var(--ddd-theme-primary);
          color: var(--ddd-theme-primary);
          background: var(--ddd-theme-surface, #fff);
        }

        .drawer {
          margin-top: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-l, 16px);
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-surface, #fff);
          display: none;
        }

        :host([open]) .drawer {
          display: block;
        }

        .group {
          margin-bottom: var(--ddd-spacing-4);
        }

        .heading {
          font-weight: 800;
          margin-bottom: var(--ddd-spacing-2);
        }

        a {
          display: block;
          padding: var(--ddd-spacing-2) 0;
          color: var(--ddd-theme-primary);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .error {
          color: var(--ddd-theme-error, #b91c1c);
        }
      `,
    ];
  }

  toggle() {
    this.open = !this.open;
  }

  async firstUpdated() {
    try {
      const res = await fetch("/api/menu", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.menu = await res.json();
    } catch (e) {
      console.error(e);
      this.error = "Error loading menu.";
    } finally {
      this.loading = false;
    }
  }

  // Normalize multiple possible menu shapes
  get items() {
    if (!this.menu) return [];
    if (Array.isArray(this.menu)) return this.menu;
    if (Array.isArray(this.menu.items)) return this.menu.items;
    if (Array.isArray(this.menu.children)) return this.menu.children;
    return [];
  }

  // Treat objects with children/items as headings, otherwise as links
  renderItem(item) {
    const children = item?.children || item?.items || [];
    const isHeading = Array.isArray(children) && children.length > 0;

    if (isHeading) {
      return html`
        <div class="group">
          <div class="heading">${item.title || item.label || "Section"}</div>
          ${children.map((c) => this.renderItem(c))}
        </div>
      `;
    }

    // prefer page routing (?page=slug) if slug present
    const slug = item.slug || item.id || item.name;
    const href =
      item.href ||
      item.url ||
      (slug ? `?page=${encodeURIComponent(slug)}` : "#");

    const label = item.title || item.label || href;

    return html`<a href="${href}">${label}</a>`;
  }

  render() {
    return html`
      <button @click=${this.toggle} aria-expanded="${this.open}">
        ☰ ${this.t.menu}
      </button>

      <div class="drawer" role="navigation" aria-label="Site navigation">
        ${this.loading ? html`<div>Loading menu...</div>` : ""}
        ${this.error ? html`<div class="error">${this.error}</div>` : ""}
        ${!this.loading && !this.error
          ? html`${this.items.map((i) => this.renderItem(i))}`
          : ""}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PsybaMenuDrawer.tag, PsybaMenuDrawer);
