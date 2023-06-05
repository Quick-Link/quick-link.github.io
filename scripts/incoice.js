var cards = parseInt(localStorage.getItem('card1')) + parseInt(localStorage.getItem('card2')) + parseInt(localStorage.getItem('card3')) + parseInt(localStorage.getItem('card4')) + parseInt(localStorage.getItem('card5')) + parseInt(localStorage.getItem('card6')) + parseInt(localStorage.getItem('card7')) + parseInt(localStorage.getItem('card8'));

// Получаем доступ к элементу по его идентификатору
var spanElement = document.getElementById("count");

// Изменяем содержимое элемента
spanElement.innerHTML = cards + "×";

// Получаем доступ к элементу по id
var spanElement1 = document.getElementById("sum");

// Изменяем значение атрибута data-count
spanElement1.setAttribute('data-count', cards);
