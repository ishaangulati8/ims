const models = require('../../../../models');

const update =  async (req, res, next) => {
    try {
        const id = req.params.id;
        const userExists = await models.Users.findOne({
            where: {
                id:id,
            }
        });
        if (userExists) {
            userExists.userName = req.body.userName;
            userExists.password = req.body.password;
            userExists.role = req.body.role;
            await userExists.save();
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = update;
