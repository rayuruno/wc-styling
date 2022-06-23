import $ButtonStyle from "./button-style.js";

const $ComponentStyle = new CSSStyleSheet();

$ComponentStyle.replaceSync(`
button {
  background-color: pink;
}
`);

const $Button = document.createElement("button");
$Button.append(document.createElement("slot"));

customElements.define(
  "c-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.adoptedStyleSheets = [$ButtonStyle, $ComponentStyle];
      this.shadowRoot.append($Button.cloneNode(true));
    }
  }
);
