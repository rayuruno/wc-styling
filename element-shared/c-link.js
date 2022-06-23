import Button from "./button.js";

const $A = document.createElement("a");
$A.classList.add("button");
$A.append(document.createElement("slot"));

customElements.define(
  "c-link",
  class extends Button {
    constructor() {
      super();

      let $a = $A.cloneNode(true);
      $a.setAttribute("href", this.getAttribute("href"));

      this.shadowRoot.append($a);
    }
  }
);
