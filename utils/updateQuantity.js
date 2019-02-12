const models = require('../models');
/**
 * @description : Update the product with given productId when the order is placed.
 * @returns: Returns a promise.
 * @param {Integer} productId 
 * @param {Integer} quantity 
 * @param {Integer} salePrice 
 */
const updateProduct = async (productId, quantity, salePrice) => {
    try {
        const findProduct = await models.Product.findOne({
            where: {
                id: productId,
            },
        });
        if (findProduct) {
            findProduct.Quantity -= quantity;
            findProduct.salePrice = salePrice;
        }
        await findProduct.save();
        return 'successful';
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = updateProduct;