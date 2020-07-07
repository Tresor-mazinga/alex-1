

//Typed Js Animation for Site-banner Area H5
var typed = new Typed('#typed', {
    strings: [
        'Web Developper',
        'Freelancer'
    ],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
//Typed Js Animation for About-Me section 
var typed = new Typed('#typed_2', {
    strings: [
        'Web Developper',
        'Freelancer'
    ],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});//============================//

//------------Isotope Js  library ----------------//

$(document).ready(function(){
    // we create a variable and select our buttons
    let $btns = $('.project-area .button-group button');
    // we are creating a click event on all our buttons
$btns.click(function(e){
    // we going to remove our active class on our button
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
        filter: selector
    });
    return false;
})
});//=========== End of Isotope Filter========================//

//Bootstrap Project-Card  Js Animation ---------//
$(document).ready(function () {

    $('.col-lg-3').hover(
        function () {
            $(this).animate({
                marginTop: "-=2%",
            }, 200);
        },
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }
    );
});//=========== End==================/


//------ Owl-CAROUSEL------------------//
$('.testmony-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        544:{
            items:2
        }
    }

})