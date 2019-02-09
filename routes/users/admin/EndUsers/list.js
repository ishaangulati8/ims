const models = require('../../../../models');
/**
 * @description - List user according to the role.
 * @param {requset} req
 * @param {response} res
 * @param {next} next
 */
const listUsers = async (req, res, next) => {
    try {
        const roleExists = await models.Roles.findOne({
            where: {
                role: req.params.role,
            },
        });
        if (roleExists) {
            const users = await models.Users.findAll({
                where: {
                    role: roleExists.id,
                }
            });
            if (users) {
                res.json({
                    users,
                });
            } else {
                const m = 'No user found';
                res.json({
                    m
                });
            }
        }
        else {
            const m = "Given role doesn't exist";
            throw m;
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = listUsers;
