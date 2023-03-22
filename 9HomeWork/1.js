"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/
const inputEl = document.querySelector("#from");
const spanEl = document.querySelector("span");
// Хотел найти span через родителя input но запутался. вдруг если span-ов
//  будет много
inputEl.addEventListener("input", () => {
  spanEl.textContent = inputEl.value;
});
/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
const btnMesEl = document.querySelector(".messageBtn");
const mesEl = document.querySelector(".message");
btnMesEl.addEventListener("click", () => {
  mesEl.classList.add("animate__animated", "animate__fadeInLeftBig");
  mesEl.style.visibility = "visible";
});
/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const formEls = document.querySelector("form");
// const btnPushEl = document.querySelector("button:not([class])");
const fromEl = document.querySelectorAll(".form-control");

formEls.addEventListener("submit", (event) => {
  for (var i = 0; i < fromEl.length; i++) {
    if (!fromEl[i].value) {
      fromEl[i].classList.add("error");
      event.preventDefault();
    } else {
      fromEl[i].classList.remove("error");
    }
  }
});
// Ну насколько понял сделал. Еще показалось что надо при непосредственном вводе
// убрать подсветку сразу.но сомнение что надо было. хотя можно.
