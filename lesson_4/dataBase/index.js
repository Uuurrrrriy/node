// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: 'root',
//     database: 'shop'
// });
//
// module.exports = connection;

// sequelize
// connection -> pattern singleton - гарантує створення тільки 1 екземпляру класу

const Sequelize = require('sequelize');
const { readdir } = require('fs');
const path = require('path');


module.exports = ( () => { // singleton example
    let instance;

    function initConnection() {  // основна суть функції взяти всі моделі та повиносити в об'єкт
        const client = new Sequelize('shop', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            readdir(path.join(process.cwd(), 'database', 'models'),(err, files) => {
                files.forEach( file => {
                    // відділити назву файла від розширення файла
                    const [modelName] = file.split('.'); // отримали назву файла
                    models[modelName] = require(path.join(process.cwd(), 'database', 'models', modelName))(client, Sequelize);
                } )
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
} )();
