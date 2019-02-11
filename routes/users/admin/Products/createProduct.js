const models = require('../../../../models');


/**
 * @description - Create a new Product.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */

const createProductDriver= async(req,res,next)=>{
    try{
        const productName=req.body.productName;
        const userId=req.body.userId;
        const salePrice=req.body.salePrice;
        const productDescription=req.body.productDescription;
        const Quantity=req.body.Quantity;
        const Product= await createProduct(productName,userId,salePrice,productDescription,Quantity);
        if(Product){
            res.json({
                success: true,
                Product,
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
        const inv = await models.Inventory.create({
            productId: pid,
            userId,
            quantity: Quantity,
            salePrice,
        });
        if (inv) {
            return product;
        }
        
    } catch (error) {
        throw new Error(error);
    }
}
module.exports.createProductDriver = createProductDriver;
module.exports.createProduct = createProduct;
