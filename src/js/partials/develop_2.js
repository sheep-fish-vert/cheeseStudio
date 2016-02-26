$(document).ready(function(){




    $('.what-we-doing-button-wrap>.button').click(function() {

        $('.what-we-doing-item').removeClass('show');

        var t = $(this);

        setTimeout(function() {

            t.closest('.what-we-doing-item').addClass('show');

        }, 1000);
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