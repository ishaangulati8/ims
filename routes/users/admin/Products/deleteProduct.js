const model=require('../../../../models/index');
/**
 * @description - Delete a Product according to the product id.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
async function deleteProduct(req,res,next){
    try{
        const product = models.Product.findOne({
            where:{
                id: req.params.id
            }
        })
        if (product) {
            const removeFromInventory = await models.Inventory.create({
                productId: product.id,
                userId: product.userId,
                quantity: 0,
                salePrice: product.salePrice,
            });
           await product.destroy();
           return res.json({
               success: true
           })
        } else {
            let m = 'product does not exist!'
            throw m;
        }
    } catch (error) {
        next(error)
    }
}
module.exports=deleteProduct;