const storage = window.sessionStorage;

const addItemToStorage = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
};

const getItemFromStorage = (key) => {
    if (storage.getItem(key)) {
        return JSON.parse(storage.getItem(key));
    }
    return undefined;
};

const clearStorage = () => {
    storage.clear();
};

const clearCart = () => {
    storage.setItem('cart', []);
};

const getCart = () => {
    const cart = getItemFromStorage('cart');

    if (cart) {
        return cart;
    }

    clearCart();
    return [];
};

const addItemToCart = (item) => {
    const cart = getCart();
    cart.push(item);
    addItemToStorage('cart', cart);
};

const getCartCount = () => {
  const cart = getCart();
  if (cart.length > 0) {
    return cart.length;
  }
  return 0;
};

const showCartCount = () => {
  const cartCountElem = document.getElementById('cart-count');

  if (!cartCountElem){
    return;
  }

  const count = getCartCount();

  if (count){
    // Display the item
    cartCountElem.classList.remove('d-none');
    cartCountElem.innerText = count;
    return;
  }

  // Hide the item if there are no items
  cartCountElem.classList.add('d-none');
};

const getCategory = () => {
  const category = getItemFromStorage('category');

  if (category){
    return category;
  }

  return "";
};

const setCategory = (category) => {
  addItemToStorage('category', category);
};

// Wait until the page loads
document.addEventListener('DOMContentLoaded', () => {
  showCartCount();
});
