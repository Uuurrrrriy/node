module.exports = async (req, res, next) => {
    try {
        const { title, price, description } = req.body;

        if (!title || !price || !description) throw new Error('Product is not valid');

        if ( price < 0 ) throw new Error('Price is not valid');

        if ( title.length < 3 || title.length > 20 ) throw new Error('Title is not valid');

        next();
    } catch (e) {
        res.json({ error: e.message })
    }
}
