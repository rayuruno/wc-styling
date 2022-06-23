import Button from "./button.js";

const $Button = document.createElement("button");
$Button.append(document.createElement("slot"));

customElements.define(
  "c-button",
  class extends Button {
    constructor() {
      super();

      this.shadowRoot.append($Button.cloneNode(true));
    }
  }
);
