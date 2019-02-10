const models = require('../models');

/**
 * @description: Updates a product in the product model.
 * @param {int} productId 
 * @param {int} quantity 
 */
const orderProduct = async (productId, quantity, salePrice) => {
    try {
        const product = await models.Product.findOne({
            where: {
                id: productId,
            },      
        });
        if (product) {
            if (quantity === 0) {
                product.Quantity = 0;
                await product.save();
                return product;
            } else if (quantity <= product.Quantity) {
                product.Quantity += quantity;
                product.salePrice = salePrice;
                product.save();
                return product;
            } else {
                const error = `Invalid Quantity.`;
                throw new Error(error);
            }
        } else {
            throw new Error('Invalid ProductId.')
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.orderProduct = orderProduct;
