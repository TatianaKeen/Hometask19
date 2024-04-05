class ShoppingCart {
    static #instance;
    #items;

    constructor() {
        this.#items = [];
    }

    static getInstance() {
        if (!ShoppingCart.#instance) {
            ShoppingCart.#instance = new ShoppingCart();
        }
        return ShoppingCart.#instance;
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItemById(id) {
        this.#items = this.#items.filter(item => item.id !== id);
    }

    getItems() {
        return this.#items;
    }
}

const cart1 = ShoppingCart.getInstance();
cart1.addItem({ id: 1, name: 'Product A' });
const cart2 = ShoppingCart.getInstance();
cart2.addItem({ id: 2, name: 'Product B' });

console.log(cart1.getItems().length);
