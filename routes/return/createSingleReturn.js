const models = require('../../models');
const addRecord = require('../../utils/addToInventory');
const updateProduct = require('../../utils/updateProductQuantity');
const returnOrder = require('../../utils/orderReturn');

const createReturn = async (req, res, next) => {
    try {
        const return = await returnHelper(req.body.userId, req.body.returnQuantity,
             req.body.productName, req.body.productId);
    } catch (error) {
        throw error;
    }
}

const returnHelper = async (userId, orderId, returnQuantity, productName, productId) => {
    try {
        const isOrder = await models.Order.findOne({
           include: [{
               model: models.orderItems,
           },
           where: {
               productId,
           },
        ]
            }
        });
        if (isOrder) {
            if (isOrder.orderQuantity>= returnQuantity) {

            } else {
                throw `Invalid return Quantity.`;
            }
        } else {
            throw `Order not found.`;
        }

    } catch (error) {
        throw (error);
    }
}