"use strict";

// Движение

// let dragMe = document.querySelector(".drag-me");

// dragMe.addEventListener("mousedown", (evt) => {
//   evt.preventDefault();
//   console.log("MOUSEDOWN");

//   dragMe.style.position = "absolute";

//   let startCoord = {
//     x: evt.clientX,
//     y: evt.clientY,
//   };

//   let onMouseMove = (moveEvt) => {
//     moveEvt.preventDefault();
//     console.log("MOUSEMOVE");

//     let shift = {
//       x: startCoord.x - moveEvt.clientX,
//       y: startCoord.y - moveEvt.clientY,
//     };

//     startCoord = {
//       x: moveEvt.clientX,
//       y: moveEvt.clientY,
//     };

//     dragMe.style.top = dragMe.offsetTop - shift.y + "px";
//     dragMe.style.left = dragMe.offsetLeft - shift.x + "px";
//   };

//   let onMouseUp = (upEvt) => {
//     upEvt.preventDefault();
//     console.log("MOUSEUP");

//     dragMe.style.position = "block";

//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onmouseup);
//   };

//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", onMouseUp);
// });

// -----------------------------------------------------------------------------

// window.myshka = "1";
// let lyagushka = "2";

// let teremok = (param1, param2) => {
//   let teremokRoom = () => {
//     // let lyagushka = "3"; // Так делать нельзя

//     console.log(lyagushka);
//   };

//   teremokRoom();
//   console.log(lyagushka);
// };

// teremok();

// -----------------------------------------------------------------------------

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  console.log(button);

  button.addEventListener("click", (evt) => {
    console.log(button.value);
  });
}
