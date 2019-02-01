'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    /**
     * User and Inventory -> one to Many
     */
    Users.hasMany(models.Inventory,{foreignKey:'userId',sourceKey:'id'});
    models.Inventory.belongsTo(User,{foreignKey:'userId',sourceKey:'id'});\
    /**
     * User and Product -> one to many
     */
    User.hasMany(model.Product,{foreignKey:'userId',sourceKey:'id'});
    models.Product.belongsTo(User,{foreignKey:'userId',sourceKey:id});
  };
  return Users;
};