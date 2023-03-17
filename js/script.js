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

// menu hamburger
const tombol = document.querySelector('.checkbox input');
const meMain = document.querySelector('.nav-main .nav-items');
const meSec = document.querySelector('.nav-second .nav-items');

tombol.addEventListener('click', function() {
    meMain.classList.toggle('slide')
    meSec.classList.toggle('slide')
})