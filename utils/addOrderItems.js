const models = require('../models');


const addOrderItems = async (orderId, productId, orderQuantity) => {
    try {
        const entry = await models.orderItems.create({
            orderId,
            productId,
            orderQuantity,
        });
        if (entry) {
            return entry;
        }
    } catch (error) {
        let m = 'Error while adding the record in the OrderItems';
        throw new Error(m);
    }
}

module.exports = addOrderItems;
