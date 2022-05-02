document.getElementById('modal-checkbox').addEventListener('change', function(e) {
    document.getElementById('modalBtn').disabled = !e.target.checked
})

let btnBooking = document.getElementById('btnBooking');
let closeModal = document.getElementById('closeBtn');
let overlay = document.querySelector('#modalOverlay');

btnBooking.addEventListener('click', function() {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('.modal-overlay').classList.add('active');
})

closeModal.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
    document.querySelector('.modal-overlay.active').classList.remove('active');
})

document.body.addEventListener('keyup', function(e) {
    let key = e.keyCode;

    if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.modal-overlay.active').classList.remove('active');
    };
}, false);

overlay.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
});