module.exports = async (req, res, next) => {
    try {
        const { title, price } = req.body;

        if ( price < 0 ) throw new Error('Price is not valid');

        if ( title.length < 3 || title.length > 20 ) throw new Error('Title is not valid');

        next();
    } catch (e) {
        res.json({ error: true })
    }
}
