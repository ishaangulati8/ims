const models = require('../../models');

const listItems = async (req, res, next) => {
    try {
        const orders = await listHelper(req.query.id);
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
