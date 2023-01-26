// Es la configuracion para la conexion 
const typeorm = require("typeorm");

const dataSource = new typeorm.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
        require("./modelsT/Product")
    ],
    synchronize: false,
    logging: false,
});

module.exports = dataSource;