import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-schedule-band.js";

describe("PsybaScheduleBand test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-schedule-band
        title="title"
      ></psyba-schedule-band>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
