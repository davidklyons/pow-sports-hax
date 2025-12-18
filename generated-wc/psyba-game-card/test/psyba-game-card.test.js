import { html, fixture, expect } from '@open-wc/testing';
import "../psyba-game-card.js";

describe("PsybaGameCard test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <psyba-game-card
        title="title"
      ></psyba-game-card>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
