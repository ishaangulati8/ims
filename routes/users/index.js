const router = require('express').Router();

const passport = require('passport');

//const jwt = require('jsonwebtoken');
const admin = require('./admin');
require('../../utilities/passport');
const passportJWT=require('passport-jwt');
const JWTStrategy=passportJWT.Strategy;


router.use('/admin', passport.authenticate('jwt', { session: false }), admin) ;
router.use('/admin', admin);
module.exports = router;
