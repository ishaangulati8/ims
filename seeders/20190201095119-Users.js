const bcrypt = require('bcrypt');

module.exports = {
    up: queryInterface => (
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        queryInterface.bulkInsert('Users', [{
            userName: 'admin',
            password: bcrypt.hashSync('admin', 10),
            role: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            id: 1,
        }])),
    down: queryInterface => (
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
        queryInterface.bulkDelete('Users', null, {})),

};
