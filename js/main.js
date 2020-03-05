$j(document).ready(function () {
    function changeBtnsTemplateWidth() {
        var width = $j('body').innerWidth() - $j('.main-section').innerWidth() - $j('.settings').outerWidth()
            - (($j('body').innerWidth() - $j('body .container').innerWidth()) / 2);
        $j('.btns-template').css('width', width);
    }

    if ($j('body').outerWidth() > 991) {
        changeBtnsTemplateWidth();
    }
    $(window).resize(function () {
        if ($j('body').outerWidth() > 991) {
            changeBtnsTemplateWidth();
            $(".btns-template").fadeIn(1).css({transform: "translate(0%)"});
        } else {
            $j('.btns-template').css('width', '300px');
            $(".btns-template").fadeIn(1).css({transform: "translate(-100%)"});
        }
    });
    // Open side nav
    $(".trigger-btns-template").click(function () {
        $(".sidenav-overlay").fadeIn(1).css({transform: "translate(0%)"});
        $(".btns-template").fadeIn(1).css({transform: "translate(0%)"});
    });

    // close side nav
    $(".sidenav-overlay").click(function () {
        $(".sidenav-overlay").css({transform: "translate(-100%)"});
        $(".btns-template").css({transform: "translate(-100%)"});
    });

});