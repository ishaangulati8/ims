const model=require('../../models/order');
/**
 * @description - create a new order
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */

async function createOrder(req,res,next){
    try{
        const order=await models.Order.create({
            
        })
    }catch(error){
        next(error);}
}