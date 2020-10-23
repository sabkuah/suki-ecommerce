$("#checkout-button").on("click", function() {
    $("#checkout-form").toggle();
    $('html,body').animate({
            scrollTop: $("#checkout-form").offset().top
        },
        'slow');
});



$("#promo").on("click", function() {
    $("#promo-code-field").toggle();
});

$("#filter").on("click", function() {
    $("#sidenav-items").toggle();
});