"use strict";

// 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
let setupWindow = document.querySelector(".setup");
// setupWindow.classList.remove("hidden");

// 2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей.

// Функция рандома для массива
let getRandom = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

// Массивы с данными из ТЗ
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
let WIZARD_FIREBALL = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

// Функция создания объектов в массиве из 4х массивов с данными
let createWizards = function () {
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
// let setupWindow = document.querySelector(".setup");
// Div на открытие
let setupOpen = document.querySelector(".setup-open");
// Span на закрытие (внутри setup)
let setupClose = setupWindow.querySelector(".setup-close");

// Обработчик события нажатия ESC => Функция закрытия попапа
let popupEscHandler = (evt) => {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

// Функция открытия попапа
let openPopup = () => {
  setupWindow.classList.remove("hidden");
  // Добавляем обработчик ESC
  document.addEventListener("keydown", popupEscHandler);
};

// Функция закрытия попапа
let closePopup = () => {
  setupWindow.classList.add("hidden");
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

// 1.2. Если фокус находится на форме ввода имена то попап на ESC закрываться не должен

// Input ввода иимени
let inputUserName = document.querySelector(".setup-user-name");

// 1.3. Форма должна отправляться на урл https://js.dump.academy/code-and-magick методом POST с типом multipart/form-data
let form = setupWindow.querySelector(".setup-wizard-form");
form.action = "https://js.dump.academy/code-and-magick";
form.name = "wiard";

// 2. Валидация ввода имени персонажа. Имя персонажа вводится в поле .setup-user-name. Добавьте следующие ограничения: o имя персонажа не может содержать менее 2 символов; o максимальная длина имени персонажа — 25 символов. Для указания ограничений на ввод используйте стандартные возможности форм HTML5.

let validateInputUserName = () => {
  inputUserName.addEventListener("invalid", () => {
    if (inputUserName.validity.tooShort) {
      inputUserName.setCustomValidity("Ваше имя слишком короткое");
    } else if (inputUserName.validity.valueMissing) {
      inputUserName.setCustomValidity("Введите имя персонажа");
    } else {
      inputUserName.setCustomValidity("");
    }
  });

  inputUserName.addEventListener("focus", (evt) => {
    // Удаляем обработчик ESC
    document.removeEventListener("keydown", popupEscHandler);
  });

  inputUserName.addEventListener("blur", (evt) => {
    // Добавляем обработчик ESC
    document.addEventListener("keydown", popupEscHandler);
  });
};

validateInputUserName();

// 3. Изменение цвета мантии персонажа по нажатию. Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на неё. Цвет мантии задаётся через изменение инлайнового CSS-свойства fill для элемента. Цвет должен сменяться произвольным образом на один из следующих цветов:
// o rgb(101, 137, 164)
// o rgb(241, 43, 107)
// o rgb(146, 100, 161)
// o rgb(56, 159, 117)
// o rgb(215, 210, 55)
// o rgb(0, 0, 0)
// 4. Изменение цвета глаз персонажа по нажатию. Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes. Возможные варианты цвета глаз персонажа:
// o black
// o red
// o blue
// o yellow
// o green
// 5. Изменение цвета фаерболов по нажатию. Цвет задаётся через изменение фона у блока .setup-fireball-wrap. Возможные варианты цвета:
// o #ee4830
// o #30a8ee
// o #5ce6c0
// o #e848d5
// o #e6e848

let wizardCoat = setupWindow.querySelector(".wizard-coat");
let wizardEyes = setupWindow.querySelector(".wizard-eyes");
let wizardFireball = setupWindow.querySelector(".setup-fireball-wrap");

let setRandomColor = (coatColorArr, eyesColorArr, fireballColorArr) => {
  // Добавляем обработчки изменения цветов персонажа по нажатию ('click')
  wizardCoat.addEventListener("click", (evt) => {
    wizardCoat.style.fill = coatColorArr[getRandom(coatColorArr)];
  });
  wizardEyes.addEventListener("click", (evt) => {
    wizardEyes.style.fill = eyesColorArr[getRandom(eyesColorArr)];
  });
  wizardFireball.addEventListener("click", (evt) => {
    wizardFireball.style.backgroundColor =
      fireballColorArr[getRandom(fireballColorArr)];
  });
};

setRandomColor(WIZARD_COATS, WIZARD_EYES, WIZARD_FIREBALL);

// Задаем курсору poiner при наведении на элементы взаимодействия
let setPointer = () => {
  wizardCoat.style.cursor = "pointer";
  wizardEyes.style.cursor = "pointer";
  wizardFireball.style.cursor = "pointer";
  inputUserName.style.cursor = "pointer";
};

setPointer();
