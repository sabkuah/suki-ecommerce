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
    items.forEach(item => {


        result += `<div id="card-item-image">
    <img src=${item.image} alt=${item.name} class="cart-item-image">
</div>
<div class="card-body">
    <p id="card-item-name"><h5>${item.name}</h5></p>
    <div id="card-item-details">
        <p id="card-item-size"> Size: ${item.size}</p>
        <p id="card-item-color"> Type: ${item.type}</p>
        <p id="card-item-color"> Price: ${item.price}</p>
    </div>
    <div id="cart-item-quantity">
        <i class="fas fa-plus-circle"></i>

        <label for="item-quantity"></label>
        <input type="text" class="form-control rounded-0" id="item-quantity">

        <i class="fas fa-minus-circle"></i>
    </div>

</div>`

        summary += `${item.name}  -  $${Number(item.price).toFixed(2)}<br>`
    })
    document.getElementById("product-added").innerHTML = result
    document.getElementById("summary-item").innerHTML = summary
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