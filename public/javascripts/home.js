$(function() {
    var showPromo = false;
    if (!showPromo) {
        showPromo = true;
        $(".promo-image").fadeOut(2000);
        $(".secondary-promo").animate({
            opacity: 0.5,
        }, 2000, function() {
            $(".stories").animate({
                opacity: 1
            }, 2000);
        });

    }
});