"use stict";

const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 200;
const CLOUD_X = 100;
const CLOUD_Y = 50;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 20;
let barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

// Рисуем облачки
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

// Функция отрисовки статистики
window.renderStatistics = function (ctx, players, times) {
  // Отрисовка тени облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.3)");
  // Отрисовка облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  // Отрисовка имен и гистограм
  ctx.fillStyle = "#000";

  // // Вы
  // let playerIndex = 0;
  // let playerName = "Вы";

  // ctx.fillText(
  //   "Вы",
  //   CLOUD_X + GAP,
  //   CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0
  // );
  // ctx.fillRect(
  //   CLOUD_X + GAP + TEXT_WIDTH,
  //   CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 0,
  //   barWidth,
  //   BAR_HEIGHT
  // );

  // // Иван
  // playerIndex = 1;
  // playerName = "Иван";

  // ctx.fillText(
  //   "Иван",
  //   CLOUD_X + GAP,
  //   CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1
  // );
  // ctx.fillRect(
  //   CLOUD_X + GAP + TEXT_WIDTH,
  //   CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1,
  //   barWidth,
  //   BAR_HEIGHT
  // );

  // // Юлия
  // playerIndex = 2;
  // playerName = "Юлия";

  // ctx.fillText(
  //   "Юлия",
  //   CLOUD_X + GAP,
  //   CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2
  // );
  // ctx.fillRect(
  //   CLOUD_X + GAP + TEXT_WIDTH,
  //   CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 2,
  //   barWidth,
  //   BAR_HEIGHT
  // );

  // // Создаем общий массив
  // let players = ["Вы", "Иван", "Юлия", "Кекс"];

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    // Отрисоовываем имена и гистограммы
    ctx.fillText(
      players[i],
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i
    );
    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,
      (barWidth * times[i]) / maxTime,
      BAR_HEIGHT
    );
  }
};
