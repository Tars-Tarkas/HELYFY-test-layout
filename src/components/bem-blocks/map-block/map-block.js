ymaps.ready(function() {
    var myMap = new ymaps.Map("y-map", {
        center: [55.758777, 37.617698],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([55.758777, 37.617698], {
        balloonContentHeader: 'Встречаемся тут'
    }, {
        preset: 'islands#redDotIcon',


    });

    myMap.geoObjects.add(myPlacemark);

    myMap.geoObjects.events.add('click', function(e) {
        let card = document.querySelector('.map-block-card');
        if (!e.target) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }


    });
});