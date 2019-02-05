const models = require('../../models');

/**
 * @description - Add a new record in the inventory.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const add = async (req, res, next) => {
    try {
        const productExists = models.Product.isExists(req.body.productId);
        const userExists = models.Users.findOne({
            where: {
                id: req.body.userId,
            },
        });
        if (productExists && userExists) {
            const qauntity = req.body.quantity;
            /**
             * if the quantity is 0 update the inventory and also update the
             * product quantity in the products table to 0 as well.
            */
            if (qauntity === 0) {
                await models.Inventory.create({
                    productId: req.body.productId,
                    userId: req.body.userId,
                    qauntity: 0,
                    salePrice: req.body.salePrice,
                });
                productExists.qauntity = 0;
                await productExists.save();
                const m = 'Inventory updated.';
                return res.json({
                    m,
                });
            }
            /**
                 * if the quantity is greater than zero
                 */
            let reqQuantity = req.body.qauntity;
            /**
                 * Check if the product is being added or removed.
                 * if removed then the product quantity will be negative.
                 * if added then the quantity will be positive.
                 */
            if (reqQuantity < 0) {
                reqQuantity = Math.abs(reqQuantity);
                /**
                     * Check if request quantity is greater than the product
                     * quantity.
                     */
                const product = await models.Product.findOne({
                    where: {
                        id: req.body.productId,
                    },
                });
                if (reqQuantity > product.qauntity) {
                    const m = 'Quantity can not exceed the stock qauntity.';
                    throw m;
                } else {
                    product.qauntity -= reqQuantity;
                    await product.save();
                    await models.Inventory.create({
                        productId: req.body.productId,
                        userId: req.body.userId,
                        qauntity: req.body.qauntity,
                        salePrice: req.body.salePrice,
                    });
                    const m = 'Inventory updates.';
                    return res.json({
                        m,
                    });
                }
            }

            /**
             * If there is a change in the salesPrice of the product.
             */
            if (req.body.salePrice <= 0) {
                const m = 'Enter valid sale Price';
                throw m;
            } else if (req.body.salePrice !== productExists.salePrice) {
                await models.Inventory.create({
                    productId: req.body.productId,
                    userId: req.body.userId,
                    qauntity: req.body.qauntity,
                    salePrice: req.body.salePrice,
                });
                await models.Products.save({
                    productId: req.body.productId,
                    userId: req.body.userId,
                    qauntity: req.body.qauntity,
                    salePrice: req.body.salePrice,
                });
                const m = 'Inventory Updated.';
                return res.json({
                    m,
                });
            }
        } else {
            if (!productExists) {
                const m = "Product doesn't exist.";
                throw m;
            } else if (!userExists) {
                const m = "User doesn't exist.";
                throw m;
            } else {
                const m = 'Given User and Product do not exist.';
                throw m;
            }
        }
    } catch (error) {
        next(error);
    }
};

module.exports = add;
