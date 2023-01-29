const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync")


const getAllProducts = catchAsync(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        status: "ok",
        data: products,
    });
});

const addProduct = catchAsync(async (req, res) => {
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
});

const getProductByID = catchAsync(async (req, res) => {
    const productByID = await Product.findOne(req.body.id);
    res.status(200).json({
        status: "ok",
        data: productByID
    });
});

const deleteProductByID = catchAsync(async (req, res) => {
    let products = await Product.findByIdAndDelete(req.body.id);
    // products = Product();
    res.status(200).json({
        status: "ok",
        data: products 
    });
});

const putProductByID = catchAsync(async (req, res) => {
    let products = await Product.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        price: req.body.price,
        unit: req.body.unit,
        inventory: req.body.inventory
    })
    res.status(200).json({
        status: "ok",
        data: products
    });
});

module.exports = {
    getAllProducts,
    addProduct,
    getProductByID,
    deleteProductByID,
    putProductByID
}