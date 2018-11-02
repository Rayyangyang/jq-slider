$('.header a').on('click', function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 20 + 'px'
    }, 500)
    return false;
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.btn').fadeIn(500)
        console.log(11);
    } else {
        $('.btn').fadeOut(500);
    }
})
$('.btn').on('click', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500)
})
