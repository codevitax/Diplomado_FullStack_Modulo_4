const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    //guardar en los logs la peticion
    next();
});

app.get("/api/test", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        peticion: "GET",
        ruta: "/api/test"
    });
});

app.get("/api/test2", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        peticion: "GET",
        ruta: "/api/test"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
});