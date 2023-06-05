var cards = document.querySelectorAll('.card');
var amount = document.getElementById('amount');

var cardValues = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8'];
var totalCount = 0; // Переменная для хранения суммы всех значений

cardValues.forEach(function(cardValue, index) {
  var card = cards[index];
  var count = localStorage.getItem(cardValue) || 0; // Получение текущего значения из LocalStorage или установка 0, если значение отсутствует
  totalCount += parseInt(count); // Прибавление текущего значения к общей сумме
  localStorage.setItem(cardValue, count);

card.addEventListener('click', function() {
    count++;
    totalCount++; // Увеличение общей суммы
    localStorage.setItem(cardValue, count);
    amount.innerHTML = "🛒" + totalCount; // Обновление отображения общей суммы
  });
});

amount.innerHTML = "🛒" + totalCount; // Инициализация отображения общей суммы при загрузке страницы

function Clear() {
  totalCount = 0; // Reset totalCount to 0

  // Reset count values in localStorage
  cardValues.forEach(function(cardValue) {
    localStorage.setItem(cardValue, 0);
  });

  // Reset count values for each card
  cardValues.forEach(function(cardValue, index) {
    var card = cards[index];
    var count = 0;
    localStorage.setItem(cardValue, count);
  });

  amount.innerHTML = "🛒" + totalCount; // Update the display of totalCount

  // Reload the page
  location.reload();
}
