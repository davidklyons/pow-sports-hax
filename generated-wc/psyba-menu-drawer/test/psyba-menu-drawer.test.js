import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-menu-drawer.js";

describe("PsybaMenuDrawer test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-menu-drawer
        title="title"
      ></psyba-menu-drawer>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
