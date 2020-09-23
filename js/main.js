$('.header__link').on('click', function(e) {
    e.preventDefault();

    $('.header__link').removeClass('active');
    $(this).addClass('active');

    let href = $(this).attr('href');
    $('.container').removeClass('active').removeClass('in');
    $(href).addClass('active');

    setTimeout(function() {
        $(href).addClass('in');
    }, 300);
});