const {productService} = require('../../service')

module.exports = {
    getAllProducts: async (req, res) => {
        let products = await productService.getProducts();
        res.json(products);
    },

    getProductById: async (req, res) => {
        res.json(req.product);
    },

    deleteProduct: async (req, res) => {
        const { productId } = req.params;

        await productService.deleteByParams({ id: productId })

        res.sendStatus(204);
    }
};
