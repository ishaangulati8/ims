const models = require('../models');

const addRecord = async (productId, userId, quantity, salePrice) => {
    try {
        const entry = await models.Inventory.create({
            productId,
            quantity,
            userId,
            salePrice,
        });
        return entry;
    } catch (error) {
        let m = 'Error while adding the record in the Inventory';
        throw new Error(m);
    }
}

module.exports = addRecord;
