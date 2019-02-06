const router = require('express').Router();

const admin = require('./admin');

const jwt=require('jsonwebtoken');
const passport=require('passport');
require('../../utilities/passport');



router.use('/admin', /*  passport.authenticate('jwt', {session: false}), */admin);

module.exports = router;
