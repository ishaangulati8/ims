const model = require('../../../models/index');

/**
 * @description - Create a new User.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
async function createUser(req,res,next){
    try{
        const user = await models.users.create({
            userName:req.body.username,
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