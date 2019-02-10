const models = require('../models');

const addRecord = async (productId, userId, quantity, salePrice, isReturn) => {
    try {
        const entry = await models.Inventory.create({
            productId,
            quantity,
            userId,
            salePrice,
            isReturn,
        });
        return entry;
    } catch (error) {
        const m = 'Error while adding the record in the Inventory';
        throw new Error(m);
    }
}

module.exports = addRecord;
