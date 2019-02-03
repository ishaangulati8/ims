const models= require('../../../../models/index');

module.exports=updateUser;
/**
 * @description - Update a user according to the user id.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
const update = async (req, res, next) => {
    try {
        let userExists = await models.Users.findOne({
            where: {
                id: req.param.id,
            }
        });
        if (userExists) {
            userExists.userName = req.body.username,
            userExists.password = req.body.password,
            userExists.role = req.body.role;
            await userExists.save();
            let m = `${userExists.userName} updated`;
            res.json({
                m,
            })
        } else {
            let m = 'User does not exist';
            throw m;
        }
    } catch (error) {
        next(error);
    }
}
module.exports = update;
