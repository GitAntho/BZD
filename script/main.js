var numberProduct = 0;
var allName = [];


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

$("#product0").click(function() {
    addProduct(0);
})


// Click Add Product 2

$("#product1").click(function() {
    addProduct(1);
})


// Click Add Product 3

$("#product2").click(function() {
    addProduct(2);
})


// Click Add Product 4

$("#product3").click(function() {
    addProduct(3);
})


// Remove Product

$("body").on("click", ".press", function() {
    var price = $(this).parent().attr('class');
    var name = $(this).parent().attr('id');
    var quantity = parseInt($("#" + name + "Span").html());
    var removePrice = price * quantity;
    $(this).parent().remove();
    removeProduct(removePrice, name);

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
        $("#totalPrice" + i).html("0€");
        $('#quantity' + i + ':input[type="number"]').val("");
        $('#product' + i).prop('disabled', true);
        i++
    }
}

function addProduct(number) {
    var quantity = $('#quantity' + number + ':input[type="number"]').val();
    var nameProduct = $('#name' + number).html().replace(/ /g, '');
    var totalPrice = parseInt($("#totalPrice" + number).html().slice(0, -1));
    var total = parseInt($("#total").html()) + totalPrice;

    $('#quantity' + number + ':input[type="number"]').val(0);
    $("#totalPrice" + number).html('0€');
    $('#product' + number).prop('disabled', true);
    
    if(allName.includes(nameProduct)) {
        var numberSpan = parseInt($('#' + nameProduct + "Span").html());

        if(numberSpan + parseInt(quantity) <= 9) {
            var newNumber = numberSpan + parseInt(quantity);

            $("#total").html(total);

            $("#" + nameProduct + "Span").html(newNumber);
        } else {
            $("#alert").toggleClass("d-none");
            setTimeout(function() {
                $("#alert").toggleClass("d-none");
            }, 3e3)
        }
    } else {
        var price = parseInt($('#price' + number).html());
        var chiffre = quantity;
        
        numberProduct++;
        
        numberOfProduct();

        allName.push(nameProduct);

        $("#total").html(total);

        $("#basketDiv").append("<p id=" + nameProduct + " class='" + price + "'>" + nameProduct + " (<span id='" + nameProduct + "Span'>" + chiffre + "</span>)<button type='submit' class='press btn red'><i class='fas fa-minus-circle'></i></button></p>");
    }
}

function numberOfProduct() {
    if(numberProduct == 1) {
        $("#basket").html("Panier : " + numberProduct + " article");
    } else if(numberProduct > 1) {
        $("#basket").html("Panier : " + numberProduct + " articles");
    } else {
        $("#basket").html("Panier Vide");
    }
}

function removeProduct(price, name) {
    var total = parseInt($("#total").html()) - price;

    numberProduct--;

    allName.splice($.inArray(name, allName), 1);

    console.log(allName);

    numberOfProduct();

    $("#total").html(total);
}


// Change number price 1

$('#quantity0:input[type="number"]').keyup(function() {
    price = parseInt($('#price0').html().slice(0, -1));
    changeNumberKey(0, price);
})

$('#quantity0:input[type="number"]').click(function () {
    price = parseInt($('#price0').html().slice(0, -1));
    changeNumberClick(0, price);
});


// Change number price 2

$('#quantity1:input[type="number"]').keyup(function() {
    price = parseInt($('#price1').html().slice(0, -1));
    changeNumberKey(1, price);
})

$('#quantity1:input[type="number"]').click(function () {
    price = parseInt($('#price1').html().slice(0, -1));
    changeNumberClick(1, price);
});


// Change number price 3

$('#quantity2:input[type="number"]').keyup(function() {
    price = parseInt($('#price2').html().slice(0, -1));
    changeNumberKey(2, price);
})

$('#quantity2:input[type="number"]').click(function () {
    price = parseInt($('#price2').html().slice(0, -1));
    changeNumberClick(2, price);
});


// Change number price 4

$('#quantity3:input[type="number"]').keyup(function() {
    price = parseInt($('#price3').html().slice(0, -1));
    changeNumberKey(3, price);
})

$('#quantity3:input[type="number"]').click(function () {
    price = parseInt($('#price3').html().slice(0, -1));
    changeNumberClick(3, price);
});


function changeNumberKey(number1, number2) {
    if($('#quantity' + number1 + ':input[type="number"]').val().length > 1) {
        $('#quantity' + number1 + ':input[type="number"]').val("");
        $('#totalPrice' + number1).html("0€");
        $("#wrong" + number1).toggleClass("d-none");
        $('#product' + number1).prop('disabled', true);
        setTimeout(function() {
            $("#wrong" + number1).toggleClass("d-none");
        }, 3e3)
    } else {
        valInput = $('#quantity' + number1 + ':input[type="number"]').val();
        newPrice = valInput * number2;
        $('#totalPrice' + number1).html(newPrice + '€');
        if($('#totalPrice' + number1).html() == '0€'){
            $('#product' + number1).prop('disabled', true);
        } else {
            $('#product' + number1).prop('disabled', false);
        }
    }
}

function changeNumberClick(number1, number2) {
    valInput = $('#quantity' + number1 + ':input[type="number"]').val();
    newPrice = valInput * number2;
    $('#totalPrice' + number1).html(newPrice + '€');
    if($('#totalPrice' + number1).html() == '0€'){
        $('#product' + number1).prop('disabled', true);
    } else {
        $('#product' + number1).prop('disabled', false);
    }
}