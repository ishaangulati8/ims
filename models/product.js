'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    adminId: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    productDescription: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};