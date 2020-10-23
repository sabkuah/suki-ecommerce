var productNames = [{name: "Banana Split", image:"../img/snowboard-2.jpg"}, {name: "skis", image:"../img/snowboard-1.png"} ] 
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