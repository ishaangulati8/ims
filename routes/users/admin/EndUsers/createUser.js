const models = require('../../../../models');

/**
 * @description - Create a new User.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */

const createDriver=async (req,res,next)=>{
    try{
        const user=await createUser(req.body.userName,req.body.password,req.body.role);
    }catch(error){
        next(error);
    }
}

async function createUser(userName,password,role) {
    try {
        const roleExists = await models.Roles.findOne({
            where: {
                role,
            },
        });
        if (roleExists) {
            const user = await models.Users.create({
                userName,
                password,
                role,
            });
            res.json({
                success: true,
                user,
            });
        } else {
            const m = `role doesn't exist. Enter a valid role.`;
            throw new Error(m);
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createUser;
