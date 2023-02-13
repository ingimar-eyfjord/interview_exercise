const { Sequelize } = require("sequelize");
require("dotenv").config();
const db = {};

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.messages = require("./messages.model.js")(sequelize, Sequelize);
sequelize.sync({ alter: true});
module.exports = db;
