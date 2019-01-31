'use strict';
module.exports = (sequelize, DataTypes) => {
  const operator = sequelize.define('Operator', {
    adminId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  operator.associate = function(models) {
    // associations can be defined here
  };
  return operator;
};