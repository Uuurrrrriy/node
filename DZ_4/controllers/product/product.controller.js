const {productService} = require('../../services');

module.exports = {
    getProducts: async (req, res) => {
        try {
            const products = await productService.getAll();

            res.json(products);
        } catch (e) {
            res.json(e)
        }
    },

    createProducts: async (req, res) => {
        try {
            const product = req.body;

            await productService.create(product)

            res.sendStatus(201)
            res.json({ create: true })
        } catch (e) {
            res.json(e)
        }
    },

    getProduct: async (req, res) => {
        try {
            const { id } = req.params;

            const product = await productService.getOne(id);

            res.json(product);
        } catch (e) {
            res.json(e);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;

            const isDeleted = await productService.delete(id);

            isDeleted ? res.status(204) : res.json(false)
        } catch (e) {
            res.json(e)
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = req.body;

            const [isUpdate] = await productService.update(id, product);

            isUpdate ? res.status(200) : res.json({ update: false })
        } catch (e) {
            res.json(e)
        }
    }
}
