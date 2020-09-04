// const dbConfig = require("../config/db.config");

var fs = require("fs");
var path = require("path");
const Sequelize = require("sequelize");

var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, "..", "config", "config.json"))[env];
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// const sequelize = new Sequelize(dbConfig.USER, dbConfig.PASSWORD,{
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliase: false,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//       }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.recipes = require("./recipes.model.js")(sequelize, Sequelize);
db.shop = require("./shop.model.js")(sequelize, Sequelize);
 
module.exports = db;