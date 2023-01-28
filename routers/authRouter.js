const express = require("express");
const authRouter = express.Router();// esta funcion es para crear un router en express
const { login } = require("../controllers/Auth");

authRouter
    .route("/login")
    .post(login);
module.exports = authRouter;