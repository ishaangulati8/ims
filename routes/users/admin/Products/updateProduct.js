const models = require('../../../../models');
const updateInventory = require('../../../../')
/**
 * @description - update an existing product.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const update = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const productName = req.body.productName;
        const userId = req.body.userId;
        const salePrice = req.body.salePrice;
        const productDescription = req.body.productDescription;
        const Quantity = req.body.Quantity;
        const product = updateProducts(productId, productName, userId, salePrice, productDescription, Quantity);
        if (product) {
            res.status(200).json({
                product,
            });
        }
    } catch (error) {
        next(error);
    }
};

/**
 * 
 * @param {Integer} productId 
 * @param {String} productName 
 * @param {Integer} userId 
 * @param {Integer} salePrice 
 * @param {Text} productDescription 
 * @param {Integer} Quantity 
 */
const updateProducts = async (productId, productName, userId, salePrice, productDescription, Quantity) => {
    try {
        const productExists = await models.Product.findOne({
            where: {
                id: productId,
            },
        });
        if (productExists) {
            productExists.productName = productName;
            productExists.userId = userId;
            productExists.salePrice = salePrice;
            productExists.productDescription = productDescription;
            productExists.Quantity = Quantity;
            const updated = await productExists.save();
            const m = `${productExists.productName} updated`;
            const updatedInventory = await updateInventory(productId, userId, Quantity, salePrice, false);
            if (updated && updatedInventory) {
                return updated;
            }
            throw new Error('Updation failed.');
        }
    } catch (error) {
        throw new Error(error);
    }
}
module.exports.update = update;
module.exports.updateProducts = updateProducts;
