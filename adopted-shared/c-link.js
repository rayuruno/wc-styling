import $ButtonStyle from "./button-style.js";

const $ComponentStyle = document.createElement("style");
$ComponentStyle.textContent = `
a {
  color: pink;
}
/* note that specifity must be higher to overload adopted styles */
:host a {
  text-decoration: underline;
}
`;

const $A = document.createElement("a");
$A.classList.add("button");
$A.append(document.createElement("slot"));

customElements.define(
  "c-link",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      this.shadowRoot.adoptedStyleSheets = [$ButtonStyle];

      let $a = $A.cloneNode(true);
      $a.setAttribute("href", this.getAttribute("href"));

      this.shadowRoot.append($ComponentStyle.cloneNode(true), $a);
    }
  }
);
