'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Stockist = sequelize.define('Stockist', {
    adminId: DataTypes.INTEGER,
    stockistName: DataTypes.STRING,
    stockistPassword: DataTypes.STRING
  }, {});
  Stockist.beforeCreate( async(stockist,options) => {
    try{
      if (sockist.stockistPassword) {
        const hashPassword = await bcrypt.hash(stockist.stockistPassword,10);
        stockist.stockistPassword = hashPassword;
      }
    } catch(error){
      throw new Error(error);
    }
  });
  Stockist.associate = function(models) {
    // associations can be defined here
    Stockist.hasMany(models.Inventory,{foreignkey:'stockistId',sourceKey:'id'});
    models.Inventory.belongTo(Stockist,{foreignKey:'stockistId',targetKey:'id'});
  };
  return Stockist;
};