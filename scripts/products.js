var productNames = ["Banana Split", "Skis"] 
var itemDiv = ""
productNames.forEach(type => {
    itemDiv = itemDiv + `<div class='col-sm-3'>
    <div class='card'>
        <img class='card-img-top img-fluid' src='img/snowboard.jpeg' alt='Card image cap'>
        <div class='card-block'>
            <h4 class='card-title'>${type}</h4>
        </div>
    </div>
    </div>`  
})
document.getElementById("product-row-1").innerHTML = itemDiv