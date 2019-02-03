const model=require('../../../models/index');

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