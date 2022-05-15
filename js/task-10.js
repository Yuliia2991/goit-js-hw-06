//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
//Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
//Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = Number(refs.input.value);
  const divsArray = [];
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement('div');
    const sizes = `${30 + 10 * i}px`;
    div.style.height = sizes;
    div.style.width = sizes;
    div.style.backgroundColor = getRandomHexColor();
    divsArray.push(div);
  }
  refs.boxes.append(...divsArray)
}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const deleteBoxes = document.querySelectorAll('#boxes > div');
  deleteBoxes.forEach(box => box.remove());
}

