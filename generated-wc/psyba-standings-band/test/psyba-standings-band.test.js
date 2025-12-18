import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-standings-band.js";

describe("PsybaStandingsBand test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-standings-band
        title="title"
      ></psyba-standings-band>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
