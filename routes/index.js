const router = require('express').Router();
const order = require('./order');
const auth = require('./Authentication/auth');
const users = require('./users');
const returns = require('./return');
const inventory = require('./inventory');

const passport = require('../utilities/passport');
const roleCheck = require('../utils/roleCheck');

router.use('/auth', auth);
router.use('/user', passport.authenticate('jwt', {session: false}), roleCheck(['Admin']),users);
router.use('/order', passport.authenticate('jwt', {session: false}), roleCheck(['Operator']),order);
router.use('/returns',passport.authenticate('jwt', {session: false}), roleCheck(['Operator']),returns);
router.use('/inventory', passport.authenticate('jwt', {session: false}),roleCheck(['Stockist']),inventory);

module.exports = router;
