const roleCheck = (roles) => {
    return (req, res, next) => {

        if(req.user.role === 'admin'){
            next();
            return;
        }
        
        const roleMatched = roles.find((roleToBeChecked)=>{
            return req.user.role === roleToBeChecked;
        })

        if(roleMatched){
            next()
        } else {
            res.status(403).json({
                success: false,
                error: "Unauthroized",
            })
        }
    }
}

module.exports = exports = roleCheck;