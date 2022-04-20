let changetext = document.getElementsByClassName('moretext-btn');
for (var i = 0; i < changetext.length; i++) {
    changetext[i].addEventListener('click', changeClassOne, false);
    changetext[i].addEventListener('click', changeClassTwo, false);
}

function changeClassOne() {
    let moreTextOne = document.getElementById('about-text-1');
    moreTextOne.style.cssText = '-webkit-line-clamp: 100';
}

function changeClassTwo() {
    let moreTextTwo = document.getElementById('about-text-2');
    moreTextTwo.style.cssText = '-webkit-line-clamp: 100';
}