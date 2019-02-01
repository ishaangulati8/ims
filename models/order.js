'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    models.Product.belongsToMany(Order,{ through:'orderItems',foreignKey:'productId',otherKey:'orderId'});
    Order.belongsToMany(models.Product,{through:'orderItems',foreignKey:'orderId',otherKey:'productId' });

<<<<<<< HEAD
    Order.hasMany(models.Return,{foreignKey:'orderId',sourceKey:'id'});
    Return.belongTo(models.Order,{foreignKey:'orderId',sourceKey:'id'});
=======
    // Order.hasMany(models.Return,{foreignKey:'orderId',sourceKey:'id'});
    // Return.belongTo(models.Order,{foreignKey:'orderId',sourceKey:'id'});

>>>>>>> 13ccc353ffc4e36477b372220be543f8c2fba52e
   
  };
  return Order;
};