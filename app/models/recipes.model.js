// const { sequelize } = require(".");
// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        name: {
            type: Sequelize.STRING
          },
          imageUrl: {
              type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          ingredients: {
            type: Sequelize.STRING
          }
    });
    return Recipe;
};