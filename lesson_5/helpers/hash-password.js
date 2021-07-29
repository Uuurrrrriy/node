const bcrypt = require('bcrypt');

module.exports = (password) => { // пароль хешується асинхронно
    return  bcrypt.hash(password, 10);
}
