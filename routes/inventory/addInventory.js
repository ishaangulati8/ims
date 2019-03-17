const models = require('../../models');
const updateProduct = require('../../utils/updateProductQuantity').orderProduct;
const addToInventory = require('../../utils/addToInventory');
const updateQuantity = require('../../utils/updateQuantity')
/**
 * @description - Add a new record in the inventory. If return is true then it adds 
 * the given quantity to the product else subtracts the quantity of the products.
 * @param {request} req: Request
 * @param {response} res: Result
 * @param {next} next: Next middleware.
 */
const driverAdd = async (req, res, next) => {
    try {
        const update = await add(req.body.productId, req.body.userId, req.body.quantity,
            req.body.salePrice, req.body.isReturn);
        if (update) {
            res.json({
                update,
            });
        }
    } catch (error) {
        next(error);
    }
};

/**
 * @description: Adds the records to the inventory.
 * @param {integer} productId: productId
 * @param {integer} userId: userId
 * @param {integer} qauntity: qauntity
 * @param {integer} salePrice: salePrice
 * @param {boolean} isReturn: isReturn
 * @returns: Returns a promise.
 */
const add = async (productId, userId = 1, quantity, salePrice, isReturn) => {
    try {
        const productExists = await models.Product.findOne({
            where: {
                id: productId,
            },
        });
        if (productExists) {
            if (isReturn === false) {
                if (quantity <= productExists.Quantity) {
                    /** *
                    * Update the quantity to the product.
                    */
                    // eslint-disable-next-line camelcase
                    const updated_product = await updateQuantity(productId, quantity, salePrice);
                    const updatedInventory = await addToInventory(productId, userId, quantity,
                        salePrice, isReturn);
                    return updatedInventory;
                }
                /** *
                 * Update the quantity add the return quantity to the product.
                 */
            } else {
                const returnedProduct = await updateProduct(productId, quantity, salePrice);
                const updatedInventory = await addToInventory(productId, userId, quantity,
                    salePrice, isReturn);
                return updatedInventory;
            }
            throw new Error('Operation failed. Please check the ProductID.');
        } else {
            throw new Error('Product does not Exist.');
        }
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.driverAdd = driverAdd;
module.exports.add = add;
