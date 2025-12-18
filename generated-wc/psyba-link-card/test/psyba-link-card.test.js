import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-link-card.js";

describe("PsybaLinkCard test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-link-card
        title="title"
      ></psyba-link-card>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
