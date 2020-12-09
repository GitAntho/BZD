var numberProduct = 0;


// Category 1

$("#categorie1").click(function() {
    displayProduct(1);
})


// Category 2

$("#categorie2").click(function() {
    displayProduct(2);
})


// Category 3

$("#categorie3").click(function() {
    displayProduct(3);
})


// Click Add Product 1

$("#product1").click(function() {
    addProduct(0, numberProduct);
})


// Click Add Product 2

$("#product2").click(function() {
    addProduct(1, numberProduct);
})


// Click Add Product 3

$("#product3").click(function() {
    addProduct(2, numberProduct);
})


// Click Add Product 4

$("#product4").click(function() {        
    addProduct(3, numberProduct);
})


// Remove Product

$("body").on("click", ".press", function() {
    var price = $(this).parent().attr('class');
    $(this).parent().remove();
    removeProduct(price);

})


function displayProduct(number) {
    $("#product-display").removeClass("d-none");

    var i = 0;
    while(i < 4) {
        switch (number) {
            case number = 1:
                var catalog = catalog1[i];
                break;
            case number = 2:
                var catalog = catalog2[i];
                break;
            case number = 3:
                var catalog = catalog3[i];
                break;
        }

        $("#name" + i).html(catalog.name)
        $("#description" + i).html(catalog.description);
        $("#image" + i).attr('src', catalog.image);
        $("#price" + i).html(catalog.price + "€");
        i++
    }
}


function addProduct(number, count) {
    if(count <= 8) {
        var name = $("#name" + number).html();
        var price = parseInt($("#price" + number).html());
        var total = parseInt($("#total").html()) + price;
        
        numberProduct++;

        if(numberProduct == 1) {
            $("#basket").html("Panier : " + numberProduct + " article");
        } else if(numberProduct > 1) {
            $("#basket").html("Panier : " + numberProduct + " articles");
        } else {
            $("#basket").html("Panier Vide");
        }

        $("#total").html(total);
        $("#basketDiv").append("<p class='" + price + "'>" + name + " <button type='submit' class='press btn red'><i class='fas fa-minus-circle'></i></button></p>");
    } else {
        $("#alert").toggleClass("d-none");

        setTimeout(function() {
            $("#alert").toggleClass("d-none");
        }, 5e3)
    }
}

function removeProduct(price) {
    var total = parseInt($("#total").html()) - price;

    numberProduct--;

    if(numberProduct == 1) {
        $("#basket").html("Panier : " + numberProduct + " article");
    } else if(numberProduct > 1) {
        $("#basket").html("Panier : " + numberProduct + " articles");
    } else {
        $("#basket").html("Panier Vide");
    }

    $("#total").html(total);
}

