$('.input-data').mask('99.99.9999');

new AirDatepicker('.input-data', {
    dateFormat: 'EEEE MMMM',
    inline: false,
    // isMobile: true,
    autoClose: true,
    dateFormat(date) {
        return date.toLocaleString('ru', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    },
    position: 'bottom right',
})