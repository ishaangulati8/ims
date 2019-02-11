const models = require('../../models');
const updateProduct = require('../../utils/updateProductQuantity');
const addToInventory = require('../../utils/addToInventory');
/**
 * @description - Add a new record in the inventory.
 * @param {request} req: Request
 * @param {response} res: Result
 * @param {next} next: Next middleware.
 */
const driverAdd = async (req, res, next) => {
    try {
        const update = await add(req.productExists, req.userId, req.qauntity,
            req.salePrice, req.Return);
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
const add = async (productId, userId, qauntity, salePrice, isReturn) => {
    try {
        const productExists = await models.Products.findOne({
            where: {
                id: productId,
            },
        });
        if (productExists) {
            if (!isReturn) {
                if (qauntity <= productExists.qauntity) {
                    /** *
                    * Update the quantity to the product.
                    */
                    // eslint-disable-next-line camelcase
                    const updated_product = await updateProduct(productId, -qauntity, salePrice);
                    const updatedInventory = await addToInventory(productId, userId, qauntity,
                        salePrice, isReturn);
                    return updatedInventory;
                }
                /** *
                 * Update the quantity add the return quantity to the product.
                 */
                const returnedProduct = await updateProduct(productId, qauntity, salePrice);
                const updatedInventory = await addToInventory(productId, userId, qauntity,
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
