const models = require('../models');

/**
 * @description : Updates an order's return to true.
 * @param {Integer} orderId : Order id for the product.
 * @param {Integer} productId : Product Id for the product.
 */
const updateOrderItems = async (orderId, productId) => {
    try{
        const order = await models.orderItems.findOne({
            where: {
                orderId,
                productId,
            },
        });
        if (order) {
            order.isReturn = true;
            await order.save();
            return order;
        } else {
            throw 'Order Not Found.';
        }
    } catch(error) {
        throw new Error(error);
    }
}

module.exports = updateOrderItems;