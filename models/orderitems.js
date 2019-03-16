
module.exports = (sequelize, DataTypes) => {
    const orderItems = sequelize.define('orderItems', {
        orderId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        orderQuantity: DataTypes.INTEGER,
        isReturn : {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        productName: DataTypes.STRING,
    }, {});
    orderItems.associate = function (models) {
    // associations can be defined here
    // User.belongsTo(Company, {foreignKey: 'fk_companyname', targetKey: 'name'});
    // orderItems.belongsTo(models.Order,{foreignKey: 'orderId', targetKey: 'id'});
    };
    return orderItems;
};
