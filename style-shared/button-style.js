const $style = document.createElement("style");

$style.textContent = `
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

export default $style;
