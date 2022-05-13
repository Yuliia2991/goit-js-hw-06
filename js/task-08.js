//Напиши скрипт управления формой логина.
//Обработка отправки формы form.login-form должна быть по событию submit.
//При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
//Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
const refs = {
    form: document.querySelector('.login-form'),
    inputs: document.querySelectorAll('input'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
        
    refs.inputs.forEach(input => {
    if (input.value === '') {
        alert('All inputs should be filled')
    }
})
    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        mail,
        password
    }   
    console.log(formData);
    event.currentTarget.reset();
}
