const models = require('../../../../models');

// eslint-disable-next-line comma-spacing
async function createProduct(req,res, next) {
    try {
        const product = await models.Product.create({
            productName: req.body.productName,
            userId: req.body.userId,
            salePrice: req.body.salePrice,
            productDescription: req.body.productDescription,
            Quantity: req.body.Quantity,
        });
        const pid = product.id;
        await models.Inventory.create({
            productId: pid,
            userId: req.body.userId,
            quantity: req.body.Quantity,
            salePrice: req.body.salePrice,
        });
        res.json({
            success: true,
            product,
        });
    } catch (error) {
        next(error);
    }
}
module.exports = createProduct;
