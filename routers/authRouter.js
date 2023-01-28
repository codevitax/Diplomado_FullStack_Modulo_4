const express = require("express");
const authRouter = express.Router();// esta funcion es para crear un router en express
const { login, signup } = require("../controllers/Auth");

authRouter
    .route("/login")
    .post(login);

authRouter
    .route("/signup")
    .post(signup);
module.exports = authRouter;