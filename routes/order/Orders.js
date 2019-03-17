const models = require('../../models');

const listOrders = async (req, res, next) => {
    try {
        const orders = await ordersHelper();
        if (orders) {
            res.json({
                order,
            })
        } else {
            throw `No orders found!`;
        }
    } catch (error) {
        next(error);
    }
}

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
