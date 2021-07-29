const uuid = require('uuid').v4;

const { readProductsFile, writeProductsFile } = require('../utils/products')

module.exports = class Product {
    constructor(title, price, id) {
        this.id = id || uuid();
        this.title = title;
        this.price = price;
    }

    static async fetchAll() {
        return await readProductsFile();
    }

    static async findById(id) {
        const products = await readProductsFile();
        return  products.find(product => product.id === id );
    }

    async create() {
        const products = await readProductsFile();

        products.push(this);

        await writeProductsFile(products)
    }

    async update() {
        const products = await readProductsFile();

        const existingProductId = products.findIndex( product => product.id === this.id );
        console.log(existingProductId);
        products[existingProductId] = this;

        await writeProductsFile(products);
    }

    static async deleteById(id) {
        let products = await readProductsFile();

        products = products.filter(product => product.id !== id );

        await writeProductsFile(products)
    }
}
