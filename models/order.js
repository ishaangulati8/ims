'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    models.Product.belongsToMany(Order,{ through:'orderItems',foreignKey:'productId',otherKey:'orderId'});
    Order.belongsToMany(models.Product,{through:'orderItems',foreignKey:'orderId',otherKey:'productId' });

    Order.hasMany(models.Return,{foreignKey:'orderId',sourceKey:'id'});
    Return.belongTo(models.Order,{foreignKey:'orderId',sourceKey:'id'});
<<<<<<< HEAD

=======
>>>>>>> b10b22dba5038e9cb8220f7682c2e36e033cd6b2
   
  };
  return Order;
};