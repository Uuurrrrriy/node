const productRouter = require('express').Router();

const { isProductExist, isProductValid } = require('../../middlewares')
const { productController } = require('../../controllers')

productRouter.get('/',productController.getProducts);
productRouter.post('/',isProductValid ,productController.createProducts);

productRouter.use('/:id', isProductExist)

productRouter.get('/:id',productController.getProduct);
productRouter.delete('/:id' ,productController.deleteProduct);
productRouter.put('/:id',isProductValid ,productController.updateProduct);

module.exports = productRouter;
