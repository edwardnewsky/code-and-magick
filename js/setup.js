"use strict";

// 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
let setupWindow = document.querySelector(".setup");
setupWindow.classList.remove("hidden");

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
