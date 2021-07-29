const db = require('../dataBase').getInstance();

module.exports = {
    create: (product) => {
        const ProductModel = db.getModel('Product');
        return  ProductModel.create(product)
    },

    getAll: () => {
        const ProductModel = db.getModel('Product');
        return  ProductModel.findAll()
    },

    getOne: (id) => {
        const ProductModel = db.getModel('Product');
        return ProductModel.findByPk(id)
    },

    delete: (id) => {
        const ProductModel = db.getModel('Product');
        return ProductModel.destroy({
            where: { id }
        })
    },

    update: (id, product) => {
        const ProductModel = db.getModel('Product');
        return  ProductModel.update(product, {
            where: {
                id
            }
        })
    }
}
