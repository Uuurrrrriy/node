// module.exports.userRouter = require('./userRouter/user.router');
// module.exports.productRouter = require('./productRouter/product.router');


const userRouter = require('./userRouter/user.router');
const productRouter = require('./productRouter/product.router');

module.exports = {
    userRouter,
    productRouter
}
