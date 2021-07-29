// getUsers
// createUser

const db = require('../dataBase').getInstance();

// const UserModel = db.getModel('User');

module.exports = {
    getUsers: async () => {
        const UserModel = db.getModel('User');
        return await UserModel.findAll({});
    },
    createUser: async (user) => {
        const UserModel = db.getModel('User');
        await UserModel.create(user)
    }
}
