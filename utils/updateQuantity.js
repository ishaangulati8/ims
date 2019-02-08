const models = require('../models');
/**
 * @description : Update the product with given productId.
 * @returns: Returns a promise.
 * @param {*} productId 
 * @param {*} quantity 
 * @param {*} salePrice 
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
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = updateProduct;