//---------------CHECKOUT FORM--------------//
//Checkout Form HTML 
let checkoutform = `<div class="headings">
<h3>Customer Information</h3>
</div>

<form>
<div class="form-row">
    <div class="form-group col-md-6">
        <input type="email" class="form-control rounded-0" id="inputEmail" placeholder="E-mail">
    </div>
    <div class="form-group col-md-6">
        <input type="password" class="form-control rounded-0" id="inputPassword4" placeholder="Password">
    </div>
</div>
<div id="email-valid"></div>
<div class="form-group">
    <input type="text" class="form-control rounded-0" id="inputAddress" placeholder="Address">
</div>
<div class="form-group">
    <input type="text" class="form-control rounded-0" id="inputAddress2" placeholder="Address 2">
</div>
<div class="form-row">
    <div class="form-group col-md-6">
        <input type="text" class="form-control rounded-0" id="inputCity" placeholder="City">
    </div>
    <div class="form-group col-md-4 rounded-0">
        <select id="inputState" class="form-control rounded-0">
        <option selected>Province</option>
        <option value="BC">British Columbia</option>
        <option value="AB">Alberta</option>
        <option value="SK">Saskatchewan</option>
        <option value="MB">Manitoba</option>
        <option value="ON">Ontario</option>
        <option value="QC">Quebec</option>
        <option value="NF">Newfoundland & Labrador</option>
        <option value="NS">Nova Scotia</option>
        <option value="PEI">Prince Edward Island</option>
        <option value="NB">New Brunswick</option>
        <option value="YT">Yukon</option>
        <option value="NT">Nunvaut</option>
        <option value="NW">Northwest Territories</option>
        </select>
    </div>
    <div class="form-group col-md-2">
        <input type="text" class="form-control rounded-0" id="inputPostalCode" placeholder="Postal Code">
    </div>
</div>

<div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
        Same as delivery address
        </label>
    </div>
</div>

</form>

<div class="headings">
<h3>Payment Method</h3>
</div>
<form>
<div id="payment-type">
    <button type="button" class="btn btn-outline-secondary col-lg-5">Credit Card</button>
    <button type="button" class="btn btn-outline-secondary col-lg-5">PayPal</button>
</div>
<div class="form-group">
    <input type="text" class="form-control rounded-0" id="inputCardNumber" placeholder="Card Number">
</div>
<div id="cc-validation">
</div>

<div class="form-row">
    <div class="form-group col-lg-6">
        <input type="password" class="form-control rounded-0" id="inputPassword4" placeholder="Cardholder Name">
    </div>
    <div class="form-group col-lg-4">
        <input type="password" class="form-control rounded-0" id="inputPassword4" placeholder="Expiry Date">
    </div>
    <div class="form-group col-lg-2">
        <input type="password" class="form-control rounded-0" id="inputPassword4" placeholder="CVC">
    </div>
</div>
<div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
        Sign up to newsletter
        </label>
    </div>
    
</div>

<button type="submit" class="button" id="confirm-pay" onclick="validateEmail(document.getElementById('inputEmail')); validateCard(document.getElementById('inputCardNumber'));">Confirm and Pay</button>
</form>`;

//Purchase Confirmation HTML 
let purchaseConfirmation = `<img src="img/about-img-1-lg.jpg" class="img-fluid" id="ty-msg" alt="Responsive image">
<div id="purchaseMessage">
    <h4>Arigatōgozaimashita!</h4>
    <p>A confirmation has been sent to your email address. <br><br>Please allow up to 2 business days to process and ship your order.<br>Order Number: 13524</p></div>`;


// inserts and scrolls to checkout-form when checkout button clicked 
$("#checkout-button").on("click", function() {
    document.getElementById("checkout-form").innerHTML = checkoutform;
    //inserts and scrolls to purchase success image when confirm-pay button clicked
    $("#confirm-pay").on("click", function() {
        document.getElementById("purchaseSuccess").innerHTML = purchaseConfirmation;

        $('html,body').animate({
                scrollTop: $("#purchaseSuccess").offset().top
            },
            'slow');
    });
    $('html,body').animate({
            scrollTop: $("#checkout-form").offset().top
        },
        'slow');
});

// toggles promocode field when clicked
$("#promo").on("click", function() {
    $("#promo-code-field").toggle();
});

var productNames = getCart()

//---------------CART--------------//
//generateCart adds product details to cart summary on checkout page

var itemInCart = ""

function generateCart(items) {
    let result = "";
    let summary = "";
    items.forEach((item, i) => {
        result +=
            `<div class="product-added">
            <img src=${item.image} alt=${item.name} class="cart-item-image">
            <div class="card-body">
                <p class="card-item-name"><h5>${item.name}</h5></p>
                <div class="card-item-details">
                    <p> Size: ${item.size}</p>
                    <p> Type: ${item.type}</p>
                    <p> Price: ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <i class="fas fa-plus-circle"></i>
                    <label for="item-quantity"></label>
                    <input type="text" class="form-control rounded-0 item-quantity" value="1" disabled>
                    <i class="fas fa-minus-circle"></i>
                </div>
            </div>
            <i class="fas fa-times cancel-item" data-value="${i}"></i>
        </div>`

        summary += `${item.name}  -  $${Number(item.price).toFixed(2)}<br>`
    })
    document.getElementById("products-cart").innerHTML = result
    document.getElementById("summary-item").innerHTML = summary

    document.querySelectorAll('.cancel-item').forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target.dataset.value);
            removeItem(e.target.dataset.value);
        });

    });
}

//calculateTotal lists item names and totals their prices in the order summary

function calculateTotal(items) {
    let total = 0;

    items.forEach(item => {
        total += Number(item.price);
    })

    document.getElementById("totalPrice").innerHTML = `Total: $${Number(total).toFixed(2)}`
}

generateCart(productNames)
calculateTotal(productNames)

//Removes items from cart

function removeItem(index) {
    productNames.splice(index, 1);
    addItemToStorage("cart", productNames);
    generateCart(productNames);
    calculateTotal(productNames);
    showCartCount();
}


//---------------FORM VALIDATION--------------//

//validates credit card numbers

var re = /^(?:4[0-9]{12}(?:[0-9]{3})?)$|^(?:5[1-5][0-9]{14})$|^(?:3[47][0-9]{13})$|^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

let ccInvalid = `<div class="alert alert-danger" role="alert">
    Please enter a valid credit card number.</div>`;

function validateCard(cardInput) {
    var OK = re.exec(cardInput.value);
    if (!OK) {
        document.getElementById("cc-validation").innerHTML = ccInvalid;
    } else {
        document.getElementById("cc-validation").innerHTML = '';
    }
};

//validates email 

var email = /.@./;

let emailInvalid = `<div class="alert alert-danger" role="alert">
Please enter a valid email.</div>`;

function validateEmail(emailInput) {
    var OK = email.exec(emailInput.value);
    if (!OK) {
        document.getElementById("email-valid").innerHTML = emailInvalid;
    } else {
        document.getElementById("email-valid").innerHTML = '';
    }
};