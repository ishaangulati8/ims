const models = require('../../../../models');
/**
 * @description - Delete an existing user.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
async function deleteUser(req, res, next) {
    try {
        const user = await models.Users.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (user) {
            await user.destroy();
            res.json({
                success: true,
            });
        } else {
            const m = 'user does not exist!';
            throw m;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports = deleteUser;
