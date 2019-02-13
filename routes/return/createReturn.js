const models = require('../../models');
const addRecord = require('../../utils/addToInventory');
const updateProduct = require('../../utils/updateProductQuantity');
const returnOrder = require('../../utils/orderReturn')
/**
 * @description - Driver function to create returns.
 * @param {req} req
 * @param {reaponse} res
 * @param {next} next
 */
const returnDriver = async (req, res, next) => {
    try {
        const returns = await createReturn(req.body.userId, req.body.orders);
        res.json({
            returns,
        });
    } catch (error) {
        next(error);
    }
};
/**
 *@description - Function creates a return.
 * @param {*userId} userId
 * @param {array of objects of returns} orders
 */
const createReturn = async (userId, orders) => {
    try {
        const result = {};
        for (const eachOrder of orders) {
            const userOrder = await models.Order.findOne({
                include: [
                    {
                        model: models.Product,
                        through: {
                            attributes: ['orderQuantity', 'isReturn'],
                        },
                        where: {
                            id: eachOrder.productId,
                        }
                    },
                ],
                where: {
                    id: eachOrder.orderId,
                },
            });
            if (userOrder) {
                if (eachOrder.quantity <= userOrder.Products[0].orderItems.orderQuantity && !userOrder.Products[0].orderItems.isReturn ){//&& !userOrder.Products[0].orderItems.isReturn){
                    await models.Return.create({
                        orderId: eachOrder.orderId,
                        quantity: eachOrder.quantity,
                        productId: eachOrder.productId,
                    });
                    const inventoryUpdation = await addRecord(eachOrder.productId, userId, eachOrder.quantity, eachOrder.salePrice, true);
                    const productUpdation = await updateProduct(eachOrder.productId, eachOrder.quantity, eachOrder.salePrice);
                    const updateOrder = await returnOrder(eachOrder.orderId, eachOrder.productId);
                    if (inventoryUpdation && productUpdation && updateOrder) {
                        result[eachOrder.orderId] = 'Return Successfully filed.';
                    }
                } else {
                    result[eachOrder.orderId] = 'Invalid Return Qunatity or Return is already filled.';
                }
            } else {
                result[eachOrder.orderId] = 'Invalid Access, the order is not associated with the user.';
            }
        }
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.createReturn = createReturn;
module.exports.returnDriver = returnDriver;