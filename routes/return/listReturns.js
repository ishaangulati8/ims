const models = require('../../models');
/**
 * @description: Driver function to list all the returns.
 * @param {req} req 
 * @param {res} res 
 * @param {next} next 
 */
const driverList = async (req, res, next) => {
    try {
        const reqObj = {...req.query };
        const returns = await listAll(reqObj);
        if (returns) {
            res.status(200).json({
                returns,
            });
        } else {
            let m = 'No returms Exist.'
            throw m;
        }
    } catch (error) {
        next(error);
    }
}
/**
 * @description: Takes in an object and returns a promise with all the returns.
 * @param {object} reqObj
 * @returns: Returns a promise containig all the return orders.
 */
const listAll = async (reqObj) => {
    try {
        const allrecords = await models.Return.findAll({
            order: ['orderId', 'createdAt'],
        });
        return allrecords;

    } catch (error) {
        throw error;
    }
}

module.exports.driverList = driverList;
module.exports.listAll = listAll;

