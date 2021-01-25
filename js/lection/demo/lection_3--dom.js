// Файл setup.js

// При открытии страницы с игрой показать диалог настройки персонажа
// Показать блок с походими персонадами
// Вывести 4 случайных персонажа на основе шаблона, у которых отличаются: имена, цвета мантий магов

"use strict";

// Открываем меню настроек
let userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");


// Выбираем template элемент для генерации 1го волшебника
let similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

// Создаем mock
// Имена волшебников
let WIZARD_NAMES = ["Privet", "Poka", "Start", "Finish"];
// Цвета мантий волшебников
let COAT_COLORS = ["blue", "black", "white", "yellow"];
// Делаем массив из объектов с именами и цветами сошласно массивам
let wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: COAT_COLORS[0],
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: COAT_COLORS[1],
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: COAT_COLORS[2],
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: COAT_COLORS[3],
  },
];
// Делаем функцию отрисовки волшебников с аргументом
let renderWizards = function (wizard) {
  // Делаем копирование (полностью)
  let wizardElement = similarWizardTemplate.cloneNode(true);
  // Изменяем имя
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  // Изменяем цвета
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  // Возврашяем созданного волшебника
  return wizardElement;
};
// ?????????????????????
let fragment = document.createDocumentFragment();
// Запускаем цикл отрисовки с помощью функции
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizards(wizards[i]));

  // let wizardElement = similarWizardTemplate.cloneNode(true);
  // wizardElement.querySelector(".setup-similar-label").textContent =
  //   wizards[i].name;
  // wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColot;

  // Вставляем каждого нового волшебника следующим
  similarListElement.appendChild(fragment);

  // Открываем похожих персонажей
  let setupSimilar = document.querySelector(".setup-similar");
  setupSimilar.classList.remove("hidden");
}
