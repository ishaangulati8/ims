
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    timeAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    quantity: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    isReturn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here

    };
    return Inventory;
};
