const models = require('../../models');
const addRecord = require('../../utils/addToInventory');
const updateProduct = require('../../utils/updateProduct');
const returnOrder = require('../../utils/orderReturn')
/**
 * @description - Driver function to create returns.
 * @param {req} req
 * @param {reaponse} res
 * @param {next} next
 */
const returnDriver = async (req, res, next) => {
    try {
        const returns = await createReturn(req.userId, req.orders);
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
                        model: models.orderItems,
                    },
                ],
                where: {
                    id: userId,
                },
            });
            if (userOrder) {
                const orderProduct = await models.Products.findOne({
                    include: [
                        {
                            model: models.orderItems,
                        },
                    ],
                    where: {
                        id: eachOrder.productId,
                    },
                });
                if (orderProduct) {
                    if (eachOrder.quantity <= orderProduct.quantity) {
                        await models.Return.create({
                            orderId: eachOrder.orderId,
                            quantity: eachOrder.quantity,
                            productId: eachOrder.productId,
                        });
                        const inventoryUpdation = await addRecord(eachOrder.productId, userId, eachOrder.quantity, eachOrder.salePrice);
                        const productUpdation = await updateProduct(eachOrder.productId, eachOrder.salePrice, eachOrder.quantity);
                        const updateOrder = await returnOrder(eachOrder.orderId, eachOrder.productId);
                        if (inventoryUpdation && productUpdation && updateOrder) {
                            result[eachOrder.orderId] = 'Return Successfully filed.'; 
                        }
                    } else {
                        result[eachOrder.orderId] = 'Invalid Return Qunatity.';
                    }
                } else {
                    result[eachOrder.orderId] = 'Invalid Return Product.';
                }
            } else {
                result[eachOrder.orderId] = 'Invalid Access.';
            }
        }
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.createReturn = createReturn;
module.exports.returnDriver = returnDriver;