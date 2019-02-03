const model=require('../../../models/index');

async function createProduct(req,res,next){
    try{
        const product=models.Product.create({
            productName:req.body.productName,
            userId:req.body.userId,
            salePrice:req.body.salePrice,
            productDescription:req.body.productDescription,
            Quantity:req.body.Quantity
        })
        res.json({
            success:true,
            product
        })
    }catch(error){
        next(error);
    }
}
module.exports=createProduct;