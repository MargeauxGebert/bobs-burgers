export default function Button(text) {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("navigation__button");
  buttonElement.innerHTML = text;
  return buttonElement;
}
