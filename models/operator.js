'use strict';
module.exports = (sequelize, DataTypes) => {
  const operator = sequelize.define('Operator', {
    adminId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  Operator.beforeCreate( async(operator,options) => {
    try{
      if (operator.password) {
        const hashPassword = await bcrypt.hash(operator.password,10);
        operator.password = hashPassword;
      }
    } catch(error){
      throw new Error(error);
    }
  })
  operator.associate = function(models) {
    // associations can be defined here
    Operator.hasMany(models.Order,{foreignKey:'operatorId',sourceKey:'id'});
    models.Order.belongTo(Operator,{foreignKey:'operatorId',sourceKey:'id'});
  };
  return operator;
};