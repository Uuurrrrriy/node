const {userService} = require('../../service')
const { hashPassword, checkHashPassword } = require('../../helpers');
const ErrorHandler = require('../../errors/ErrorHandler');

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();
        res.json(users)
    },

    updateUser: (req, res) => {
        res.end('PUT users')
    },

    deleteUser: (req, res) => {
        const params = req.params
        const query = req.query;

        res.json({params, query})
    },

    loginUser: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await userService.getUserByParams({email});

            if (!user) return next(new ErrorHandler('User is not found', 404, 4041));

            await checkHashPassword(user.password, password);

            res.json(user);
        } catch (e) {
            next(e)
        }

    },

    createUser: async (req, res) => {
        try {
            const user = req.body;
            // TODO hash
            const hashedPassword = await hashPassword(user.password);

            user.password = hashedPassword;

            await userService.createUser(user)
        } catch (e) {
            res.json(e)
        }
        res.end();
    }
};
