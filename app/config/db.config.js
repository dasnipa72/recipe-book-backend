const Sequelize = require("sequelize");
const config = require("./config.json")[process.env.NODE_ENV];
module.exports = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);


// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "nipa",
//     DB: "react-database",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };