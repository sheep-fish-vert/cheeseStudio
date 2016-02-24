
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
        centerMode: true,
        slidesToShow: 3
    });

};

$(document).ready(function(){

    sendwichFunc();
    lastWorksSlider();

});

$(window).load(function(){

});

$(window).resize(function(){

});