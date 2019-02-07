const models = require('../../../../models');
/**
 * @description - update an existing product.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const productExists = models.Product.findOne({
            where: {
                id,
            },
        });
        if (productExists) {
            productExists.productName = req.body.productName;
            productExists.userId = req.body.userId;
            productExists.salePrice = req.body.salePrice;
            productExists.productDescription = req.body.productDescription;
            productExists.Quantity = req.body.Quantity;
            await productExists.save();
            const m = `${productExists.productName} updated`;
            await models.Inventory.create({
                productId: id,
                userId: req.body.userId,
                quantity: req.body.Quantity,
                salePrice: req.body.salePrice,
            });
            res.json({
                m,
            });
        } else {
            const m = 'Product not found.Enter a valid product id.';
            throw m;
        }
    } catch (error) {
        next(error);
    }
};

module.exports = update;
