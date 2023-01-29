const Users = require("../models/User");
const catchAsync = require("../utils/catchAsync")
const crypto = require("crypto");


const getAllUsers = catchAsync(async (req, res) => {
    const users = await Users.find();
    res.status(200).json({
        status: "ok",
        data: users,
    });
});

const addUser = catchAsync(async (req, res) => {
    let { email, password, firstName, lastName } = req.body;
    if(!email || !password || !firstName || !lastName) {
        throw new Error("Please provide complete information")
    }

    let user = new Users();
    user.email = email;
    user.password = crypto.createHash("sha256").update(password).digest("hex");
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();

    res.status(200).json({
        status: "ok",
        message: "User created"
    });
});

const getUserByID = catchAsync(async (req, res) => {
    const userByID = await Users.findById(req.body.id);
    res.status(200).json({
        status: "ok",
        data: userByID
    });
});

const deleteUserByID = catchAsync(async (req, res) => {
    let users = await Users.findByIdAndDelete(req.body.id);
    res.status(200).json({
        status: "ok",
        data: users 
    });
});

const putUserByID = catchAsync(async (req, res) => {
    let users = await Users.findByIdAndUpdate(req.body.id, {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    res.status(200).json({
        status: "ok",
        data: users
    });
});

module.exports = {
    getAllUsers,
    addUser,
    getUserByID,
    deleteUserByID,
    putUserByID
}