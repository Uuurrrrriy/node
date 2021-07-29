const { Router } = require('express')

const { productController } = require('../../controllers')
const { productMiddleware } = require('../../middlewares')

const productRouter = Router();

productRouter.get( '/', productController.getAllProducts);

productRouter.use('/:productId',productMiddleware.checkIsProductExists)

productRouter.get( '/:productId', productController.getProductById);

// productRouter.post('/', (req, res) => {
//     console.log(req.body);
//     res.json('Post Product');
// })
// productRouter.put('/:productId', (req, res) => {
//     res.json('Put Product');
// })

productRouter.delete('/:productId', productController.deleteProduct)


module.exports = productRouter;
