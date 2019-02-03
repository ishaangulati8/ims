const model=require('../../../../models/index');
/**
 * @description - Delete a Product according to the product id.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
async function deleteProduct(req,res,next){
    try{
        const product=models.Product.findOne({
            where:{
                id:req.params.id
            }
        })
        if(product){
           await product.destroy();
           res.json({
               success:true
           })
        }else{
            throw 'product does not exist!';
        }
    }catch(error){next(error)}
}
module.exports=deleteProduct;