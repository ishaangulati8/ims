

module.exports = {
    up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        queryInterface.bulkInsert('Roles', [{
            role: 'Admin',
            createdAt: new Date(),
            updatedAt: new Date(),
            'id': 1,
        }, {
            role: 'Operator',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            id: 2,
        }, {
            'role': 'Stockist',
            createdAt: new Date(),
            'updatedAt': new Date(),
            id: 3,
        }], {}),  

    down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    // Example:
        queryInterface.bulkDelete('Roles', null, {})

    ,
};
