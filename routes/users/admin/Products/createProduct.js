const models = require('../../../../models');


/**
 * @description - Create a new Product.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */

const createProductDriver= async(req,res,next)=>{
    try{
        productName=req.body.productName;
        userId=req.body.userId;
        salePrice=req.body.saleprice;
        productDescription=req.body.productDescription;
        Quantity=req.body.Quantity;
        const Product= await createProduct(productName,userId,salePrice,productDescription,Quantity);
        if(Product){
            res.json({
                success: true,
                product,
            });
        }
    }catch(error){
        next(error);
    }
}

// eslint-disable-next-line comma-spacing
async function createProduct(productName,userId,salePrice,productDescription,Quantity) {
    try {
        const product = await models.Product.create({
            productName,
            userId,
            salePrice,
            productDescription,
            Quantity,
        });
        const pid = product.id;
        await models.Inventory.create({
            productId: pid,
            userId,
            quantity,
            salePrice,
        });
        
    } catch (error) {
        throw new Error(error);
    }
}
module.exports.createProductDriver=createProductDriver;
module.exports.createProduct = createProduct;
