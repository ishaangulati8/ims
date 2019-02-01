'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stockist = sequelize.define('Stockist', {
    adminId: DataTypes.INTEGER,
    stockistName: DataTypes.STRING,
    stockistPassword: DataTypes.STRING
  }, {});
  Stockist.associate = function(models) {
    // associations can be defined here
    Stockist.hasMany(models.Inventory,{foreignkey:'stockistId',sourceKey:'id'});
    models.Inventory.belongTo(Stockist,{foreignKey:'stockistId',targetKey:'id'});
  };
  return Stockist;
};