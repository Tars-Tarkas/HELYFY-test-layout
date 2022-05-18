let countReviews = document.querySelectorAll('.reviews-block-contetns');
let countBtn = document.getElementById('showmoreTotal');
let count = countReviews.length;

countBtn.innerHTML = 'Показать Все ' + '(' + count + ')';