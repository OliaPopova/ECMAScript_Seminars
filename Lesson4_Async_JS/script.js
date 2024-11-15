"use strict";

// Задание 1. Получение данных о пользователе.
async function getUserData(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Пользователь с id = ${id} не найден!`);
      }
    })
    .then((response) => response.data);
}

getUserData(2)
  .then((response) => console.log(response)) // выводит данные пользователя
  .catch((error) => console.log(error.message)); // отлавливает ошибку

// Задание 2. Отправка данных на сервер.
async function saveUserData(obj) {
  return fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  }).then((response) => {
    if (response.ok) {
      console.log("User data saved successfully");
      return response.json();
    } else {
      throw new Error("Ошибка! Данные не отправлены!");
    }
  });
}

const user = {
  name: "Ольга Попова",
  job: "Backend Developer",
};

saveUserData(user)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Задание 3. Изменение стиля элемента через заданное время (DOM).
function createHtmlElements() {
  const pageStructure = `
  <div id="general">
    <ul id="1">
      <li id="1.1">Элемент 1.1</li>
      <li id="1.2">Элемент 1.2</li>
      <li id="1.3">Элемент 1.3</li>
      <li id="1.4">Элемент 1.4</li>
      <li id="1.5">Элемент 1.5</li>
    </ul>
    <ul id="2">
      <li id="my-element">Элемент 2.1</li>
      <li id="2.2">Элемент 2.2</li>
      <li id="2.3">Элемент 2.3</li>
      <li id="2.4">Элемент 2.4</li>
      <li id="2.5">Элемент 2.5</li>
    </ul>
    <ul id="3">
      <li id="3.1">Элемент 3.1</li>
      <li id="3.2">Элемент 3.2</li>
      <li id="3.3">Элемент 3.3</li>
      <li id="3.4">Элемент 3.4</li>
      <li id="3.5">Элемент 3.5</li>
    </ul>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", pageStructure);
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center";
  document.body.style.backgroundColor = "rgb(240, 240, 255)";
  document.body.style.fontFamily = "'Arial', sans-serif";

  const div = document.querySelector("div");
  div.style.border = "5px solid rgb(70, 130, 180)";
  div.style.padding = "20px";
  div.style.backgroundColor = "rgb(255, 255, 250)";
  div.style.borderRadius = "10px";

  const ul = document.querySelectorAll("ul");
  ul.forEach((ul) => {
    ul.style.border = "2px solid rgb(123, 104, 238)";
    ul.style.borderRadius = "8px";
    ul.style.marginBottom = "10px";
    ul.style.padding = "10px";
    ul.style.backgroundColor = "rgb(240, 248, 255)";
  });

  const li = document.querySelectorAll("li");
  li.forEach((li) => {
    li.style.fontSize = "18px";
    li.style.margin = "5px";
    li.style.padding = "5px";
    li.style.transition = "color 0.5s ease";
  });
}

// наполняем страницу элементами
createHtmlElements();

function changeStyleDelayed(id, delay, color) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.style.color = color;
    } else {
      console.error(`Элемент с id="${id}" не найден`);
    }
  }, delay);
}

changeStyleDelayed("1.1", 1000, "rgb(135, 206, 250)"); 
changeStyleDelayed("2.2", 2000, "rgb(152, 251, 152)"); 
changeStyleDelayed("3.3", 3000, "rgb(255, 182, 193)"); 
