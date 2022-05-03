new AirDatepicker('.datepicker', {
    dateFormat: 'EEEE MMMM',
    inline: false,
    // isMobile: true,
    autoClose: true,
    dateFormat(date) {
        return date.toLocaleString('ru', {
            day: '2-digit',
            month: 'long',
            weekday: 'long'
        });
    },
    position: 'bottom right',
})