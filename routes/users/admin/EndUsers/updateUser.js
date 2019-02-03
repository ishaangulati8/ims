const models= require('../../../models/index');

module.exports=updateUser;

async function updateUser(req,res,next){
    try{
        const user=await models.users.findOne({
           where:{
               id:req.params.id
           }
        })
        if(user){
            user.username=req.body.name
            user.password=req.body.password
            user.role=req.body.role
            await note.save()
            res.json({
                success:true,
                user,
            })
        }else{
            throw 'user not found!'
        }

    }
    catch(error){
        next(error);
    }
}