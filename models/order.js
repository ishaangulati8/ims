'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    /**
     * Product and order -> many to many
     */
    models.Product.belongsToMany(Order,{ through:'orderItems',foreignKey:'productId',otherKey:'orderId'});
    Order.belongsToMany(models.Product,{through:'orderItems',foreignKey:'orderId',otherKey:'productId' });

    /**
     * Order and Return -> one to many
     */
    Order.hasMany(models.Return,{foreignKey:'orderId',sourceKey:'id'});
    Return.belongTo(models.Order,{foreignKey:'orderId',sourceKey:'id'});
   
  };
  return Order;
};