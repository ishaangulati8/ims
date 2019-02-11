const models = require('../../../../models');
/**
 * @description - Delete an existing user.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */

const deletion = async (req, res, next) => {
    try {
        const users = await deleteUser(req.params.id);
        if (users) {
            res.json({
                users,
            });
        } 

    } catch (error) {
        next(error);
    }
}

const deleteUser= async (id)=> {
    try {
        const user = await models.Users.findOne({
            where: {
                id,
            },
        });
        if (user.id === 1) {
            return 'Admin can not be deleted.';
        }
        if (user) {
            const m = `${user.id} deleted`;
            await user.destroy();
            return m;
        } else {
            const m = 'user does not exist!';
            throw new Error(m);
        }
    } catch (error) {
        throw new error(error);
    }
}
module.exports.deletion=deletion;
module.exports.deleteUser = deleteUser;
