const models = require('../../models');
const addOrderItems = require('../../utils/addOrderItems');
const updateProduct = require('../../utils/updateQuantity');
const addToInventory = require('../../utils/addToInventory');
const lodash = require('lodash');
/**
 * @description - create a new order
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const createDriver = async (req, res, next) => {
    try {
        const order = await createOrder(req.body.userId, req.body.products);
        if (order) {
            res.status(200).json({
                order,
            });
        }
    } catch (error) {
        next(error);
    }
};

/**
 * @description Function to create a new order
 * @param {Integer} userId 
 * @param {Array of Objects of products} products 
 * @returns returns a promise
 */
const createOrder = async (userId = 1, products) => {
    try {
        const result = {};
        if (products.length) {
            const thisOrder = await models.Order.create({
                userId,
            });
            for (const eachProduct of products) {
                const isProduct = await models.Product.findOne({
                    where: {
                        id: eachProduct.productId,
                    },
                });
                if (isProduct) {
                    if (eachProduct.Quantity <= isProduct.Quantity && eachProduct.Quantity > 0) {

                        const orderItemsCreation = await addOrderItems(thisOrder.id, eachProduct.productId, eachProduct.Quantity, isProduct.productName);
                        //  (productId, userId, quantity, salePrice, isReturn)
                        const inventoryUpdation = await addToInventory(eachProduct.productId, userId, eachProduct.Quantity, eachProduct.salePrice, false);
                        const productUpdation = await updateProduct(eachProduct.productId, eachProduct.Quantity, eachProduct.salePrice);
                        if (orderItemsCreation && productUpdation && inventoryUpdation) {
                            result[products.indexOf(eachProduct)] = 'Order succesfully filed!';
                        }
                    } else {
                        result[products.indexOf(eachProduct)] = 'Product Quantity not present in inventory!';
                    }
                } else {
                    result[products.indexOf(eachProduct)] = 'Product does not exist!';
                }
            }
            return result;
        }
        let m = 'Products are not present.';
        throw m;
    } catch (error) {
        throw (error);
    }
};
module.exports.createOrder = createOrder;
module.exports.createDriver = createDriver;
