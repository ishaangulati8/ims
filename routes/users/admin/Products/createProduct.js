const model=require('../../../../models');

async function createProduct(req,res,next){
    try{
        const product = await models.Product.create({
            productName:req.body.productName,
            userId:req.body.userId,
            salePrice:req.body.salePrice,
            productDescription:req.body.productDescription,
            Quantity:req.body.Quantity
        })
        const findProduct = await models.Product.findOne({
            where: {
                productName: req.body.productName,
            }
        });
        const pid = findProduct.id;
        const addToInventory = await models.create({
            productId: pid,
            userId: req.body.userId,
            quantity: req.body.Quantity, 
        });
        res.json({
            success:true,
            product
        });
    }catch(error){
        next(error);
    }
}
module.exports=createProduct;
