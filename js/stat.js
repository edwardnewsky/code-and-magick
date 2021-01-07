"use stict";
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 150;
var BAR_HEIGHT = 40;
var GAP_BAR = 50;
var FONT = "16px PT Mono";
var FONT_BASELINE = "hanging";

// Функция отрисовки облаков
let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Находим самый большой элемент массива
let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// ------------------

// определите функцию renderStatistics
// которая будет являться методом объекта window c параметрами:
// • ctx — канвас на котором рисуется игра.
// • names — массив, с именами игроков прошедших уровень. Имя самого игрока — Вы. Массив имён формируется случайным образом.
// • times — массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.
window.renderStatistics = function (ctx, names, times) {
  // Рисуем тень облака
  // 2. Под облаком должна располагаться тень: многоугольник такой же формы, залитый цветом rgba(0, 0, 0, 0.7) (полупрозрачный чёрный), смещённый относительно белого на 10px вниз и вправо.
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.3)");

  // Рисуем облако
  // 1. Белое облако с координатами [100, 10] высотой 270px и шириной 420px. Облако может быть, как правильным многоугольником, нарисованным методом fillRect, так и неправильным нарисованным с помощью методов beginPath, moveTo, closePath, fill и других
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  // Сводка что вы победили
  // 3. На облаке должен быть отрисован текст сообщения ’Ура вы победили!\nСписок результатов:’с помощью метода fillText. Текст должен быть набран шрифтом PT Mono размером 16px. NB! Особенностью отрисовки текста на канвасе является то, что он не поддерживает перенос, поэтому каждая новая строчка должна быть отрисована новым вызовом метода fillText или strokeText.
  ctx.fillStyle = "black";
  ctx.font = FONT;
  ctx.textBaseline = FONT_BASELINE;
  ctx.fillText("Ура вы победили!", 115, 25);
  ctx.fillText("Список результатов:", 115, 45);

  // Отрисовка имен и гистограммы
  // 4. После сообщения о победе должна располагаться гистограмма времён участников. Параметры гистограммы следующие:
  // o Высота гистограммы 150px.
  // o Ширина колонки 40px.
  // o Расстояние между колонками 50px.
  // o Цвет колонки игрока Вы rgba(255, 0, 0, 1).
  // o Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.

  // Цикл на отрисовку имен победилей
  for (let i = 0; i < names.length; i++) {
    // Имена
    ctx.fillStyle = "black";
    ctx.fillText(
      names[i],
      CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i,
      CLOUD_HEIGHT - 2 * GAP
    );
  }

  // Подсчет максимального времени
  let maxTime = getMaxElement(times);

  // Функция для окрашивания столбиков других участников
  let getMaxNumber = function (min, max) {
    let saturation = Math.floor(Math.random() * (max - min) + min);
    ctx.fillStyle = "rgba(0, 0, " + saturation + ", 1)";
  };

  // Цикл на отрисовку столбиков статистики
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else if (names[i] !== "Вы") {
      getMaxNumber(50, 250);
    }

    ctx.fillRect(
      CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i,
      CLOUD_HEIGHT - 3 * GAP,
      BAR_HEIGHT,
      (-BAR_WIDTH * times[i]) / maxTime
    );
  }

  // Цикл на отрисовку времени у столбиков статистики
  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = "black";
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i,
      BAR_WIDTH + GAP_BAR + 2 * GAP - (BAR_WIDTH * times[i]) / maxTime
    );
  }
};
