const models = require('../../models');
const addOrderItems = require('../../utils/addOrderItems');
const updateProduct = require('../../utils/updateQuantity');
const addToInventory = require('../../utils/addToInventory');
const createOrder = async (req, res, next) => {
    try {
        const order = await createHelper(req.body.userId, req.body.orderQuantity, req.body.productName);
        if (order) {
            res.json({
                order
            })
        }
    } catch (error) {
        next( error);
    }
}

const createHelper = async (userId = 1, orderQuantity, productName) => {
    try {
        const isProduct = await models.Product.findOne({
            where: {
                productName,
            },
        });
        if (isProduct) {
            if (isProduct.Quantity >= orderQuantity && orderQuantity > 0) {
                const order = await models.Order.create({
                    userId,
                });
                if (order) {
                    const orderItem = await addOrderItems(order.id, isProduct.id, orderQuantity, productName);
                    const productUpdate = await updateProduct(isProduct.id, orderQuantity, isProduct.salePrice);
                    const inventoryUpdate = await addToInventory(isProduct.id, userId, orderQuantity, isProduct.salePrice, false);
                    if (orderItem && productUpdate && inventoryUpdate) {
                        return true;
                    } else {
                        throw 'Error while placing the order.';
                    }
                }
            } else {
                throw 'Order Cannot be Created!.';
            }
        } else {
            throw 'Quantity and Name error';
        }
    } catch (error) {
        throw error;
    }
}

module.exports.createOrder = createOrder;
module.exports.createHelper = createHelper;