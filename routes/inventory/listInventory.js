const models = require('../../models');

const listInventory = async (req, res, next) => {
    try {
        const records = await models.findAll({
            productId: req.query.productId,
            userId: req.query.userId,
            time: req.query.time,
            quantity: req.query.quantity,
            salePrice: req.query.salePrice,
        });
        if (records) {
            return res.json({
                records,
            });
        } 
        const m = 'Invetory is empty';
        throw m;
    } catch (error) {
        next(error);
    }
};

module.exports = listInventory;
