"use strict";

let button = document.querySelector("#clickable");
let buttonClickHandler = () => {
  alert("hello");
};

button.addEventListener("click", buttonClickHandler);

button.addEventListener("click", () => {
  alert("2");
});

button.removeEventListener("click", buttonClickHandler);

// События - HANDLER
// либо (лучше)
let inputFocusHandler = () => {};
// либо
let onInputFocus = () => {};
