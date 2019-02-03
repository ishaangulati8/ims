const model=require('../../../models/index');
/**
 * @description - create a new Product
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
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