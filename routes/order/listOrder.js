const models = require('../../models');

/**
 * @description - function to list all the orders.
 * @param {requset} req
 * @param {response} res
 * @param {next} next
 */
const listAll = async (req, res, next) => {
    try {
        const allOrders = await models.Orders.findAll({
            include: [{
                model: models.Product,
                through: {
                    attributes: ['orderId', 'productId', 'orderQuantity'],
                },
            }],
        });
    } catch (error) {
        next(error);
    }
};

module.exports = listAll;
