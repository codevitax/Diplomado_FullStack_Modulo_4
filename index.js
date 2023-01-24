const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
    res.status(200).json({
        peticion: "GET",
        ruta: "/api/test"
    });
});


app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
});