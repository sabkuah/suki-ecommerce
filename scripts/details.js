//Generates a div with fake ratings
const generateFakeRatings = () => {
  const outer = document.createElement('div');
  const ratings = Math.floor(Math.random() * 1000);

  for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++){
    outer.insertAdjacentHTML('afterbegin', '<i class="fas fa-star"></i>');
  }

  outer.insertAdjacentHTML('beforeend', `<div> ${ratings} reviews</div>`);
  return outer.innerHTML;
};

const generateDetails = (item) => {
  // Returns formatted html for a given item
  // The values substituted in are  item.image, item.price and item.name
  return `<div class="d-flex align-items-center justify-content-center">
          <div id="image-carousel" class="carousel slide mr-5" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img alt="Snowboard" width=200 src="${item.image}"/>
              </div>
              <div class="carousel-item">
                <img alt="Snowboard" width=200 src="${item.image}"/>
              </div>
              <div class="carousel-item">
                <img alt="Snowboard" width=200 src="${item.image}"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#image-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#image-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="product-details p-5 ml-5">
            <h1>${item.name}</h1>
            <div>${generateFakeRatings()}</div>
            <div id="price">$${item.price} CAD</div>
            <br/>
            <select id="size-select" name="size" class="w-100 mb-1">
              <option value="">CHOOSE A SIZE</option>
              <option value="11">10</option>
              <option value="11">11</option>
              <option value="11">12</option>
            </select>

            <button id="adderButton" type="button" class="btn btn-primary w-100 mt-1">ADD TO CART</button>
          </div>
        </div>
        <div class="container pt-1 mt-4 text-center" id="specifications-container">
          <h3>Specifications</h3>
          <div class="row">
            <div class="col-md-6 text-center">
                <img alt="Core" src="./img/techdesimg/Core.png"/>
            </div>
            <div class="col-md-6 text-center">
                <img alt="Fibreglass" src="./img/techdesimg/Fibreglass.png"/>
            </div>
          </div>
       </div>`;
};

// Wait until the page is loaded before adding content to it
document.addEventListener('DOMContentLoaded', function () {
  //fillTestData();
  const item = getItemFromStorage('selectedItem');
  if (item){
    document.querySelector('main').innerHTML = generateDetails(item);
    const button = document.querySelector('#adderButton').addEventListener("click", () => {
      addItemToCart(item);
      showCartCount();
    });
  }
});
