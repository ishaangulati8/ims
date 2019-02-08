
module.exports = {
    up: (queryInterface, Sequelize) => (
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
            "userName": 'admin',
            "password": 'admin',
            "role": 1,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "id": 1,
        }]) 
    ),

    down: (queryInterface, Sequelize) => (
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
        queryInterface.bulkDelete('model.Users', null, {}),

};
