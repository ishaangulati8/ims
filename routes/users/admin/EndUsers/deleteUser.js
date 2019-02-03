const model=require('../../../models/index');
/**
 * @description - Delete an existing user.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
async function deleteUser(req,res,next){
    try{
        const user = models.users.findOne({
            where:{
                id:req.params.id,
            }
        });
        if(user){
            await user.destroy();
            res.json({
                success:true,
            })
        }else{
            throw 'user does not exist!';
        }
    }catch(error){
        next(error);
    }
}
module.exports=deleteUser;