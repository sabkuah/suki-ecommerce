// $("#checkout-button").on("click", function() {
//     $("#checkout-form").toggle();
//     $('html,body').animate({
//             scrollTop: $("#checkout-form").offset().top
//         },
//         'slow');
// });

let checkoutform = `<div class="headings">
<h3>Customer Information</h3>
</div>

<form>
<div class="form-row">
    <div class="form-group col-md-6">
        <input type="email" class="form-control rounded-0" id="inputEmail4" placeholder="E-mail">
    </div>
    <div class="form-group col-md-6">
        <input type="password" class="form-control rounded-0" id="inputPassword4" placeholder="Password">
    </div>
</div>
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
    <input type="text" class="form-control rounded-0" id="inputAddress" placeholder="Card Number">
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

<button type="submit" class="button" id="confirm-pay">Confirm and Pay</button>
</form>`;


let purchaseConfirmation = `<img src="img/aboutimage2.jpg" class="img-fluid" alt="Responsive image">
<div id="purchaseMessage">
    <h4>Thank you for your purchase!</h4>
    <p>An email has been sent to your email address. <br><br>Please allow up to 2 business days to process and ship your order.<br>Order Number: 13524</p></div>`;

$("#checkout-button").on("click", function() {
    document.getElementById("checkout-form").innerHTML = checkoutform;
    $('html,body').animate({
            scrollTop: $("#checkout-form").offset().top
        },
        'slow');
});


$("#promo").on("click", function() {
    $("#promo-code-field").toggle();
});

$("#confirm-pay").on("click", function() {
    document.getElementById("purchaseSuccess").innerHTML = purchaseConfirmation;
    //$("#purchaseSuccess").slideToggle();
    $('html,body').animate({
            scrollTop: $("#purchaseSuccess").offset().top
        },
        'slow');
});