const mongoose = require("mongoose");
const { sequelize, Product, Purchase } = require("./modelsS")
const dataSource = require("./dataSource");
const app = require("./app");

process.on("uncaughtException", (err) => {
    console.log("uncaughtException", err);
    console.log("shutting down");
    process.exit(1);
})


mongoose.set('strictQuery', false);
// MOONGOSE CONNECTION
mongoose.connect(process.env.DB_URL, {}).then(async (con) => {
    console.log("connected to mongo");
}).catch((err) => {
    console.log("error");
})
// TYPEORM CONNECTION

// dataSource
//     .initialize()
//     .then( async () => {
//         console.log("connected to mysql from typeorm");
//     })
//     .catch((err) => {
//         console.log(err);
//     });


//SEQUELIZE CONNECTION
// sequelize
//     .authenticate()
//     .then( async () => {
//         console.log("connected to mysql from sequelize");
        // const prods = await Product.findAll({include: {model: Purchase, as: "purchases"}});
        // console.log(prods);
        // Purchase.sync({force:true});
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


    const server = app.listen(process.env.PORT, () => {
        console.log(`App running on port ${process.env.PORT}`);
    });

    process.on("unhandledRejection", (err) => {
        console.log("unhandledRejection", err);
        console.log("shutting down");
        server.close(() => {
            process.exit(1);
        })
    });
    
    