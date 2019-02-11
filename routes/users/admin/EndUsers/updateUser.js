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
            res.json({
                users,
            })
        } 

    } catch (error) {
        next(error);
    }
}

/**
 * @description: Updates an existing user.
 * @param {intefer} id 
 * @param {string} name 
 * @param {string} password 
 * @param {integer} role 
 * @returns: Returns a promise.
 */

const updateUser = async (id, name, password, role) => {
    try {
        const userExists = await models.Users.findOne({
            where: {
                id: id,
            },
        });
        if (userExists) {
            userExists.userName = name;
            userExists.password = password;
            userExists.role = role;
            await userExists.save();
            const m = `${userExists.userName} updated`;
            return m;
        } 
        const m = 'User does not exist';
        throw new Error(m);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.update = update;
module.exports.updateUser = updateUser;
