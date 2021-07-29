const { Router } = require('express')

const productRouter = Router();

productRouter.get( '/', (req, res) => {
    res.json('Get Product');
})

productRouter.post('/', (req, res) => {
    console.log(req.body);
    res.json('Post Product');
})

productRouter.put('/', (req, res) => {
    res.json('Put Product');
})

productRouter.delete('/:name', (req, res) => {
    const params = req.params;
    const query = req.query;
    res.json({params, query});
})


module.exports = productRouter;
