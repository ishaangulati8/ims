'use strict';
module.exports = (sequelize, DataTypes) => {
  const Return = sequelize.define('Return', {
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Return.associate = function(models) {
    // associations can be defined here
  };
  return Return;
};