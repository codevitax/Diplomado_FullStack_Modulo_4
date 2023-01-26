const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Product = require("./models/Product")
const productRouter = require("./routers/productRouter");
const dataSource = require("./dataSource");
const app = express();
app.use(express.json());// req => body
app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use("/api/v1/product/", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
});

mongoose.set('strictQuery', false);
// MOONGOSE CONNECTION
mongoose.connect(process.env.DB_URL, {}).then(async (con) => {
    console.log("connected to mongo");
}).catch((err) => {
    console.log("error");
})
// TYPEORM CONNECTION

dataSource
    .initialize()
    .then(() => {
        console.log("connected to mysql from typeorm")
    })
    .catch((err) => {
        console.log(err);
    })