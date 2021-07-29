// const Product = require('../models/Product');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (isNaN(id) || +id < 0) throw new Error('Product id is not valid')
        // const product = await Product.findById(id);
        //
        // if (!product) throw new Error('Product is not found')

        next();
    } catch (e) {
        res.json({ error: e.message })
    }
}
