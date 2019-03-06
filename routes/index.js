const router = require('express').Router();
const order = require('./order');
const auth = require('./Authentication/auth');
const users = require('./users');
const returns = require('./return');
const inventory = require('./inventory');

const passport = require('../utilities/passport');
const roleCheck = require('../utils/roleCheck');

router.use('/auth', auth);
router.use('/user', passport.authenticate('jwt', {session: false}), roleCheck(['Admin'], 1),users);
// router.use('/user', users);
router.use('/order', passport.authenticate('jwt', {session: false}), roleCheck(['Operator'], 2),order);
router.use('/returns',passport.authenticate('jwt', {session: false}), roleCheck(['Operator'], 2),returns);
router.use('/inventory', passport.authenticate('jwt', {session: false}),roleCheck(['Stockist'],3),inventory);

module.exports = router;
