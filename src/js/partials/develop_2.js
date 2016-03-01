$(document).ready(function(){

    $( "body" ).click(function( event ) {
        var target = $( event.target );
        var container = $(".what-we-doing-item-active");

        if( target.is('.what-we-doing-button-wrap>.button') ){
            $('.what-we-doing-item').removeClass('show');
            $(this).parents('.what-we-doing-item').addClass('show');
        }

    });

/*
    $('.what-we-doing-button-wrap>.button').click(function() {
        $('.what-we-doing-item').removeClass('show');
        $(this).parents('.what-we-doing-item').addClass('show');
    });
*/

});

$(window).load(function(){

    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.scroll-anim');

});

$(window).resize(function(){

});