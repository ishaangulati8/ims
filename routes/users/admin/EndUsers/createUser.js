const models = require('../../../../models');

/**
 * @description - Create a new User.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
async function createUser(req,res,next){
    try{
        const user = await models.Users.create({
            userName:req.body.userName,
            password:req.body.password,
            role:req.body.role
        });
        res.json({
            success:true,
            user
        })

    }catch(error){
        console.log(error);
        next(error);
    }
}

module.exports=createUser;