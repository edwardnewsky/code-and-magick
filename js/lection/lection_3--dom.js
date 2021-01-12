// ********************* Перемещение и поиск в DOM дереве *********************

// console.log(document.parentElement);
// console.dir(document.children, 1);

// let html = document.children[0];

// for (let i = 0; i <h1 html.children.length; i++) {
//   let child = html.children[i];

//   console.log(child.tagName.toLowerCase());

//   for (let j = 0; j < child.children.length; j++) {
//     let innerChild = child.children[j];
//     console.log("|---" + innerChild.tagName.toLowerCase());
//   }
// }

// ---------------------- Поиск по дереву ----------------------

// let firstDiv = document.children[0].children[1].children[0];

// // Поиск по id
// firstDiv.getElementById('some-id');

// ---------------------- querySelector ----------------------
// Поиск по селектору (рекомендуется)
// // Класс
// console.log(document.querySelector(".header-title"));
// // Айди
// console.log(document.querySelector("#similar-wizard-template"));
// // Поиск по элементам
// console.log(document.querySelector("footer"));
// // Поиск по состоянию элементов
// console.log(document.querySelector("page[name]:checked"));

// ---------------------- querySelectorAll ----------------------
// console.log(document.querySelectorAll("div"));

// ---------------------- Вывод и замена ----------------------
// let pageHeading = document.querySelector("h1");
// // // Изменение атрибутов
// // pageHeading.setAttribute("style", "background: red;");
// // console.log(pageHeading.getAttribute("class"));
// // // Изменение имени класса
// // pageHeading.className = "myclass";
// // console.log(pageHeading.getAttribute("class"));
// // // Добавить класс
// // pageHeading.classList.add("hello");
// // console.log(pageHeading.getAttribute("class"));
// // Получить свойство и использовать только ЕГО
// console.log(pageHeading.title);
// console.log(pageHeading.className);

// ---------------------- ClassList ----------------------
// console.log(pageHeading.classList);
// pageHeading.classList.add("a1");
// pageHeading.classList.remove("a1");

// Разметка и DOM -- Выстрел в ногу
// let htmlInput = document.querySelectorAll("input");
// let htmlInputChecked = document.querySelector("input:checked");

// console.log(htmlInputChecked);

// ********************* Добавление/удаление в DOM дереве *********************

// let pools = document.querySelectorAll(".pool");
// let blocks = document.querySelectorAll(".el");

// console.log(pools[0].querySelectorAll(".el")[0]);

// // Удаление элемента из DOM
// pools[0].removeChild(blocks[0]);
// // Перемещение элемента в DOM
// pools[1].appendChild(blocks[0]);
// pools[1].appendChild(blocks[1]);
// pools[1].appendChild(blocks[0]);
// // Вставить блок посередине
// pools[1].insertBefore(blocks[3], blocks[0]);
// // Более углубленно
// let replaced = pools[0].replaceChild(blocks[2], blocks[4]);
// pools[0].appendChild(replaced);
// // Копирование
// pools[0].appendChild(blocks[0].cloneNode());
// // Глубокое копирование
// pools[0].appendChild(blocks[0].cloneNode(true));

// ********************* Создание в DOM дереве *********************

// ---------------------- innerHTML и textContent ----------------------

// let description = document.querySelector("p");

// // Возвращает разметку тоже (опасно)
// console.log(description.innerHTML);
// // Возвращает только ТЕКСТ (безопастно)
// console.log(description.textContent);

// // Замена -- тест
// let heroName = document.querySelector("b");
// let newName = "Кощщей";
// heroName.innerHTML = newName;
// newName = "Гарри";
// heroName.textContent = newName;

// ---------------------- insertAdjacentHTML ----------------------
// // Вставляем в начало -- afterbegin -- beforebegin
// document.body.insertAdjacentHTML("afterbegin", "<h1>Привет!</h1>");
// // Вставляем в конец -- afterend -- beforeend
// document.body.insertAdjacentHTML("afterend", "<h1>Привет!</h1>");

// ---------------------- createElement ----------------------
// let firstPool = document.querySelector(".pool");

// let fragment = document.createDocumentFragment();

// for (let i = 0; i < 6; i++) {
//   let newElement = document.createElement("div");
//   newElement.className = "el";
//   newElement.innerHTML = "<span>" + i + "</span>";

//   fragment.appendChild(newElement);
// }

// firstPool.appendChild(fragment);

// ---------------------- Template ----------------------
// let pools = document.querySelectorAll(".pool");

// let template = document
//   .querySelector("#element-template")
//   .content.querySelector("div");

// console.log(pools);

// for (let i = 0; i < 6; i++) {
//   // Копируем все в элементе
//   let element = template.cloneNode(true);

//   // Изменяем текст контент на уникальный
//   element.children[0].textContent = i;

//   // Выбираем номер пула
//   pools[1].appendChild(element);
// }

// ********************* Шаблонизация *********************

let pools = document.querySelectorAll(".pool");

let template = document
  .querySelector("#element-template")
  .content.querySelector("div");

for (let i = 0; i < 6; i++) {
  let element = template.cloneNode(true);
  element.children[0].textContent = i;
  pools[0].appendChild(element);
}
