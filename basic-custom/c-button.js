const $style = document.createElement("style");
$style.textContent = `
button {
  background-color: var(--surface-color, #ffffff);
  color: var(--text-color, #000000);
}
`;

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
