//Products 

// function Product(name, image, price, type) {
//     this.name = name;
//     this.image = image;
//     this.price = price;
//     this.type = type;
// }


var productNames = getCart()

// productNames.push(new Product("Banana Split", "../img/snowboard-1.png", 500.00, "snowboard"))


// Cart: Add product details to cart summary on checkout page
var itemInCart = ""

function generateCart(items) {
    let result = "";
    let summary = "";
    items.forEach((item, i) => {


        result +=
            `<div class="card-item-image">
            <img src=${item.image} alt=${item.name} class="cart-item-image">
        </div>
        <div class="card-body">
            <p class="card-item-name"><h5>${item.name}</h5></p>
            <div class="card-item-details">
                <p class="card-item-size"> Size: ${item.size}</p>
                <p class="card-item-color"> Type: ${item.type}</p>
                <p class="card-item-price"> Price: ${item.price}</p>
            </div>
            <div class="cart-item-quantity">
                <i class="fas fa-plus-circle"></i>

                <label for="item-quantity"></label>
                <input type="text" class="form-control rounded-0 item-quantity" value="1" disabled>

                <i class="fas fa-minus-circle"></i>
            </div>
        </div>
        <i class="fas fa-times cancel-item" data-value="${i}"></i>`

        summary += `${item.name}  -  $${Number(item.price).toFixed(2)}<br>`
    })
    document.getElementById("product-added").innerHTML = result
    document.getElementById("summary-item").innerHTML = summary

    document.querySelectorAll('.cancel-item').forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target.dataset.value);
            removeItem(e.target.dataset.value);
        });

    });
}

function calculateTotal(items) {
    let total = 0;

    items.forEach(item => {
        total += Number(item.price);
    })

    document.getElementById("totalPrice").innerHTML = `Total: $${Number(total).toFixed(2)}`
}

generateCart(productNames)
calculateTotal(productNames)

//Delete item  
// document.querySelectorAll('.cancel-item').forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e.target.dataset.value);
//         removeItem(e.target.dataset.value);
//     });

// });

function removeItem(index) {
    productNames.splice(index, 1);
    addItemToStorage("cart", productNames);
    generateCart(productNames);
    calculateTotal(productNames);
    showCartCount();
}


//Form Validation 

//validates credit card numbers

var re = /^(?:4[0-9]{12}(?:[0-9]{3})?)$|^(?:5[1-5][0-9]{14})$|^(?:3[47][0-9]{13})$|^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

function validateCard(cardInput) {
    var OK = re.exec(cardInput.value);
    if (!OK) {
        window.alert(cardInput.value + ' is not a valid credit card number. Please try again.');
    } else {
        window.alert('Arigatōgozaimashita! Your card has been validated');
    }
};

//validates email 

var email = /.@./;

function validateEmail(emailInput) {
    var OK = email.exec(emailInput.value);
    if (!OK) {
        window.alert(emailInput.value + ' is not a valid email. Please try again.');
    }
};