
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Inventories', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        productId: {
            type: Sequelize.INTEGER,
        },
        stockistId: {
            type: Sequelize.INTEGER,
        },
        time: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Inventories'),
};
