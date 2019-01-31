'use strict';
module.exports = (sequelize, DataTypes) => {
  const productAvailability = sequelize.define('ProductAvailability', {
    productKey: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  productAvailability.associate = function(models) {
    // associations can be defined here
  };
  return productAvailability;
};