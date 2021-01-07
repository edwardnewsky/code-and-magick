// DOM-элемент канваса
let canvas = document.getElementById("canvas");

// Контекст отрисовки
let ctx = canvas.getContext("2d");

// // Прямоугольник
// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, 300, 150);

// Текст
ctx.font = "30px Tahoma";
ctx.textBaseline = "hanging";
ctx.fillText("Привет из текста", 0, 10);
ctx.fillText("в канвасе!", 0, 48);
