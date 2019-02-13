const localStatergy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

const models = require('../models');

const local = new localStatergy({
    usernameField: userName,
    passwordField: password,
    passReqToCallback: true,
},
async (req, username, password, done) => {
    try {
        const user = models.Users.findOne({
            userName: username,
            role: req.body.role,
        });
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return done(null, true);
            }
            return done(null, false);
        }
        return done("User with given credentials doesn't exist.", false);
    } catch (error) {
        return done(error);
    }
});
