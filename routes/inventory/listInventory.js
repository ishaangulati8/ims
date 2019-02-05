const models = require('../../models');

/**
 * @description - function to list all the orders.
 * @param {requset} req 
 * @param {response} res 
 * @param {next} next 
 */
const listAll = async (req, res, next) => {
    try {
        const list = model.Orders.findAll({
            
        });
    } catch(error) {
        next(error);
    }
}