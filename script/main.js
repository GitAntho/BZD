$(document).ready(function () {
    $("#test").hide();
})

$("#valider").click(function() {
    var name = catalog[0].name;
    var description = catalog[0].description;
    var image = catalog[0].image;
    var price = catalog[0].price + "€";

    $("#name").html(name);
    $("#description").html(description);
    // $("#name").html(image);
    // $("#name").html(price);
})