jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1) {
        jQuery('.dmtop').css({
            bottom: "10px"
        });
    } else {
        jQuery('.dmtop').css({
            bottom: "-100px"
        });
    }
});  