const models = require('../../../../models');
/**
 * @description - List user according to the role.
 * @param {requset} req
 * @param {response} res
 * @param {next} next
 */
const listUsers = async (req, res, next) => {
    try {
        const users = await listAll(req.params.role)
    } catch (error) {
        next(error);
    }
};

/**
 * @description: Returns all the users of a given role.
 * @param {String} role : Role of the users.
 * @returns: Returns a promise that contains a list of all users.
 */
const listAll = async (role) => {
    try {
        const roleExists = await models.Roles.findOne({
            where: {
                role: role,
            },
        });
        if (roleExists) {
            const users = await models.Users.findAll({
                where: {
                    role: roleExists.id,
                },
            });
            if (users) {
                return users;
            } else {
                const m = 'No user found';
                throw new Error(m);
            }
        }
        else {
            const m = "Given role doesn't exist";
            throw new Error(m);
        }
<<<<<<< HEAD

=======
>>>>>>> 166d2f5218f1146e85c3466bbcf3cef7e1687871
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.listUsers = listUsers;
module.exports.listAll = listAll;
