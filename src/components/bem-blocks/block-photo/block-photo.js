var ratings = document.getElementsByClassName('rating');

for (var i = 0; i < ratings.length; i++) {
    var r = new SimpleStarRating(ratings[i]);

    ratings[i].addEventListener('rate', function(e) {
        console.log('Rating: ' + e.detail);
    });
}