window.onload = function() {
    let photo = document.getElementsByClassName('photo-gallery photo-hidden');
    let moreBtn = document.getElementById('photo-gallery-btn');
    for (let i = 8; i < photo.length; i++) {
        photo[i].style.display = "none";
    }

    let count = 8;
    moreBtn.addEventListener("click", function() {
        if (count < photo.length) {
            count = photo.length;
            for (let y = 0; y < count; y++) {
                photo[y].style.display = "block";
            }
        }
    })
}