const models = require('../../../../models');
/**
 * @description - Update a user according to the user id.
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
const update = async (req, res, next) => {
    try {
        const userExists = await models.Users.findOne({
            where: {
                id: req.param.id,
            },
        });
        if (userExists) {
            userExists.userName = req.body.userName;
            userExists.password = req.body.password;
            userExists.role = req.body.role;
            await userExists.save();
            const m = `${userExists.userName} updated`;
            res.json({
                m,
            });
        } else {
            const m = 'User does not exist';
            throw m;
        }
    } catch (error) {
        next(error);
    }
};
module.exports = update;
