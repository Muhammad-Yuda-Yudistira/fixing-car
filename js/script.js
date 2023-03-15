// smooth scrolling
$('.scroller').on('click', function(e) {
    const tujuan = $(this).attr('href');
    const tujuanElement = $(tujuan)
    // console.log(tujuanElement);

    $('html').animate({
        scrollTop: tujuanElement.offset().top
    }, 1500, "linear")

    e.preventDefault();
})