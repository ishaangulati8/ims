'use strict';
module.exports = (sequelize, DataTypes) => {
  const Return = sequelize.define('Return', {
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
  }, {});
  Return.associate = function(models) {
    // associations can be defined here
  };
  return Return;
};