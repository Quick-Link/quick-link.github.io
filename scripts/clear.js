var cartLink = document.getElementById('clear');
var amount = document.getElementById('count');

cartLink.addEventListener('click', function(event) {
    event.preventDefault();
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          localStorage.setItem(key, '0');
          localStorage.setItem('update', '0');
          Clear();
        }
    }      
});
