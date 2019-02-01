'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
    /**
     * Roles and User -> One to Many.
     */
    Roles.hasMany(models.Users,{foreignKey:'role',sourceKey:'id'});
    models.Users.belongsTo(Roles,{foreignKey:'role',targetKey:'id'});
  };
  return Roles;
};