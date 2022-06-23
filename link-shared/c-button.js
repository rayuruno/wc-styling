const $ButtonStyleLink = document.createElement("link");
$ButtonStyleLink.setAttribute("rel", "stylesheet");
$ButtonStyleLink.setAttribute("href", "./button-style.css");

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
        $ButtonStyleLink.cloneNode(true),
        $ComponentStyle.cloneNode(true),
        $Button.cloneNode(true)
      );
    }
  }
);
