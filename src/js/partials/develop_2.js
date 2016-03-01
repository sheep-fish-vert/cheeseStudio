
// show-hide what-we-doing blocks

    function showHideWhatWeDoingBlocks(){

        $(document).on('click', function(e){

            if($(e.target).is('.what-we-doing-button') || $(e.target).parents('.what-we-doing-button').length){

                $('.what-we-doing-item').removeClass('show');
                $(e.target).parents('.what-we-doing-item').addClass('show');
            }
            else if(!$(e.target).is('.what-we-doing-item-active') && !$(e.target).parents('.what-we-doing-item-active').length){
                $('.what-we-doing-item').removeClass('show');
            }

        });

    };

// /show-hide what-we-doing blocks


$(document).ready(function(){

    showHideWhatWeDoingBlocks();

});

$(window).load(function(){

    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.scroll-anim');

});

$(window).resize(function(){

});