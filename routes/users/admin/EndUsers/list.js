const models = require('../../../../models');
/**
 * @description - List user according to the role.
 * @param {requset} req 
 * @param {response} res 
 * @param {next} next 
 */
const listUsers = async (req, res, next) => {
    try {
        const role = req.params.role;
        const roleExists = await models.Roles.findOne({
            where: {
             id: req.params.id,
            },
        });
        if (roleExists) {
            const users = await models.Users.findAll({
                where: {
                    role: role,
                }
            });
            res.json({
                users,
            });
        }
        else {
            let m = "Given role doesn't exist";
            throw m;
        }
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = listUsers;
