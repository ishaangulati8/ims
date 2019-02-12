const router = require('express').Router();

const passport = require('passport');

//const jwt = require('jsonwebtoken');
const admin = require('./admin');
require('../../utilities/passport');


router.use('/admin', passport.authenticate('jwt', { session: false }), admin) ;
router.use('/admin', admin);
module.exports = router;
