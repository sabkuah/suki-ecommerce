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

//clearCart();