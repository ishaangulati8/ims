const models = require('../../models');

/**
 * @description : Driver function for listing the inventory.
 * @param {req} req : Request
 * @param {res} res :Result
 * @param {next} next :next middleware.
 * 
 */
const driverList = async (req, res, next) => {
    try {
        const allRecords = await listInventory(req);
        if (allRecords) {
            res.json({
                allRecords,
            });
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @description: Lists all the enteries in the inventory.
 * @param {req} req : Request
 * @returns: Returns a promise containing all the enteries.
 */
const listInventory = async (req) => {
    try {
        const records = await models.Inventory.findAll({
            productId: req.query.productId,
            userId: req.query.userId,
            time: req.query.time,
            quantity: req.query.quantity,
            salePrice: req.query.salePrice,
            isReturn: req.query.isReturn,
        });
        if (records) {
            return records;
        } 
        const m = 'Invetory is empty';
        throw new Error(m);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.listInventory = listInventory;

module.exports.driverList = driverList;
