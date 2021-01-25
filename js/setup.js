"use strict";

// 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
let setupWindow = document.querySelector(".setup");
// setupWindow.classList.remove("hidden");

// 2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей.

// Функция рандома для массива
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Функция создания объектов в массиве из 4х массивов с данными
let createWizards = function () {
  let WIZARD_NAMES = [
    "Иван",
    "Хуан",
    "Себастьян",
    "Мария",
    "Кристоф",
    "Виктор",
    "Юлия",
    "Люпита",
    "Вашингтон",
  ];
  let WIZARD_SUBNAMES = [
    "да Марья",
    "Верон",
    "Мирабелла",
    "Вальц",
    "Онопко",
    "Топольницкая",
    "Нионго",
    "Ирвинг",
  ];
  let WIZARD_COATS = [
    "rgb(101, 137, 164)",
    "rgb(241, 43, 107)",
    "rgb(146, 100, 161)",
    "rgb(56, 159, 117)",
    "rgb(215, 210, 55)",
    "rgb(0, 0, 0)",
  ];
  let WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];
  let wizards = [];

  for (let i = 0; i < 4; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[getRandom(WIZARD_NAMES)],
      subname: WIZARD_SUBNAMES[getRandom(WIZARD_SUBNAMES)],
      coatColor: WIZARD_COATS[getRandom(WIZARD_COATS)],
      eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)],
    };
  }

  return wizards;
};

let wizards = createWizards();

// 3. На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
// o Имя персонажа name запишите как текст в блок .setup-similar-label;
// o Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
// o Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.

// Выбираем template элемент для генерации 1го волшебника
let similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");
// Выбираем куда будем вставлять
let similarListElement = document.querySelector(".setup-similar-list");

let renderWizards = function (arr) {
  let cloneWizard = similarWizardTemplate.cloneNode(true);
  // Изменяем имя
  cloneWizard.querySelector(".setup-similar-label").textContent =
    arr.name + " " + arr.subname;
  // Изменяем цвет мантии
  cloneWizard.querySelector(".wizard-coat").style.fill = arr.coatColor;
  // Изменяем цвет глаз
  cloneWizard.querySelector(".wizard-eyes").style.fill = arr.eyesColor;

  return cloneWizard;
};

// 4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.
let fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  // Создаем для каждого цикла своего волшебника в теге template и копируем его
  fragment.appendChild(renderWizards(wizards[i]));
  // Вставляем в конец скопированных уникальных волшебников
  similarListElement.appendChild(fragment);
  // 5. Покажите блок .setup-similar, удалив у него CSS-класс hidden.
  let setupSimilar = document.querySelector(".setup-similar");
  setupSimilar.classList.remove("hidden");
}

// -----------------------------------------------------------------------------

// 1. Окно.setup должно открываться по нажатию на блок.setup-open. Открытие окна производится удалением класса hidden у блока o Окно.setup должно закрываться по нажатию на элемент.setup-close, расположенный внутри окна

// Сам попап
let setup = document.querySelector(".setup");
// Div на открытие
let setupOpen = document.querySelector(".setup-open");
// Span на закрытие (внутри setup)
let setupClose = setup.querySelector(".setup-close");

// Обработчик события нажатия ESC => Функция закрытия попапа
let popupEscHandler = (evt) => {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

// Функция открытия попапа
let openPopup = () => {
  setup.classList.remove("hidden");
  // Добавляем обработчик ESC
  document.addEventListener("keudpwn", popupEscHandler);
};

// Функция закрытия попапа
let closePopup = () => {
  setup.classList.add("hidden");
  // Удаляем обработчик ESC
  document.removeEventListener("keydown", popupEscHandler);
};

// Попап открывается по клику на setupOpen
setupOpen.addEventListener("click", () => {
  openPopup();
});

// Попап открывается на нажатие ENTER на setupOpen
setupOpen.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

// Попап закрывается по клику на setupClose
setupClose.addEventListener("click", () => {
  closePopup();
});

// Попап закрывается по нажатия ENTER на setupClose
setupClose.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

// Если фокус находится на форме ввода имена то попап на ESC закрываться не должен
