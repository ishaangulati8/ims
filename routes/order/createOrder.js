const model = require('../../models/order');
const addOrderItems = require('../../utils/addOrderItems');
const updateProduct = require('../../utils/updateQuantity');
/**
 * @description - create a new order
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */

const createDriver = async (req, res, next) => {
    try {
        const user = await createOrder(req.body.userId, req.body.products);
    } catch (error) {
        next(error);
    }
}

const createOrder = async (userId, products) => {
    try {
        const result = {};
        for (const eachProduct of products) {
            const isProduct = await models.Product.findOne({
                where: {
                    id: eachProduct.productId
                }
            })
            if (isProduct) {
                if (eachProduct.Quantity <= isProduct.Quantity) {
                    const thisOrder = await models.Order.create({
                        userId: eachProduct.userId
                    });
                    const orderItemsCreation = await addOrderItems(thisOrder.orderId, eachProduct.productId, eachProduct.orderQuantity);
                    //const inventoryUpdation= await deleteRecord()
                    const productUpdation = await updateProduct(eachProduct.productId, eachProduct.salePrice, eachProduct.quantity);
                    if (orderItemsCreation && productUpdation) {
                        result[eachProduct.productId] = 'Order succesfully filed!';
                    }
                } else {
                    result[eachProduct.productId] = 'Product Quantity not present in inventory!';
                }
            } else {
                result[eachProduct.productId] = 'Product does not exist!';
            }
        }
    } catch (error) {
        next(error);
    }
}
module.exports.createOrder = createOrder;
module.exports.createDriver = createDriver;
