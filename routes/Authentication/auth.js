const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../../utilities/passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err) {
            return next(err);
        }
        if (user) {
            req.login(user, { session: false }, (error) => {
                if (error) {
                    res.send(error);
                }
            });
<<<<<<< HEAD
            
            const token = jwt.sign(user, process.env.secret);
=======
            const token = jwt.sign({email: user.userName, id: user.id}, process.env.secret);
>>>>>>> 9ed8f5d2e8a5e6fe07fb9dd325a8f20c10713359
            return res.json({ user, token });
        }
        return res.json({
            success: false,
        });
    })(req, res, next);
});
module.exports = router;
