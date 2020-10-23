function Product(name, image, price, type) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.type = type;
}
let item = new Product("Banana Split", "./img/snowboard-2.jpg", 500.00, "snowboard")



var productNames = [item, { name: "skis", image: "./img/snowboard-1.jpg" }]
var itemDiv = ""

productNames.forEach(product => {
    console.log(product.name)
    itemDiv = itemDiv + `<div class='col-sm-3'>
    <div class='card'>
        <img class='card-img-top img-fluid' src=${product.image} alt='Card image cap'>
        <div class='card-block'>
            <h4 class='card-title'>${product.name}</h4>
        </div>
    </div>
    </div>`
})
document.getElementById("product-row-1").innerHTML = itemDiv


// Cart: Add product details to cart summary on checkout page
var itemInCart = ""




document.getElementById("product-added").innerHTML = itemInCart