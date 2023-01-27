const {
    Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.hasMany(models.Purchase, {
                foreignKey: "productId",
                as: "purchases",
                onDelete: "RESTRICT"//Por lo general no es CASCADA es RESTRICT 
            })
        }
    }
    Product.init({
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        inventory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,//esto signfica los mismo que = sequelize: sequelize
        modelName: "Product",
        tableName: "products",
        timestamps: false
    });
    return Product;
}