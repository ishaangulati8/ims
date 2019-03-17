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
            });
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
        const allOrders = await models.orderItems.findAll({
            include: [{
                model: models.Order,
                order: ['orderId', 'createdAt'],
                required: true,
            }],
        
        });
        if (allOrders) {
            return allOrders;
        }
        throw new Error('Please add orders first.');
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.listAll = listAll;
module.exports.listAllOrder = listAllOrder;
