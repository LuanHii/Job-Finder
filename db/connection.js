const Sequelize = require('sequelize');

const sequelize = new Sequelize ({
    dialect: "sqlite",
    storage: "./db/app.db"
}); 


// exporting
module.exports = sequelize;