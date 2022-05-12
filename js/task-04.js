//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;
const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]')

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick)

function onDecrementBtnClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue; 
}

function onIncrementBtnClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
