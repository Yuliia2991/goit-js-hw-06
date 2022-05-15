//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
//Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  body: document.body,
  color: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
}

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {  
  refs.color.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.color.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
