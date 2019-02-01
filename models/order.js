'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    operatorId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    models.Product.belongsToMany(Order,{ through:'orderItems',foreignKey:'productId',otherKey:'orderId'});
    Order.belongsToMany(models.Product,{through:'orderItems',foreignKey:'orderId',otherKey:'productId' });

    Order.hasMany(models.Return,{foreignKey:'orderId',sourceKey:'id'});
    Return.belongTo(models.Order,{foreignKey:'orderId',sourceKey:'id'});
   
  };
  return Order;
};