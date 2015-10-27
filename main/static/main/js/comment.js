var Comment = function() {

    function showMessage() {
        var commentHTML = '<div class="message hidden">Спасибо!</div>';
        $('.comment form').fadeOut(
            "slow",
            function() {
                $('.comment').html(commentHTML).find('.message').fadeIn();
            }
        );

    }

    function sendComment(e) {
        e.stopPropagation();
        e.preventDefault();
        $.ajax({
            url: "/post-comment",
            method: "POST",
            data: $('#comment-form').serialize(),
            success: showMessage
        });
    }

    function init() {
        $('[action="send-comment"]').on('click', sendComment);
    }

    return {
        init: init
    }
}();