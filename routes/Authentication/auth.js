const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../../utilities/passport');

/**
 * Router for logging in the user by authenticating using passport.
 */
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
            const token = jwt.sign({email: user.userName, id: user.id}, process.env.secret);
            return res.json({ user, token });
        }
        return res.json({
            success: false,
        });
    })(req, res, next);
});
module.exports = router;
