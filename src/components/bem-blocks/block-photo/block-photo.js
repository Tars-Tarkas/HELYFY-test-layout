window.onload = function() {
    let photo = document.getElementsByClassName('photo-gallery');
    let btn = document.getElementById('photo-gallery-btn');
    for (let i = 8; i < photo.length; i++) {
        photo[i].style.display = "none";
    }

    let count = 8;
    btn.addEventListener("click", function() {
        count += 8;
        let i = 0;
        if (count <= photo.length) {
            for (i = 0; i < count; i++) {
                photo[i].style.display = "block";
            }
        }
    })
}