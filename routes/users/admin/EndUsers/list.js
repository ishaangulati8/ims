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
        const roleExists = await models.Role.findOne({
            where: {
             id:role,
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
            let m = 'No user found';
            throw m;
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = listUsers;
