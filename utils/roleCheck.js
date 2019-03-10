const roles = require('../models');

const roleCheck = (roles = '', roleId) => (req, res, next) => {

        if(req.user.role === 1){
            next();
            return;
        }
        
        const roleMatched = roles.find((roleToBeChecked) => {
            return req.user.role === roleToBeChecked || req.user.role === roleId;
        })

        if(roleMatched){
            next()
        } else {
            res.status(403).json({
                success: false,
                error: "Unauthroized",
            })
        }
    };

module.exports = exports = roleCheck;
