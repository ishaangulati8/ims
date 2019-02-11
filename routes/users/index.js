const router = require('express').Router();

const passport = require('passport');

//const jwt = require('jsonwebtoken');
const admin = require('./admin');
require('../../utilities/passport');


router.use('/admin', passport.authenticate('jwt', { session: false }), admin) ;

module.exports = router;
