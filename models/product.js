'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    adminId: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    productDescription: DataTypes.TEXT,
    Quantity: DataTypes.INTEGER,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Inventory,{foreignKey:'productId',sourceKey:'id'});
    models.Inventory.belongsTo(Product,{foreignKey:'productId',targetKey:'id'});
    Product.hasMany(model.Return,{foreignKey:'productId',sourceKey:'id'});
    models.Return.belongsTo(Product,{foreignKey:'productId',targetKey:'id'});
  };
  return Product;
};