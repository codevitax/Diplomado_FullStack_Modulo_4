const express = require("express");
const productRouter = express.Router();// esta funcion es para crear un router en express
const { getAllProducts, addProduct, getProductByID, deleteProductByID, putProductByID } = require("../controllers/Product");
const { login, signup, protect } = require("../controllers/Auth");

productRouter
    .route("/")
    //.all(protect)
    .get(getAllProducts)
    .post(addProduct);

productRouter
    .route("/:id")
    //.all(protect)
    .get(getProductByID)
    .put(putProductByID)
    .delete(deleteProductByID)

module.exports = productRouter;