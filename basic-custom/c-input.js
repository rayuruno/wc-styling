const $Style = document.createElement("style");
$Style.textContent = `
input {
  background-color: var(--surface-color, #333333);
  color: var(--text-color, #000000);
}
`;

const $Label = document.createElement("label");
$Label.setAttribute("part", "label");
$Label.append(document.createElement("slot"), document.createElement("input"));

customElements.define(
  "c-input",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append($Style.cloneNode(true), $Label.cloneNode(true));
    }
  }
);
