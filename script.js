$(function () {
    let values = 0;
    if (window.innerWidth <= 1280) {
        values = 60;
    } else {
        values = 70;
    }
    $("a.header__nav-link").bind("click", function (event) {
        document.getElementById('menu').checked = !document.getElementById('menu').checked;
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr("href")).offset().top - values,
                },
                0,
                "easeInOutExpo"
            );
        event.preventDefault();
    });
});

