const models = require('../models');


const addOrderItems = async (orderId,ProductId,orderQuantity) => {
    try {
        const entry = await models.Inventory.create({
            orderId,
            ProductId,
            orderQuantity,
        });
        return entry;
    } catch (error) {
        let m = 'Error while adding the record in the OrderItems';
        throw new Error(m);
    }
}

module.exports = addOrderItems;
