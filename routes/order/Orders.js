const models = require('../../models');

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @description: Returns a list of orders.
 */
const listOrders = async (req, res, next) => {
    try {
        const orders = await ordersHelper();
        if (orders) {
            res.json({
                orders,
            })
        } else {
            throw `No orders found!`;
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @description: Lists the orders.
 * @returns: Returns a promise containing the list of the orders.
 */
const ordersHelper = async () => {
    try {
        const allOrders = await models.Order.findAll({});
        return allOrders;
    } catch (error) {
        throw (error)
    }
}

module.exports.listOrders = listOrders;
module.exports.ordersHelper = ordersHelper;
