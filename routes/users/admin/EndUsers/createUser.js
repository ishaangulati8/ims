const model = require('../../../models');

async function createUser(req,res,next){
    try{
        const user=await models.users.create({
            username:req.body.username,
            password:req.body.password,
            role:req.body.role
        });
        res.json({
            success:true,
            user
        })

    }catch(error){
        next(error);
    }
}

module.exports=createUser;