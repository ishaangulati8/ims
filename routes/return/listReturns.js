const models = require('../../models');

const driverList = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}

const listAll = async (req) => {
    try {
        const allrecords = await models.Inventory.findAll({
            
        })

    } catch (error) {
        throw new Error(error);
    }
}