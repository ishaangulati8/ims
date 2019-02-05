const model = require('../../models/order');
/**
 * @description - create a new order
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */

async function createOrder(req, res, next) {
    try {
        //for(let i =0;i<req.body.productName.length();i++){
        const productExists = await models.Product.findOne({
            where: {
                productName: req.body.productName
            }
        });
        if (productExists) {
            let productQuantity = productExists.Quantity;
            let order_Quantity = req.body.Quantity;

            if (productQuantity >= order_Quantity && order_Quantity > 0) {
                const order = await models.Order.create({
                    userId: req.body.userId
                });
                const orderItems = await models.OrderItems.create({
                    orderId: models.Order.id,
                    productId: productExists.id,
                    orderQuantity: req.body.Quantity
                });
                res.json({
                    success: true,
                    order,
                    orderItems
                })
            }
        }

    } catch (error) {
        next(error);
    }
}