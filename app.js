$(document).ready(function () {
    $('.accordion-question').on('click', function () {
        $(this).next().slideToggle('500')
            .siblings('.accordion-answer').toggle();

            var img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        img.toggleClass('rotate');

    });

    $('.accordion-question').click(function(){
$(this).css('font-weight','600');
    });
});