const models = require('../../../../models/index');

/**
 * @description - Delete a Product according to the product id.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const deleteProductDriver = async (req, res, next) => {
    try {
        const Product = await deleteProduct(req.params.id);
        if (Product) {
            res.json({
                success: true,
            });
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @description deletes a given product according to the id.
 * @param {Integer} id 
 * @returns a promise.
 */
async function deleteProduct(id) {
    try {
        const product = await models.Product.findOne({
            where: {
                id,
            },
        });
        if (product) {
            await models.Inventory.create({
                productId: product.id,
                userId: product.userId,
                quantity: 0,
                salePrice: product.salePrice,
            });
            await product.destroy();
            return true;
        }
        const m = 'product does not exist!';
        throw m;
    } catch (error) {
        throw error;
    }
}
module.exports.deleteProductDriver = deleteProductDriver;
module.exports.deleteProduct = deleteProduct;
