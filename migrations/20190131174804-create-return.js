
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Returns', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        orderId: {
            type: Sequelize.INTEGER,
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Returns'),
};
