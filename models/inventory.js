
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    quantity: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here

    };
    return Inventory;
};
