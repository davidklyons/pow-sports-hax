// Write whatever additional code you want to be included
// This could be webcomponents added directly here or using import statements
// to pull in and reference other web components / ES module compliant libraries.
// utilize bare imports like import "@things/stuff/stuff.js"; and ensure you reference the js file directly
// to make a custom theme see the following for a well documented fully working example
// https://github.com/haxtheweb/webcomponents/blob/master/elements/example-haxcms-theme/example-haxcms-theme.js
// don't import that directory, we'd recommend copy and pasting it in here or
// creating your own theme based on it

// Write whatever additional code you want to be included
/// ===============================
// GLOBAL DARK MODE (HAXCMS SAFE)
// ===============================
// 
console.log("SRC CUSTOM.JS LOADED");

const darkStyle = document.createElement("style");
darkStyle.textContent = `
@media (prefers-color-scheme: dark) {
  body { background:#0b1220 !important; color:#e5e7eb !important; }

  /* Generic text */
  h1,h2,h3,h4,p,td,th,li,em,strong { color:#e5e7eb !important; }

  /* Your roster “cards” are sections with inline white background */
  section[style*="background:#fff"],
  section[style*="background: #fff"],
  div[style*="background:#fff"],
  div[style*="background: #fff"] {
    background:#111827 !important;
    color:#e5e7eb !important;
    border-color: rgba(255,255,255,.15) !important;
  }

  /* Table header rows (you used a dark gray background) */
  thead, thead tr, thead th {
    background:#0f172a !important;
    color:#e5e7eb !important;
  }

  /* Override your inline border-bottoms that use rgba(0,0,0,...) */
  th[style*="border-bottom:1px solid rgba(0,0,0"],
  td[style*="border-bottom:1px solid rgba(0,0,0"] {
    border-bottom: 1px solid rgba(255,255,255,.12) !important;
  }

  /* Opacity text like “Coach: …” */
  p[style*="opacity"] { color:#cbd5e1 !important; }

  /* Links */
  a { color:#93c5fd !important; }
  a[style*="color:inherit"] { color:#e5e7eb !important; }
}
`;
document.head.appendChild(darkStyle);