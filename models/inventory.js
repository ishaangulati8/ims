'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    productId: DataTypes.INTEGER,
    stockistId: DataTypes.INTEGER,
    time: DataTypes.DATE,
    quantity: DataTypes.INTEGER
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here
  };
  return Inventory;
};