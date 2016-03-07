
function sendwichFunc(){

    var point = null; //current menu item var
    var timer = null; //for setInterval


    $(document).on('click', function(e){

        if($(window).width() <= 666){

            var container = $('.header-nav a');

            if($(e.target).is('.header-sendwich') || $(e.target).parents('.header-sendwich').length){

                if(!$('.header-sendwich').is('.paused')){
                    $('.header-sendwich').addClass('paused');

                    if(!$('.header-sendwich').is('.active')){

                        $('.header-sendwich').addClass('active'); //add class for bloching event on sendwich by click

                        point = 0;

                        $('.header-nav').slideDown(300, function(){

                            timer = setInterval(function(){

                                $('.header-nav li').eq(point).addClass('show');
                                point++;
                                if(point >= $('.header-nav li').length){
                                    clearInterval(timer);
                                    $('.header-sendwich.paused').removeClass('paused');
                                }

                            }, 100);
                        });

                    }
                    else{

                        $('.header-sendwich').removeClass('active');
                        point = $('.header-nav li').length - 1;

                        timer = setInterval(function(){

                            $('.header-nav li').eq(point).removeClass('show');
                            point--;
                            if(point < 0){
                                clearInterval(timer);
                                $('.header-nav').slideUp(300, function(){
                                    $('.header-sendwich.paused').removeClass('paused');
                                });
                            }

                        }, 100);

                    }
                }

            }
            else if(!$(e.target).is('.header-nav') && !$(e.target).parents('.header-nav').length){
                if(!$('.header-sendwich').is('.paused')){

                    $('.header-sendwich').addClass('paused').removeClass('active');
                    point = $('.header-nav li').length - 1;

                    timer = setInterval(function(){

                        $('.header-nav li').eq(point).removeClass('show');
                        point--;
                        if(point < 0){
                            clearInterval(timer);
                            $('.header-nav').slideUp(300, function(){
                                $('.header-sendwich.paused').removeClass('paused');
                            });
                        }

                    }, 100);

                }

            }
        }

    });

    $('.header-nav a').click(function(e){

        e.preventDefault();
        if(!$('.header-sendwich').is('.paused')){
            var href = $(this).attr('href');
            var target = $(href).offset().top-99;
            $(scroller).animate({scrollTop:target},500);

            $('.header-sendwich').addClass('paused').removeClass('active');
            point = $('.header-nav li').length - 1;

            timer = setInterval(function(){

                $('.header-nav li').eq(point).removeClass('show');
                point--;
                if(point < 0){
                    clearInterval(timer);
                    $('.header-nav').slideUp(300, function(){
                        $('.header-sendwich.paused').removeClass('paused');
                    });
                }

            }, 100);

        }

    });

    $(window).resize(function(){

        if($(window).width()>666){

            $('.header-sendwich').removeClass('active paused');
            $('.header-nav').removeAttr('style');
            $('.header-nav li').removeClass('show');

        }

    });

};

function lastWorksSlider(){

    $('.slider').slick({
        slidesToShow: 3,
        dots:true,
        draggable:false,
        responsive: [
           {
                breakpoint: 769,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 667,
                settings: {
                    arrows:1,
                    slidesToShow:1
                }
            }
        ]
    });

};

function fancyboxFunc(){

    $('.fancybox').fancybox({
        fitToView:true,
        autoSize:true
    });

};

$(document).ready(function(){

    sendwichFunc();
    lastWorksSlider();
    fancyboxFunc();

});

$(window).load(function(){

});

$(window).resize(function(){

});