$(function(){

    $('.burger').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.navigation').toggleClass('menu-opened');
     })

     $('.services-burger').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.services-navigation').toggleClass('menu-opened');
     })

    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    $(".details").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 100);
    });

    $('.call__link, .services-call__link, .footer-call__link').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    $('.background-feedback__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
      });


});