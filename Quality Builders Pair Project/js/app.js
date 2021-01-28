$('document').ready(function(){

    $('.slides').slick({
        infinite: true,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 500,
        fade: true
        
    });

    $('.partner-slides').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        speed: 600,
        slidesToShow:4,
        slidesToScroll:1,
        
        
    });

});