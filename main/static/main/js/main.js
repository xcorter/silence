$(document).ready(function() {
    Background.init();
    Comment.init();
    var start = new Date()
    var end = new Date('1/01/2016')
    var countDownTime = Math.ceil((end.getTime() - start.getTime()) / (1000));
    $('.clock').FlipClock(
        countDownTime,
        {
            clockFace: 'DailyCounter',
            countdown: true
        }
    );
});