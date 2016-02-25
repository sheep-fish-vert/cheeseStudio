$(document).ready(function(){
    $('.what-we-doing-button-wrap>.button').click(function() {
        var t = $(this);
        $(this).closest('.what-we-doing-item').children('.tophide').css('top', '0');
        $(this).closest('.what-we-doing-item').children('.bothide').css('bottom', '0');

        setTimeout(function() {
            t.closest('.what-we-doing-item').removeClass('show');
            t.closest('.what-we-doing-item').addClass('show');

            console.log('fffff');
            t.closest('.what-we-doing-item').children('.tophide').css('top', '-50%');
            t.closest('.what-we-doing-item').children('.bothide').css('bottom', '-50%');
        }, 1000);
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});