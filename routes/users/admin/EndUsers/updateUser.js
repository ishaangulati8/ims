const models = require('../../../../models');
/**
 * @description - Update a user according to the user id.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const update = async (req, res, next) => {
    try {
        const name = req.body.userName;
        const password = req.body.password;
        const role = req.body.role;
        const users = await updateUser(req.params.id, name, password, role);
        if (users) {
            res.status(200).json({
                users,
            });
        }
    } catch (error) {
        next(error);
    }
};

/**
 * @description: Updates an existing user.
 * @param {Integer} id
 * @param {String} name
 * @param {String} password
 * @param {Integer} role
 * @returns: Returns a promise.
 */

const updateUser = async (id, name, password, role) => {
    try {
        const userExists = await models.Users.findOne({
            where: {
                id,
            },
        });
        const roleid = await models.Roles.findOne({
            where: {
                role,
            }
        });
        if (userExists) {
            userExists.userName = name;
            userExists.password = password;
            userExists.role = roleid.id;
            await userExists.save();
            const m = `${userExists.userName} updated`;
            return userExists;
        }
        const m = 'User does not exist';
        throw new Error(m);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.update = update;
module.exports.updateUser = updateUser;
