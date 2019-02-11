const router = require('express').Router();


const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('./admin');
require('../../utilities/passport');
const passportJWT=require('passport-jwt');
const JWTStrategy=passportJWT.Strategy;

router.use('/admin',   passport.authenticate('jwt', {session: false}), admin);

module.exports = router;
