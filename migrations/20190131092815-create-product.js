
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        productName: {
            type: Sequelize.STRING,
        },
        Quantity: {
            type: Sequelize.INTEGER,
        },
        userId: {
            type: Sequelize.INTEGER,
        },
        salePrice: {
            type: Sequelize.INTEGER,
        },
        productDescription: {
            type: Sequelize.TEXT,
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Products'),
};
