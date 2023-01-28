const Product = require("../models/User");
const catchAsync = require("../utils/catchAsync")


const login = catchAsync(async (req, res) => {
    const products = await Product.findOne();
    res.status(200).json({
        status: "ok",
        message: "estas intentando loguearte",
    });
});

module.exports = {
    login
}