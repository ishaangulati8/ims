const models = require('../../models');
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @description: Returns the products associated with an order.
 */
const listItems = async (req, res, next) => {
    try {
        const orders = await listHelper(req.params.id);
        if (orders) {
            res.json({
                orders,
            });
        } else {
            const m = 'No order found.';
            throw m;
        }
    } catch (error) {
        next(error);
    }
};
/**
 * 
 * @param {Integer} orderId 
 * @description: Helper function for listing the orders.
 * @returns: Promise containing the list of products.
 */
const listHelper = async (orderId) => {
    try {
        const isOrder = await models.Order.findOne({
            where: {
                id: orderId,
            },
        });
        if (isOrder) {
            const orderItems = await models.orderItems.findAll({
                where: {
                    orderId,
                },
            });
            return orderItems;
        }
        const m = "Given order doesn't exist.";
        throw m;
    } catch (error) {
        throw error;
    }
};

module.exports.listItems = listItems;
module.exports.listHelper = listHelper;
