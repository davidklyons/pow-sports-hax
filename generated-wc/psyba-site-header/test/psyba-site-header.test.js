import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-site-header.js";

describe("PsybaSiteHeader test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-site-header
        title="title"
      ></psyba-site-header>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
