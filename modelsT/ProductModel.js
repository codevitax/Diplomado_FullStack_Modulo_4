const { BaseEntity } = require("typeorm");

class ProductModel extends BaseEntity{
    constructor(_id, name, price, inventory, unit) {
        super();
        this._id = _id;
        this.name = name;
        this.price = price;
        this.inventory = inventory;
        this.unit = unit;
    }
}

module.exports = ProductModel;