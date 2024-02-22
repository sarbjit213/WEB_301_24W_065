$(document).ready(function () {
    // Handle left swipe
    $('#swipe-left').click(function () {
        $('.recipe-container').animate({ scrollLeft: '-=200' }, 500);
    });

    // Handle right swipe
    // as follow your content lecture
    $('#swipe-right').click(function () {
        $('.recipe-container').animate({ scrollLeft: '+=300' }, 500);
    });

   
    $('.view-ingredients').click(function () {
        $(".lightbox").fadeIn();
        $(".recipe-container").hide();
    });

    $('.close-btn').click(function () {
        $(".lightbox").fadeOut();
        $(".recipe-container").show();
    });
});
