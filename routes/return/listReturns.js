const models = require('../../models');

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

const listAll = async (reqObj) => {
    try {
        const allrecords = await models.Inventory.findAll({
            orderId: reqObj.orderId,
            quantity: reqObj.quantity,
            productId: reqObj.productId,
            date: reqObj.date,
        });
        return allrecords;

    } catch (error) {
        throw new Error(error);
    }
}

module.exports.driverList = driverList;
module.exports.listAll = listAll;

