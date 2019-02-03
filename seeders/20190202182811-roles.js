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
     "role":'Admin',
     "createdAt":'2016-06-22 19:10:25-07',
     "updatedAt":'2016-06-23 19:10:25-07',
     "id":1,
  },{
    "role":'Operator',
    "createdAt":'2016-06-22 19:10:25-07',
    "updatedAt":'2016-06-23 19:10:25-07',
    "id":2,
  },{
    "role":'Stockist',
    "createdAt":'2016-06-22 19:10:25-07',
    "updatedAt":'2016-06-23 19:10:25-07',
    "id":3,
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
