//  hamburger menu

$('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('.nav-links').toggleClass('open')
  });


$('.nav-links li').on('click', () => {
    $('.nav-links').removeClass('open')
    $('.hamburger').toggleClass('open')
})

$(window).on('scroll', () => {
    if ($(window).scrollTop()>20) {
        $('nav').addClass('sticky')
        $('.logo-dark').show()
        $('.logo-light').hide()
        $('.back-top').addClass('active')
    } else {
        $('nav').removeClass('sticky')
        $('.logo-dark').hide()
        $('.logo-light').show()
        $('.back-top').removeClass('active')
    }
})


// modals (pop-ups)

const modal = $('.modal')
const overlay = $('.overlay')
const btnCloseModal = $('.close-modal')
const btnsOpenModal = $('.img-wrap')

const circle = $('.circle') 

btnsOpenModal.on('click', function() {
    overlay.removeClass('hidden')
    const modal_type = $(this).data('course')
    $('#' + modal_type).removeClass('hidden')
    circle.css('display', 'none')
})

function closeModal() {
    modal.addClass('hidden')
    overlay.addClass('hidden')
    circle.css('display', 'block')
}

btnCloseModal.on('click', closeModal)
overlay.on('click', closeModal)

$(document).on('keydown', (e) => {
    if(e.key === 'Escape' && modal.hasClass('hidden')){
        closeModal()
    }
})


// testimonials 

$(document).ready( () => {
    $("#carousel").owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: false
    })
})


