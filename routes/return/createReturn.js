const models = require('../../models');
/**
 * @description - function to create returns.
 * @param {req} req 
 * @param {reaponse} res 
 * @param {next} next 
 */
const createReturn = async (req, res, next) => {
    try {
        const orderExists = await models.orderItems.findOne({
            where: {
                orderId: req.body.id,
            }
        });
        if (orderExists) {
            let orderQuantity = orderExists.orderQuantity;
            let returnQuantity = req.body.quantity;
            if (returnQuantity > orderQuantity || returnQuantity <= 0) {
                let m = "The quantity should be valid";
                throw m;
            } else {
                const returnOrder = await models.Return.create({
                    orderId: req.body.id,
                    quantity: returnQuantity,
                    productId: req.body.productId,
                });
                let message = `Return for the orderId: ${returnOrder.orderId} created.`
                res.json({
                    message,
                })
            }
        } else {
            let m = "The order doesn't exist."
            throw m;
        }
    } catch (error) {
        next(error);
    }
}

module.exports = createReturn;