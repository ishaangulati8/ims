const model=require('../../../models/index');

async function deleteUser(req,res,next){
    try{
        const user=models.users.findOne({
            where:{
                id:req.params.id
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