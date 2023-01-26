const { EntitySchema } = require("typeorm");
const ProductModel = require("./ProductModel")
module.exports = new EntitySchema({
    name: "Product",
    tableName: "products",
    target: ProductModel,
    columns: {
        _id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar"
        },
        price: {
            type: "numeric"
        },
        inventory: {
            type: "integer"
        },
        unit: {
            type: "varchar"
        },
    }
});