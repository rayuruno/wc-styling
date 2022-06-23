const $ButtonStyle = document.createElement("style");
$ButtonStyle.textContent = `
button,
.button {
  all: unset;
  display: inline-block;
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  vertical-align: middle;
  font-family: sans-serif;
}
`;

export default class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append($ButtonStyle.cloneNode(true));
  }
}
