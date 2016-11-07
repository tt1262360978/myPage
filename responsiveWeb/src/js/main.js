$(document).ready(function() {

    $("#owl-example").owlCarousel({
        items : 1,// 一张图片
        autoPlay: 2000, //Set AutoPlay to 3 seconds
        loop: true,


              // means that if(window<=1199){ show 3 slides per page}
        // itemsDesktop : [1199,3],

        // itemsDesktopSmall : [979,2],

        stopOnHover: true

    });

});