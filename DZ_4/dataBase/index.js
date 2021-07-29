const Sequelize = require('sequelize');
const { readdir } = require('fs');
const { join } = require('path');

module.exports = ( () => {
    let instance;

    function initConnection() {
        const client = new Sequelize('shop','root','root',{
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            readdir(join(process.cwd(),'dataBase','models'), (err, files) => {
                files.forEach( file => {
                    const [modelName] = file.split('.');
                    models[modelName] = require(join(process.cwd(),'dataBase','models',modelName))(client, Sequelize);
                } )
            })
        }

        return {
            setModels: () => getModels(),
            getModel: modelName => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) instance = initConnection()
            return instance;
        }
    }
} )()
