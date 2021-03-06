let products = [new Product("Banana Split", "./img/snowboard-1.jpg", 500.00, "Snowboard"),
                //new Product("Grouse", "./img/snowboard-2.jpg", 549.00, "Snowboard"),
                new Product("Cypress", "./img/snowboard-3.jpg", 495.00, "Snowboard"),
                //new Product("Whistler", "./img/ski-1.jpg", 399.00, "Skis"),
               // new Product("Blackcomb", "./img/ski-2.jpg", 425.00, "Skis"),
                new Product("Seymour", "./img/ski-3.jpg", 495.00, "Skis")];


const createElements = (products) => {
  // Empty the div that contains all the products
  const latestProducts = document.querySelector("#latest-products");
  latestProducts.innerHTML = "";

  // Create HTML elements from the Product objects
  products.map(product => {

    // Clicking the product goes to the details page
    const parentAnchor = document.createElement('a');
    parentAnchor.setAttribute('href', 'details.html');

    // Clicking the product also saves it to the cart
    parentAnchor.onclick = () => {
      addItemToStorage('selectedItem', product);
    };

    // The image in the roduct view
    const parentFigure = parentAnchor.
          appendChild(document.createElement('figure'));

    //Set the image
    const img = document.createElement('img');
    img.setAttribute('alt', product.name);
    img.setAttribute('src', product.image);

    //Set the caption
    const figCaption = document.createElement('figcaption');
    figCaption.innerText = product.name;

    parentFigure.appendChild(img);
    parentFigure.appendChild(figCaption);

    return parentAnchor;
  }).
    forEach(product => {
      //Append every created HTML element to the page
      latestProducts.appendChild(product);
    });
};

document.addEventListener('DOMContentLoaded', () => {
  createElements(products);
});
