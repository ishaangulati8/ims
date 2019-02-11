const models = require('../models');

const updateOrderItems = async (orderId, producId) => {
    try{
        const order = models.OrderItems.findOne({
            where: {
                orderId,
                producId,
            }
        });
        if (order) {
            order.isReturn = true;
            await order.save();
            return order;
        } else {
            throw new Error('Order Not Found.');
        }
    } catch(error) {
        throw new Error(error);
    }
}