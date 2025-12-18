import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-site-footer.js";

describe("PsybaSiteFooter test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-site-footer
        title="title"
      ></psyba-site-footer>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
