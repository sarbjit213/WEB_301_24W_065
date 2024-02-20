$(document).ready(function () {
   
    $('#swipe-left').click(function () {
        $('#swipable').animate({ scrollLeft: '-=900' }, 500);
    });

   
    $('#swipe-right').click(function () {
        $('#swipable').animate({ scrollLeft: '+=900' }, 500);
    });
});
