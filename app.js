const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routers/productRouter");
const authRouter = require("./routers/authRouter.js");
const userRouter = require("./routers/userRouter");
const app = express();
app.use(express.json());// req => body
app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use("/api/v1/product/", productRouter);
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/users/", userRouter)

app.all("*", (req, res, next) => {
    throw new Error('route not found');
});

app.use((err, req, res, next) => {
    res.status(400).json({
        status: "error",
        message: err.message
    });
});
module.exports = app;