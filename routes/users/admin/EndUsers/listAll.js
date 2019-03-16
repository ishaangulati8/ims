const models = require('../../../../models');

const listAll = async (req, res, next) => {
    try {
        const reqObj = {...req.query};
        const users = await listUsers(reqObj);
        if (users) {
            return res.json({
                users,
            });
        } else {
            throw `No users found.`
        }
    } catch (error) {
        next(error);
    }
}

const listUsers = async (reqObj) => {
    try {
        const users = await models.Users.findAll({
            order:['role'],
        });
        return users;
    } catch (error) {
        throw error;
    }
}

module.exports.listAll = listAll;
module.exports.listUsers  = listUsers;
