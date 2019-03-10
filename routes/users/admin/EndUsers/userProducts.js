/* eslint-disable no-throw-literal */
/* eslint-disable no-else-return */
const models = require('../../../../models');

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @returns: Returns a promise with products associated with the user.
 */
const userProducts = async (req, res, next) => {
    try {
        const products = await listAll(...req);
        if (products) {
            return res.json({
                products,
            });
        } else {
            throw 'No products Associated with the user';
        }
    } catch (error) {
        next(error);
    }
}
/**
 * 
 * @param {request} reqObj
 * @returns:Returns a promise with products associated with the user. 
 */
const listAll = async (reqObj) => {
    try {
        // eslint-disable-next-line prefer-destructuring
        const userId = reqObj.query.userId;
        const user = await models.User.findOne({
            where: {
                id: userId,

            }
        });
        if (user) {
            const orders = models.orderItems.findAll({
                where: {
                    userId: userId,
                }
            });
            if (orders) {
                return orders;
            } else {
                throw 'No products Associated with the user ';
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.userProducts = userProducts;
module.exports.listAll = listAll;