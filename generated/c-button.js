import css from "./button.mcss";
const $style = document.createElement("style");
$style.textContent = css;

const $button = document.createElement("button");
$button.append(document.createElement("slot"));

customElements.define(
  "c-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append($style.cloneNode(true), $button.cloneNode(true));
    }
  }
);
