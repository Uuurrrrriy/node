const Joi = require('joi');

const userValidationSchema = require('../../validators/user/user.validator');
const ErrorHandler = require('../../errors/ErrorHandler');


module.exports = (req, res, next) => { // next означає перейди до іншого обробника
    try {
        const user = req.body;

        // const isUserValid = Joi.validate(user,userValidationSchema); таке не працює
        const {error} = userValidationSchema.validate(user);

        if (error) {
            return next(new ErrorHandler(error.details[0].message, 400))
        }
        console.log('_______________');
        console.log(error.details[0].message);
        console.log('_______________');

        next();

    } catch (e) {
        res.render('error', {message: e.message})
    }
}
