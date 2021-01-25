"use strict";

// Нажатие на элемент .setup-open удаляет класс hidden у блока .setup
let setup = document.querySelector(".setup");
let setupOpen = document.querySelector(".setup-open");

// Обработчик события нажатия ESC => Функция закрытия попапа
let popupEscHandler = (evt) => {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

// Функция открытия попапа
let openPopup = () => {
  setup.classList.remove("hidden");
  // Добавляем обработчки ESC, если попап открыт
  document.addEventListener("keydown", popupEscHandler);
};

// Функция закрытия попапа
let closePopup = () => {
  setup.classList.add("hidden");
  document.removeEventListener("keydown", popupEscHandler);
};

setupOpen.addEventListener("click", () => {
  openPopup();
});

// Нажатие на элемент .setup-open с помощью ENTER удаляет класс hidden у блока .setup
setupOpen.addEventListener("keydown", (evt) => {
  // keyCode === 13(ENTER)
  if (evt.keyCode === 13) {
    openPopup();
  }
});

// Нажатие на элемент .setup-close, расположенный внутри блока setup возвращяет ему класс hidden
let setupClose = setup.querySelector(".setup-close");

setupClose.addEventListener("click", () => {
  closePopup();
});

// Нажатие на элемент .setup-close с помощью ENTER добавляет класс hidden у блока .setup
setupClose.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    closePopup();
  }
});
