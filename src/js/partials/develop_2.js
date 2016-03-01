$(document).ready(function(){

    $('.what-we-doing-button-wrap>.button').click(function() {
        $('.what-we-doing-item').removeClass('show');
        $(this).parents('.what-we-doing-item').addClass('show');
    });

});

$(window).load(function(){

    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.scroll-anim');

});

$(window).resize(function(){

});