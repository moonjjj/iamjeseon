$(function(){

    var scrollBody = $('.fix_motion');
    var scrollHeight;
    var sectionOffsetTop;
    var sectionScrolTop;
    var scrollRealHeight;
    var winScrollTop;
    var scrollPerecnt;
    var percent;
    var isMobile;

    function scrollFunc() {

        setProperty();

        if(isMobile) {
            contentInMobile();
        } else {
            contentIn();
        }
    };

    function setProperty() {

        isMobile = $(window).width() <= 1024 ? true : false;
        scrollHeight = scrollBody.height();
        sectionOffsetTop = scrollBody.offset().top;
        scrollRealHeight = (scrollHeight - $(window).height());
        winScrollTop = $(window).scrollTop();
        sectionScrolTop = winScrollTop - sectionOffsetTop;

        scrollPerecnt =  sectionScrolTop / scrollRealHeight;
        percent = scrollPerecnt * 100;

    };

    function contentIn() {

        var deviceImg = $('.device_fix .slide_wrap figure');
        var imgWidth = deviceImg.width();

        if(percent >= 12 && percent < 43) {

            imageChange(imgWidth * 0);
            $('.fix_motion .text_box .txt01').addClass('active');
        }

        if(percent >= 43 && percent < 75) {

            imageChange(imgWidth * 1);
            $('.fix_motion .text_box .txt02').addClass('active');
        }

        if(percent >= 75 && percent < 100) {

            imageChange(imgWidth * 2);
            $('.fix_motion .text_box .txt03').addClass('active');
        }

        if(percent >= 100) {

            imageChange(imgWidth * 3);
            $('.fix_motion .text_box .txt04').addClass('active');
        }

        if(percent < 12 ) {
            $('.fix_motion .text_box .txt01').removeClass('active');
            $('.fix_motion .text_box .txt02').removeClass('active');
            $('.fix_motion .text_box .txt03').removeClass('active');
            $('.fix_motion .text_box .txt04').removeClass('active');
        }
    };

    function contentInMobile() {

        var deviceImg = $('.device_fix .slide_wrap figure');
        var imgWidth = deviceImg.width();

        if(percent >= 5 && percent < 25){

            imageChange(imgWidth * 0);
            $('.fix_motion .text_box p').removeClass('active');
            $('.fix_motion .text_box .txt01').addClass('active');
        }

        if(percent >= 25 && percent < 45) {

            imageChange(imgWidth * 1);
            $('.fix_motion .text_box p').removeClass('active');
            $('.fix_motion .text_box .txt02').addClass('active');
        }

        if(percent >= 45 && percent < 65) {

            imageChange(imgWidth * 2);
            $('.fix_motion .text_box p').removeClass('active');
            $('.fix_motion .text_box .txt03').addClass('active');
        }

        if(percent >= 65 && percent <= 85) {

            imageChange(imgWidth * 3);
            $('.fix_motion .text_box p').removeClass('active');
            $('.fix_motion .text_box .txt04').addClass('active');

        }

        if(percent > 85) {

            imageChange(imgWidth * 3);
            $('.fix_motion .text_box p').removeClass('active');
        }

        if(percent < 0) {

            imageChange(imgWidth * 0);
            $('.fix_motion .text_box p').removeClass('active');
        }

    };

    function imageChange(moveX) {

        if(Modernizr.csspositionsticky) {
            var img = $('.fix_motion .slide_wrap .slide');
            img.css({
                'transform':'translateX('+ -moveX +'px)'
            });
        }
    };

    function init() {

        scrollFunc();

    };

    $(window).scroll(function() {

        scrollFunc();
    });

    $(window).resize(function() {

        scrollFunc();
    });

    init();
});