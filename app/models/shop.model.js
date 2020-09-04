module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
        name: {
            type: Sequelize.STRING
          },
        amount: {
            type: Sequelize.STRING
        },
        });
    return Shop;
};