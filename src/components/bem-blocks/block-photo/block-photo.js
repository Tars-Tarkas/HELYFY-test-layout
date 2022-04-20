window.onload = function() {
    let photo = document.getElementsByClassName('photo-gallery');
    let btn = document.getElementById('photo-gallery-btn');
    for (let i = 8; i < photo.length; i++) {
        photo[i].style.display = "none";
    }

    let count = 8;
    btn.addEventListener("click", function() {
        var photo = document.getElementsByClassName('photo-gallery');
        count += 8;
        if (count <= photo.length) {
            for (let i = 0; i < count; i++) {
                photo[i].style.display = "block";
            }
        }
    })
}

// var ratings = document.getElementsByClassName('rating');

// for (var i = 0; i < ratings.length; i++) {
//     var r = new SimpleStarRating(ratings[i]);

//     ratings[i].addEventListener('rate', function(e) {
//         console.log('Rating: ' + e.detail);
//     });
// }