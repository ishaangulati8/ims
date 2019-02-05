// const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');


// Load User model
const User = require('../models/index');

passport.use(
    new LocalStrategy({
        usernameField: 'username',
    },
    async (username, password, done) => {
        try {
        // Match user
            const isUser = await User.Users.findOne({
                where: {
                    username,
                },
            });
            if (isUser) {
                const match = await bcrypt.compare(password, isUser.password);
                if (match) {
                    return done(null, isUser);
                }
                return done(null, false, { message: 'Password incorrect' });
            }
            return done(null, false, { message: 'This username is not registered' });
        } catch (error) {
            done(error);
        }
    }),
);
module.exports = passport;
