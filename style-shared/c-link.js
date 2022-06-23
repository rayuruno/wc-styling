import $ButtonStyle from "./button-style.js";

const $ComponentStyle = document.createElement("style");
$ComponentStyle.textContent = `
a {
  color: pink;
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

      let $a = $A.cloneNode(true);
      $a.setAttribute("href", this.getAttribute("href"));

      this.shadowRoot.append(
        $ButtonStyle.cloneNode(true),
        $ComponentStyle.cloneNode(true),
        $a
      );
    }
  }
);
