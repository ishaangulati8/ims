const models= require('../../models');
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
        if (user) {
            res.status(200).json({
                user,
            });
        }
    } catch (error) {
        next(error);
    }
};

const createOrder = async (userId, products) => {
    try {
        const result = {};
        for (const eachProduct of products) {
            const isProduct = await models.Product.findOne({
                where: {
                    id: eachProduct.productId,
                },
            });
            if (isProduct) {
                if (eachProduct.Quantity <= isProduct.Quantity) {
                    const thisOrder = await models.Order.create({
                        userId,
                    });
                    const orderItemsCreation = await addOrderItems(thisOrder.id, eachProduct.productId, eachProduct.Quantity);
                    // const inventoryUpdation= await deleteRecord()
                    const productUpdation = await updateProduct(eachProduct.productId, eachProduct.Quantity, eachProduct.salePrice);
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
        return result;
    } catch (error) {
        throw (error);
    }
};
module.exports.createOrder = createOrder;
module.exports.createDriver = createDriver;
