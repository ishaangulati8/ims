
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    time: {
<<<<<<< HEAD
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
=======
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
>>>>>>> 5497d4d69418c1c78cd6e3428af43ee76cd64729
    },
    quantity: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here

    };
    return Inventory;
};
