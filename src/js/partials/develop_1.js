
function sendwichFunc(){

    var point = null;
    var timer = null;

    $('.header-sendwich:not(.paused)').click(function(){

        $(this).addClass('paused');

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

    });

};

$(document).ready(function(){

    sendwichFunc();

});

$(window).load(function(){

});

$(window).resize(function(){

});