const models = require('../../models');
const addOrderItems = require('../../utils/addOrderItems');
const updateProduct = require('../../utils/updateQuantity');
const addToInventory = require('../../utils/addToInventory');
const createOrder = async (req, res, next) => {
    try {
        const order = await createHelper(req.body.userId, req.body.productId,
            req.body.orderQuantity, req.body.productName);
        if (order) {
            res.json({
                order
            })
        }
    } catch (error) {
        throw error;
    }
}

const createHelper = async (userId = 1, productId, orderQuantity, productName) => {
    try {
        const isProduct = await models.Product.findOne({
            where: {
                id: productId,
            },
        });
        if (isProduct) {
            if (isProduct.productName === productName && isProduct.Quantity >= orderQuantity) {
                const order = await models.Order.create({
                    userId,
                });
                if (order) {
                    const orderItem = await addOrderItems(order.id, productId, orderQuantity, productName);
                    const productUpdate = await updateProduct(productId, orderQuantity, isProduct.salePrice);
                    const inventoryUpdate = await addToInventory(productId, userId, orderQuantity, isProduct.salePrice, false);
                    if (orderItem && productUpdate && inventoryUpdate) {
                        return true;
                    } else {
                        throw 'Error while placing the order.'
                    }
                }
            } else {
                throw ('Order Cannot be Created!.')
            }
        } else {
            throw('Quantity and Name error')
        }
    } catch (error) {
        throw error;
    }
}

module.exports.createOrder = createOrder;
module.exports.createHelper = createHelper;