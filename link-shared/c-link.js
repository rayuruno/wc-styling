const $ButtonStyleLink = document.createElement("link");
$ButtonStyleLink.setAttribute("rel", "stylesheet");
$ButtonStyleLink.setAttribute("href", "./button-style.css");

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
        $ButtonStyleLink.cloneNode(true),
        $ComponentStyle.cloneNode(true),
        $a
      );
    }
  }
);
