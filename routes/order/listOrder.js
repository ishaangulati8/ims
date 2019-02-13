const models = require('../../models');

/**
 * @description - function to list all the orders.
 * @param {requset} req
 * @param {response} res
 * @param {next} next
 */
const listAll = async (req, res, next) => {
    try {
        const allOrders = await listAllOrder();
        if (allOrders) {
            res.json({
                allOrders,
            })
        }
    } catch (error) {
        next(error);
    }
};

/**
 * @description: Finds all the orders.
 * @returns: Returns a promise.
 */
const listAllOrder = async () => {
    try {
        const allOrders = await models.Order.findAll({
            include: [{
                model: models.Product,
                through: {
                    attributes: ['orderId', 'productId', 'orderQuantity'],
                },
            }],
        });
        if (allOrders) {
            return allOrders;
        }
        throw new Error('Please add orders first.')
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.listAll = listAll;
module.exports.listAllOrder = listAllOrder;
