const models = require('../../../../models');

/**
 * @description - list all the products.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
const list  = async (req, res, next) => {
    try {
        const products = await models.Product.findAll({
            productName: req.query.productName,
            salePrice: req.query.salePrice,
            productDescription: req.query.productDescription,
            quantity: req.query.Quantity,
        });
        if (products) {
            res.json({
                products,
            });
        } else {
            const m = 'No products available. Please add some.';
            throw m;
        }
    } catch (error) {
        next(error);
    }
}

module.exports = list;
