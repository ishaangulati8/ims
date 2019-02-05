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
        const productId = await models.Product.findOne({
            where: {
                productName: req.body.productName,
            }
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