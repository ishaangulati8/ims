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
            userName: reqObj.userName,
            password: reqObj.password,
            role: reqObj.role,
            id: reqObj.id,
        });
        return users;
    } catch (error) {
        throw error;
    }
}

module.exports.listAll = listAll;
module.exports.listUsers  = listUsers;
