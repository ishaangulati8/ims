const models = require('../../../../models');

/**
 * @description - list all the products.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const list = async (req, res, next) => {
    try {
        const reqObj = { ...req.query };
        // reqObj.productName = req.query.productName;
        // reqObj.salePrice = req.query.salePrice;
        // reqObj.productDescription = req.query.productDescription;
        // req.Quantity = req.query.Quantity;
        const products = await listAll(reqObj);
        if (products) {
            res.status(200).json({
                products,
            });
        } else {
            const m = 'Products do not exist';
            throw m;
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @description: Lists all the products in the products db.
 * @param {obj} reqObj: Request.Query object.
 * @returns: Returns a promise that contains the list of all the products.
 */
const listAll = async (reqObj) => {
    try {
        const products = await models.Product.findAll({
            productName: reqObj.productName,
            salePrice: reqObj.salePrice,
            productDescription: reqObj.productDescription,
            quantity: reqObj.Quantity,
        });
        return products;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.list = list;
module.exports.listAll = listAll;


