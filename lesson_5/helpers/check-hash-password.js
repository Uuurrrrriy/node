const bcrypt = require('bcrypt');

module.exports = async (hashedPassword, password) => { // перевірка хеш суми паролей
    const isPasswordsEquals = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordsEquals) throw new Error('User is not exist');
}
