const models = require('../../../../models');
/**
 * @description - List user according to the role.
 * @param {requset} req
 * @param {response} res
 * @param {next} next
 */
const listUsers = async (req, res, next) => {
    try {
        const users = await listAll(req.params.role);
        res.status(200).json({
            users,
        });
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
        if (role !== "") {
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
                if (users.length !== 0) {
                    return users;
                } else {
                    const m = 'No user found';
                    throw m;
                }
            }
            else {
                const m = "Given role doesn't exist";
                throw m;
            }
        } else {
            const users = mo
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.listUsers = listUsers;
module.exports.listAll = listAll;
