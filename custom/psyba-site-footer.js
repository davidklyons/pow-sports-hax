class PsybaSiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer style="
        display:block;
        padding:24px;
        background:#1e40af;
        color:white;
        border-radius:16px;
        margin-top:32px;
        text-align:center;
      ">
        <p style="margin:8px 0; font-size:.9rem;">
          © ${year} Pow Sports Youth Basketball Academy
        </p>
        <p style="margin:8px 0; font-size:.9rem;">
          <a style="color:inherit; margin:0 8px; text-decoration:underline;" href="/about">About</a> |
          <a style="color:inherit; margin:0 8px; text-decoration:underline;" href="/schedule">Schedule</a> |
          <a style="color:inherit; margin:0 8px; text-decoration:underline;" href="#">Contact</a>
        </p>
      </footer>
    `;
  }
}

customElements.define("psyba-site-footer", PsybaSiteFooter);
