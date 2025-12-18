import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-hero-band.js";

describe("PsybaHeroBand test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-hero-band
        title="title"
      ></psyba-hero-band>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
