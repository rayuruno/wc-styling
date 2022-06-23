import $ButtonStyle from "./button-style.js";

const $ComponentStyle = document.createElement("style");
$ComponentStyle.textContent = `
button {
  background-color: pink;
}
`;

const $Button = document.createElement("button");
$Button.append(document.createElement("slot"));

customElements.define(
  "c-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(
        $ButtonStyle.cloneNode(true),
        $ComponentStyle.cloneNode(true),
        $Button.cloneNode(true)
      );
    }
  }
);
