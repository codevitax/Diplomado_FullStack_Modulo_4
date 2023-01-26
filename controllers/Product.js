const Product = require("../modelsT/ProductModel");
const getAllProducts = async(req, res) => {
    const products = await Product.findOne();
    res.status(200).json({
        status: "ok",
        data: products,
    });
}

const addProduct = async(req, res) => {
    let newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.unit = req.body.unit;
    newProduct.inventory = req.body.inventory;
    newProduct = await newProduct.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newProduct,
    });
}

module.exports = {
    getAllProducts,
    addProduct,
}