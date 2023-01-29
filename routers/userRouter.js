const express = require("express");
const userRouter = express.Router();// esta funcion es para crear un router en express
const { getAllUsers, addUser, getUserByID, deleteUserByID, putUserByID } = require("../controllers/Users");
const { login, signup, protect } = require("../controllers/Auth");


userRouter
    .route("/")
    //.all(protect)
    .get(getAllUsers)
    .post(addUser);

userRouter
    .route("/:id")
    //.all(protect)
    .get(getUserByID)
    .put(putUserByID)
    .delete(deleteUserByID)

module.exports = userRouter;