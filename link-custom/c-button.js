const $Link = document.createElement("link");
$Link.setAttribute("rel", "stylesheet");
const $Button = document.createElement("button");
$Button.append(document.createElement("slot"));

customElements.define(
  "c-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      let $link = $Link.cloneNode(true);
      $link.setAttribute("href", this.getAttribute("style-href"));
      this.shadowRoot.append($link, $Button.cloneNode(true));
    }
  }
);
