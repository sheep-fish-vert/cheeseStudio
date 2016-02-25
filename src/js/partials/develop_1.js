
function sendwichFunc(){

    var point = null; //current menu item var
    var timer = null; //for setInterval

    $('.header-sendwich').click(function(){

        if(!$(this).is('.paused')){

            $(this).addClass('paused'); //add class for bloching event on sendwich by click

            if(!$(this).is('.active')){

                $(this).addClass('active');
                point = 0;

                $('.header-nav').slideDown(300, function(){

                    timer = setInterval(function(){

                        $('.header-nav li').eq(point).addClass('show');
                        point++;
                        if(point >= $('.header-nav li').length){
                            clearInterval(timer);
                            $('.header-sendwich.paused').removeClass('paused');
                        }

                    }, 200);
                });

            }
            else{
                $(this).removeClass('active');
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

                }, 200);

            }
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