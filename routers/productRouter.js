const express = require("express");
const productRouter = express.Router();// esta funcion es para crear un router en express

productRouter
    .route("/")
    .get((req, res, next) => {
        res.status(200).json({
            status: "ok",
            action: "get all products"
        });
    })
    .post((req, res, next) => {
        console.log(req.body);
        res.status(200).json({
            status: "ok",
            action: "post all products"
        });
    });

module.exports = productRouter;