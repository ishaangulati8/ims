'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    productDescription: DataTypes.TEXT,
    Quantity: DataTypes.INTEGER,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};