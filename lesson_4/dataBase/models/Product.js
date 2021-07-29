module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            discount: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            // create_at: {
            //     type: DataTypes.DATE,
            //     defaultValue: sequelize.fn('now')
            // }
        },
        {
            tableName: 'product',
            timestamps: false
        });
}
