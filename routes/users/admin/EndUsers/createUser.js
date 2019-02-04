const models = require('../../../../models');

/**
 * @description - Create a new User.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
async function createUser(req,res,next){
    try{
<<<<<<< HEAD
        const user = await model.users.create({
            userName:req.body.username,
=======
        const user = await models.Users.create({
            userName:req.body.userName,
>>>>>>> 056cbc502e77d80d5ea68db51f7fcd6af7fe6241
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