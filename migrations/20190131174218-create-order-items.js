
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('orderItems', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        orderId: {
            type: Sequelize.INTEGER,
        },
        productId: {
            type: Sequelize.INTEGER,
        },
        orderQuantity: {
            type: Sequelize.INTEGER,
        },
        isReturn: {
            type: Sequelize.BOOLEAN,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        productName: {
            type: Sequelize.STRING,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('orderItems'),
};
