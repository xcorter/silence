var Background = function(){

    function init() {
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            $('.big-background, .small-background-section').addClass('big-background-default-image');
        }
    }

    return {
        init: init
    }
}();