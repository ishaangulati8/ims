const models = require('../models');

/**
 * @description: Adds the entry to the order table.
 * @param {Integer} orderId 
 * @param {Integer} productId 
 * @param {Integer} orderQuantity 
 * @returns: Retirns a promise of order.
 */
const addOrderItems = async (orderId, productId, orderQuantity, productName) => {
    try {
        const entry = await models.orderItems.create({
            orderId,
            productId,
            orderQuantity,
            productName,
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
