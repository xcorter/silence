var Comment = function() {

    function showMessage() {
        var commentHTML = '<div class="message hidden">??????? ?? ?????????</div>';
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
        showMessage();
        return;
        $.ajax({
            method: "POST",
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