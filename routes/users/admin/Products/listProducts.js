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
};

/**
 * @description: Lists all the products in the products db.
 * @param {Object} reqObj: Request.Query object.
 * @returns: Returns a promise that contains the list of all the products.
 */
const listAll = async (reqObj) => {
    try {
        const products = await models.Product.findAll({
            where: {
                Quantity: {
                    $gt: 0,
                },
            },
        });
        return products;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.list = list;
module.exports.listAll = listAll;
