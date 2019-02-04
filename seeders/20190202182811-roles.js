'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Roles', [{
<<<<<<< HEAD
    role:'Admin',
    createdAt:'2016-06-22 19:10:25-07',
    updatedAt:'2016-06-23 19:10:25-07',
  },{
    role:'Operator',
    createdAt:'2016-06-22 19:10:25-07',
    updatedAt:'2016-06-23 19:10:25-07',
  },{
    role:'Stockist',
    createdAt:'2016-06-22 19:10:25-07',
    updatedAt:'2016-06-23 19:10:25-07',
=======
     "role":'Admin',
     "createdAt":new Date(),
     "updatedAt":new Date(),
     "id":1,
  },{
    "role":'Operator',
    "createdAt":new Date(),
    "updatedAt":new Date(),
    "id":2,
  },{
    "role":'Stockist',
    "createdAt":new Date(),
    "updatedAt":new Date(),
    "id":3,
>>>>>>> 056cbc502e77d80d5ea68db51f7fcd6af7fe6241
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
     // Example:
      return queryInterface.bulkDelete('Roles', null, {});
    
  }
};
