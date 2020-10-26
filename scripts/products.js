let item1 = new Product("Banana Split", "./img/snowboard-1.jpg", 500.00, "Snowboard")
let item2 = new Product("Grouse", "./img/snowboard-2.jpg", 549.00, "Snowboard")
let item3 = new Product("Cypress", "./img/snowboard-3.jpg", 495.00, "Snowboard")
let item4 = new Product("Neko", "./img/snowboard-4.jpg", 495.00, "Snowboard")
let item5 = new Product("Whistler", "./img/ski-1.jpg", 399.00, "Skis")
let item6 = new Product("Blackcomb", "./img/ski-2.jpg", 425.00, "Skis")
let item7 = new Product("Seymour", "./img/ski-3.jpg", 495.00, "Skis")
let item8 = new Product("Sugoi", "./img/ski-4.jpg", 495.00, "Skis")




var productNames = [item1, item2, item3, item4, item5, item6, item7, item8]
var itemDiv = ""



function DisplayProducts(products){
    var itemDiv = ""
    products.forEach(product => {
        console.log(product.name)
        itemDiv = itemDiv + `<div class='col-sm-3'>
        <a href="details.html" class="purchase-link" onclick="
            addItemToStorage('selectedItem', new Product('${product.name}', '${product.image}', '${product.price}', '${product.type}'));">
            <div class='card'>
                <img class='card-img-top img-fluid' src=${product.image} alt='Card image cap'>
                <div class='card-block'>
                    <h4 class='card-title'>${product.name}</h4>
                </div>
            </div>
            </a>
        </div>`
    })
document.getElementById("product-row-1").innerHTML = itemDiv
}

var skiList = [item5, item6, item7, item8]
var snowboardList = [item1, item2, item3, item4]

if (getCategory() === 'skis'){
  DisplayProducts (skiList);
} else if (getCategory() === 'snowboards'){
  DisplayProducts(snowboardList);
} else {
  DisplayProducts (productNames);
}
