(() => {
  "use strict";

  // 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
  let setupWindow = document.querySelector(".setup");
  // setupWindow.classList.remove("hidden");

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
  inputUserName.style.cursor = "pointer";

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

  // -----------------------------------------------------------------------------

  let dialogHandler = setupWindow.querySelector(".upload");

  dialogHandler.addEventListener("mousedown", (evt) => {
    evt.preventDefault();

    // Запоминаю начальные координаты
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false; // Флаг для отслеживания клика / перемещения

    let onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      // Задаю новые значение на начальные координаты
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupWindow.style.top = setupWindow.offsetTop - shift.y + "px";
      setupWindow.style.left = setupWindow.offsetLeft - shift.x + "px";
    };

    let onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (dragged === true) {
        let onClickPreventDefault = (evt) => {
          evt.preventDefault();
          dialogHandler.removeEventListener("click", onClickPreventDefault);
        };

        dialogHandler.addEventListener("click", onClickPreventDefault);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
})();
