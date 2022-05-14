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



let playBnt = document.getElementById('playBtn');


playBnt.addEventListener("click", function() {
    let player = document.getElementById("Yplayer");
    let img = document.getElementById('video-preview');
    let playerBlock = document.getElementById('player-block');

    playerBlock.style.display = 'block';
    img.style.display = 'none';
    playBnt.style.display = 'none';
    player.setAttribute('src', 'https://www.youtube.com/embed/UALhvLWsdZE?autoplay=1');


})

// $(".slider").slick({
//     // normal options...
//     infinite: false,
//     // the magic
//     responsive: [{
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             infinite: true
//         }
//     }, {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 2,
//             dots: true
//         }
//     }, {
//         breakpoint: 300,
//         settings: "unslick" // destroys slick

//     }]
// });