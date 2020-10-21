$("#checkout-button").on("click", function() {
    $("#checkout-form").toggle();
    $("#checkout-button").animate({
            scrollTop: $("#checkout-form").offset().top
        },
        'slow');

});



$("#promo").on("click", function() {
    $("#promo-code-field").toggle();
});