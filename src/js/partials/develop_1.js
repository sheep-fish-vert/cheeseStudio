
function sendwichFunc(){

    $('.header-sendwich.paused').click(function(){

        $(this).addClass('paused');

        if(!$(this).is('.active')){
            $(this).addClass('active');
        }
        else{

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