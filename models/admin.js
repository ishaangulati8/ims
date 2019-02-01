'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    adminName: DataTypes.STRING,
    adminPassword: DataTypes.STRING
  }, {});
   Admin.beforeCreate( async(admin,options) => {
    try{
      if (admin.adminPassword) {
        const hashPassword = await bcrypt.hash(admin.adminPassword,10);
        admin.adminPassword = hashPassword;
      }
    } catch(error){
      throw new Error(error);
    }
  })
  Admin.associate = function(models) {
    // associations can be defined here
  
  };
  return Admin;
};