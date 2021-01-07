// let washNextItem = function (itemsLeft) {
//   itemsLeft--;
//   console.log("В раковине осталось " + itemsLeft + " предметов");

//   if (itemsLeft > 0) {
//     washNextItem(itemsLeft);
//   }
// };

// washNextItem(10);

// // ************* ЦИКЛЫ В JS *************

// // ------------- WHILE -------------

// while/do...while - цикл с условием
// while (до тех пор пока)

// let washItems = function (itemsLeft) {
//   while (itemsLeft-- > 0) {
//     console.log("В раковина осталось " + itemsLeft + " предметов");
//   }
// };

// washItems(10);

// // ------------- FOR -------------

// // ************* МАССИВЫ *************

// // Создаем массив
// let numbers = [];
// numbers = [1, 2, 3];
// console.log(numbers);

// // Чекаем Math.random
// console.log(Math.random());

// // Рандомное число из массива
// console.log(numbers[Math.floor(Math.random() * numbers.length)]);

// names = ["Саурон", "Кащей", "Пендальф", "Радагаст"];
// people = ["Геннадий", "Вячеслав"];

// let printNames = function (names) {
//   // Вариант 1
//   // let index = 0;
//   // console.log("Элемент " + index + ": " + names[index]);
//   // index = index + 1;
//   // console.log("Элемент " + index + ": " + names[index]);
//   // index = ++index;
//   // console.log("Элемент " + index + ": " + names[index]);
//   // index++;
//   // console.log("Элемент " + index + ": " + names[index]);

//   // Вариант 2
//   // let index = 0; // Начальное значение
//   // while (index < names.length) {
//   //   // Условие останова
//   //   console.log("Элемент " + index + ": " + names[index]);
//   //   index = index + 1; // Закон изменения
//   // }

//   // Вариант 3
//   for (let i = 0; i < names.length; i++) {
//     console.log("Элемент " + i + ": " + names[i]);
//   }
// };

// printNames(people);
// console.log("---------");
// printNames(names);

// ************* ОБЪЕКТЫ *************

// let cat = {
//   name: "Федор",
//   age: 4,
// };

// console.log(cat.name, cat["age"]);

// let wizard = {
//   // Все значение которые записаны внутрь объекта называются - СВОЙСТВАМИ
//   name: "Пендальф",
//   level: 2,

//   // Все функции которые записаны внутрь объекта называются - МЕТОДАМИ
//   say: function () {
//     console.log(
//       wizard.name + " говорит: Ты не пройдешь! Мой уровень: " + wizard.level
//     );
//   },

//   levelUp: function (level) {
//     wizard.level += level;
//   },
// };

// console.log(wizard);

// console.log(wizard.say);
