
module.exports = (sequelize, DataTypes) => {
    const orderItems = sequelize.define('orderItems', {
        orderId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        orderQuantity: DataTypes.INTEGER,
        isReturn : {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    orderItems.associate = function (models) {
    // associations can be defined here
    };
    return orderItems;
};
