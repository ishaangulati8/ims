const models = require('../../models');
const addRecord = require('../../utils/addToInventory');

const updateProduct = require('../../utils/updateProductQuantity')

const addToInventory = require('../../utils/addToInventory');
/**
 * @description - Add a new record in the inventory.
 * @param {request} req: Request
 * @param {response} res: Result
 * @param {next} next: Next middleware.
 */
const driverAdd = async (req, res, next) => {
    try {
        const update = await add(req.productExists, req.userId, req.qauntity, req.salePrice, req.Return);

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
    const productExists = await models.Products.findOne({
        where: {
            id: productId,
        }
    });
    if (productExists) {
        if (!isReturn) {
            if (qauntity <= productExists.qauntity) {
               /**
                * Update the quantity to the product.
                */
               const updated_product = await updateProduct(productId, -qauntity,salePrice);
               const updatedInventory = await addToInventory(productId, userId, qauntity, salePrice, isReturn);
               return updatedInventory;
        } else {
            /***
             * Update the quantity add the return quantity to the 
             */
            const returnedProduct = await updateProduct(productId, qauntity, salePrice);
            const updatedInventory = await addToInventory(productId, userId, qauntity, salePrice, iseturn);
            return updatedInventory;
        }
    } else {
        throw new Error(`Operation failed. Please check the ProductID.`)
    }
}

module.exports.driverAdd = driverAdd;
module.exports.add = add;
