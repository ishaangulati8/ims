const router = require('express').Router();


//const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('./admin');
require('../../utilities/passport');


router.use('/admin', passport.authenticate('jwt', { session: false }), admin);

module.exports = router;
