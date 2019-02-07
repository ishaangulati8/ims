
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productName: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        salePrice: DataTypes.INTEGER,
        productDescription: DataTypes.TEXT,
        Quantity: DataTypes.INTEGER,
    }, {});
    Product.associate = function (models) {
    // associations can be defined here
    /**
     * Product and Invetory -> One To Many.
     */
        Product.hasMany(models.Inventory, { foreignKey: 'productId', sourceKey: 'id' });
        models.Inventory.belongsTo(Product, { foreignKey: 'productId', targetKey: 'id' });
    };

    Product.isExists = function () {
        Product.findOne({
            where: {
                id: req.body.productId,
            },
        })
    }
    return Product;
};
