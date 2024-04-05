class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    isOnSale() {
        return this.price < 100;
    }
}

class Phone extends Product {
    constructor(name, price) {
        super(name, price);
    }
}

class ProductFactory {
    static createProduct(type, name, price) {
        if (type === 'phone') {
            return new Phone(name, price);
        }
        throw new Error("Invalid product type");
    }
}

const product = ProductFactory.createProduct('phone', 'Smartphone', 99.99);
console.log(product.name); 
console.log(product.price);
console.log(product.isOnSale() ? 'On Sale' : 'Not on Sale');