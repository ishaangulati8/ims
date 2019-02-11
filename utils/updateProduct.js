const models = require('../models');
/**
 * @description : Update the product with given productId.
 * @returns: Returns a promise.
 * @param {*} productId 
 * @param {*} quantity 
 * @param {*} salePrice 
 */
const updateProduct = async (productId, quantity, salePrice, productName, description) => {
    try {
        const findProduct = await models.Product.findOne({
            where: {
                id: productId,
            },
        });
        if (findProduct) {
            findProduct.productName = productName;
            findProduct.Quantity += quantity;
            findProduct.salePrice = salePrice;
            findProduct.productDescription = description;
        }
        await findProduct.save();
        
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = updateProduct;