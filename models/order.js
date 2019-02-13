
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: DataTypes.INTEGER,
    }, {});
    Order.associate = function (models) {
    // associations can be defined here
    /**
     * Product and order -> many to many
     */
        models.Product.belongsToMany(Order, { through: models.orderItems, foriegnKey: 'productId', otherKey: 'orderId' });
        Order.belongsToMany(models.Product, { through: models.orderItems, foreignKey: 'orderId', otherKey: 'productId' });

        /**
     * Order and Return -> one to many
     */
        Order.hasMany(models.Return, { foreignKey: 'orderId', sourceKey: 'id' });
        models.Return.belongsTo(models.Order, { foreignKey: 'orderId', sourceKey: 'id' });
    };
    return Order;
};
