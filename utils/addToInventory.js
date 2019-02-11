const models = require('../models');
/**
 * 
 * @param {int} productId: Product id.
 * @param {int} userId: User id.
 * @param {int} quantity: Quantity to update.
 * @param {int} salePrice: Sale Price of the product.
 * @param {Boolean} isReturn: Is product returned.
 */
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
