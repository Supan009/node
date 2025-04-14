const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school", "root", "Supan@6353", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log,  
    port: 3306
});

sequelize.authenticate()
    .then(() => console.log(" MySQL Database Connected"))
    .catch(err => console.error(" MySQL Connection Error: " + err));

module.exports = sequelize;
