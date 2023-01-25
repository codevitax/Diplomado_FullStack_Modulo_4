const express = require("express");
const productRouter = express.Router();// esta funcion es para crear un router en express
const { getAllProducts, addProduct } = require("../controllers/Product");

productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);
productRouter
    .route("/:id")
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            actio: "get a product",
            id: req.params.id
        })
    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a product",
            id: req.params.id
        })
    })
    .delete((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "delete a product",
            id: req.params.id
        })
    })

module.exports = productRouter;