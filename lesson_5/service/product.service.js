const db = require('../dataBase').getInstance();
const { modelNamesEnum: { PRODUCT } } = require('../constants')

module.exports = {
    getProducts: async () => {
        const ProductModel = db.getModel(PRODUCT);
        return await ProductModel.findAll({});
    },

    getProductById: async (id) => {
        const ProductModel = db.getModel(PRODUCT);
        return await ProductModel.findByPk(id)
    },

    deleteByParams: (params) => {
        const ProductModel = db.getModel(PRODUCT);
        return ProductModel.destroy({
            where: {
                params
            }
        })
    },

    createProduct: (product) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.create(product)
    }
}
