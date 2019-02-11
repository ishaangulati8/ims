const router = require('express').Router();

const passport = require('passport');

//const jwt = require('jsonwebtoken');
const admin = require('./admin');
require('../../utilities/passport');
const passportJWT=require('passport-jwt');
const JWTStrategy=passportJWT.Strategy;

<<<<<<< HEAD
router.use('/admin',   passport.authenticate('jwt', {session: false}), admin);
=======

router.use('/admin', passport.authenticate('jwt', { session: false }), admin) ;
>>>>>>> 9ed8f5d2e8a5e6fe07fb9dd325a8f20c10713359

module.exports = router;
