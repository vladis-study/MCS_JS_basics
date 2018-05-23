const BODY = document.body;
BODY.style.backgroundColor = prompt("Какой будет фон у страницы?");

const page = document.querySelector('.page');
page.style['color'] = prompt("Какой будет цвет текста на странице?");

const nameSpace = document.querySelector('span.name');
nameSpace.innerHTML = prompt("Как зовут человека, который вас вдохновляет");

const image = document.querySelector('img');
image.setAttribute('src', prompt("Введите адрес картинки"));

const bio = document.querySelector('.shortBio');
bio.innerHTML = prompt("Введите текст страницы");

bio.className += ' animated';