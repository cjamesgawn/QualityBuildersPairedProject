$('document').ready(function(){

    $('.slides').slick({
        infinite: true,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 500,
        fade: true,
       //autoplay: true
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

    $('.testimonial-slide').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        speed: 600,
        fade: true,
        dots: true,
    });

    $(function(){
        $("#header").load("header.html"); 
        $("#footer").load("footer.html"); 
    });


});

function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginRight = "200px";
    document.getElementById("main").style.transition = ".3s";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// $('#main').addEventListener("click", function () {
    
// });



// $(document).click(function(event) { 
//     var $target = $(event.target);
//     if(!$target.closest('#mySidebar').length && 
//     $('#mySidebar').is(":visible")) {
//       $('#mySidebar').hide();
//     }        
// });